import { account, trades } from "../data/mockData";

import {
  calculateCurrentBalance,
  calculateTotalPnL,
  calculateWinRate,
  calculateRiskStatus,
  calculateWinningTrades,
  calculateLosingTrades,
  calculateLargestWinningTrade,
  calculateLargestLosingTrade,
} from "../utils";

export function useDashboardData() {
  return {
    currentBalance: calculateCurrentBalance(
      account.startingBalance,
      trades
    ),

    totalPnL: calculateTotalPnL(trades),

    winRate: calculateWinRate(trades),

    riskStatus: calculateRiskStatus(account, trades),

    winningTrades: calculateWinningTrades(trades),

    losingTrades: calculateLosingTrades(trades),

    largestWinner: calculateLargestWinningTrade(trades),

    largestLoser: calculateLargestLosingTrade(trades),

  };
}