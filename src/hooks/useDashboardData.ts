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
  calculateCurrentDrawdown,
  calculateRemainingDrawdown,
  calculateCurrentDayLoss,
  calculateRemainingDailyLoss,
  calculateRiskScore,
  calculateAverageWinningTrade,
  calculateAverageLosingTrade,
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

    currentDrawdown: calculateCurrentDrawdown(account, trades),

    remainingDrawdown: calculateRemainingDrawdown(account, trades),

    currentDayLoss: calculateCurrentDayLoss(trades),

    remainingDailyLoss: calculateRemainingDailyLoss(account, trades),

    riskScore: calculateRiskScore(account, trades),

    averageWinningTrade: calculateAverageWinningTrade(trades),

    averageLosingTrade: calculateAverageLosingTrade(trades),

  };
}