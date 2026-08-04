import type { Trade } from "../types/trade";
import type { Account } from "../types/account";
import { calculateTotalPnL } from "./performance";

/**
 * Current Drawdown
 */
export const calculateCurrentDrawdown = (
  account: Account,
  trades: Trade[]
): number => {
  const pnl = calculateTotalPnL(trades);

  if (pnl >= 0) return 0;

  return Math.abs(pnl);
};

/**
 * Remaining Drawdown
 */
export const calculateRemainingDrawdown = (
  account: Account,
  trades: Trade[]
): number => {
  return (
    account. maximumDrawdown -
    calculateCurrentDrawdown(account, trades)
  );
};

/**
 * Current Day Loss
 */
export const calculateCurrentDayLoss = (
  trades: Trade[]
): number => {
  return trades
    .filter((trade) => trade.pnl < 0)
    .reduce((sum, trade) => sum + Math.abs(trade.pnl), 0);
};

/**
 * Remaining Daily Loss
 */
export const calculateRemainingDailyLoss = (
  account: Account,
  trades: Trade[]
): number => {
  return (
    account.dailyLossLimit -
    calculateCurrentDayLoss(trades)
  );
};

/**
 * Risk Status
 */
export const calculateRiskStatus = (
  account: Account,
  trades: Trade[]
): "Safe" | "Approaching Limit" | "At Risk" => {
  const used =
    calculateCurrentDrawdown(account, trades) /
    account. maximumDrawdown;

  if (used >= 0.8) return "At Risk";

  if (used >= 0.5) return "Approaching Limit";

  return "Safe";
};

/**
 * Risk Score (0-100)
 */
export const calculateRiskScore = (
  account: Account,
  trades: Trade[]
): number => {
  const used =
    calculateCurrentDrawdown(account, trades) /
    account. maximumDrawdown;

  return Math.max(0, Math.round((1 - used) * 100));
};