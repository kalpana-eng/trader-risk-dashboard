import type { Trade } from "../types/trade";

/* Total P&L */
export const calculateTotalPnL = (trades: Trade[]): number => {
  return trades.reduce((total, trade) => total + trade.pnl, 0);
};
/*Current Balance */
export const calculateCurrentBalance = (
    startingBalance: number, 
    trades: Trade[]): number => {
  return startingBalance + calculateTotalPnL(trades);
};
/*Winning Trades */
export const calculateWinningTrades = (trades: Trade[]): number => {
  return trades.filter((trade) => trade.pnl > 0).length;
};
/*Losing Trades */
export const calculateLosingTrades = (trades: Trade[]): number => {
  return trades.filter((trade) => trade.pnl < 0).length;
};
/*Win Rate */
export const calculateWinRate = (trades: Trade[]): number => {
 if(trades.length === 0) return 0;
  return Number(
    ((calculateWinningTrades(trades) / trades.length) *100).toFixed(2));
};
/*Largest Winning Trade */
export const calculateLargestWinningTrade = (
    trades: Trade[]
):Trade|undefined => {
  return trades
  .filter((trade) => trade.pnl > 0)
  .reduce(
    (largest, trade) =>
        trade.pnl > largest.pnl ? trade : largest,
      trades.filter((trade) => trade.pnl > 0)[0]
    );
};
/*Largest Losing Trade */
export const calculateLargestLosingTrade = (
    trades: Trade[]
):Trade|undefined => {
  return trades
  .filter((trade) => trade.pnl < 0)
  .reduce(
    (smallest, trade) =>
        trade.pnl < smallest.pnl ? trade : smallest,
      trades.filter((trade) => trade.pnl < 0)[0]
    );
};

/* AverageWinning Trade */
export const calculateAverageWinningTrade = (
  trades: Trade[]
): number => {
  const winners = trades.filter((trade) => trade.pnl > 0);

  if (!winners.length) return 0;

  return Number(
    (
      winners.reduce((sum, trade) => sum + trade.pnl, 0) /
      winners.length
    ).toFixed(2)
  );
};

export const calculateAverageLosingTrade = (
  trades: Trade[]
): number => {
  const losers = trades.filter((trade) => trade.pnl < 0);

  if (!losers.length) return 0;

  return Number(
    (
      Math.abs(
        losers.reduce((sum, trade) => sum + trade.pnl, 0)
      ) / losers.length
    ).toFixed(2)
  );
};