import type{ Trade } from "../types/trade";

/**
 * Average Winning Trade
 */
export const calculateAverageWinner = (
  trades: Trade[]
): number => {
  const winners = trades.filter((trade) => trade.pnl > 0);

  if (!winners.length) return 0;

  const total = winners.reduce(
    (sum, trade) => sum + trade.pnl,
    0
  );

  return Number((total / winners.length).toFixed(2));
};

/**
 * Average Losing Trade
 */
export const calculateAverageLoser = (
  trades: Trade[]
): number => {
  const losers = trades.filter((trade) => trade.pnl < 0);

  if (!losers.length) return 0;

  const total = losers.reduce(
    (sum, trade) => sum + Math.abs(trade.pnl),
    0
  );

  return Number((total / losers.length).toFixed(2));
};

/**
 * Profit Factor
 */
export const calculateProfitFactor = (
  trades: Trade[]
): number => {
  const grossProfit = trades
    .filter((trade) => trade.pnl > 0)
    .reduce((sum, trade) => sum + trade.pnl, 0);

  const grossLoss = trades
    .filter((trade) => trade.pnl < 0)
    .reduce((sum, trade) => sum + Math.abs(trade.pnl), 0);

  if (grossLoss === 0) return grossProfit;

  return Number((grossProfit / grossLoss).toFixed(2));
};