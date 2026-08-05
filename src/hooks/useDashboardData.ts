import { account, trades } from "../data/mockData";

import {
  calculateCurrentBalance,
  calculateTotalPnL,
  calculateWinRate,
  calculateRiskStatus,
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
  };
}