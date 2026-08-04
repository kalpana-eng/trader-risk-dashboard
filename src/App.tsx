import  { account, trades } from "./data/mockData";
import {
  calculateTotalPnL,
  calculateWinRate,
  calculateLargestWinningTrade,
  calculateRiskStatus,
} from "./utils";

console.log(calculateTotalPnL(trades));
console.log(calculateWinRate(trades));
console.log(calculateLargestWinningTrade(trades));
console.log(calculateRiskStatus(account, trades));