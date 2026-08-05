import type { Account } from "../types/account";
import type { Trade } from "../types/trade";

export const account: Account = {
  startingBalance: 100000,
  currentBalance: 103250, // Optional (we won't use this directly)
  maximumDrawdown: 10000,
  dailyLossLimit: 5000,
};

export const trades: Trade[] = [
  {
    id: "1",
    asset: "BTC",
    symbol: "BTCUSD",
    quantity: 1,
    price: 0,
    timestamp: new Date(),
    pnl: 1200,
    direction: "Long",
  },

  {
    id: "2",
    asset: "ETH",
    symbol: "ETHUSD",
    quantity: 1,
    price: 0,
    timestamp: new Date(),
    pnl: -450,
    direction: "Short",
  },

  {
    id: "3",
    asset: "BTC",
    symbol: "BTCUSD",
    quantity: 1,
    price: 0,
    timestamp: new Date(),
    pnl: 800,
    direction: "Short",
  },

  {
    id: "4",
    asset: "SOL",
    symbol: "SOLUSD",
    quantity: 1,
    price: 0,
    timestamp: new Date(),
    pnl: -300,
    direction: "Long",
  },

  {
    id: "5",
    asset: "ETH",
    symbol: "ETHUSD",
    quantity: 1,
    price: 0,
    timestamp: new Date(),
    pnl: 2000,
    direction: "Long",
  },
];