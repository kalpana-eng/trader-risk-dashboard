import type{ Account} from "../types/account";
import type{ Trade} from "../types/trade";
export const account: Account = {
  startingBalance: 10000,
  currentBalance: 9500,
  maximumDrawdown: 1000,
  dailyLossLimit: 500,
};
export const trades: Trade[] = [
    {
        id: "1",
        asset: "BTC",
        symbol: "BTCUSD",
        quantity: 0.5,
        price: 45000,
        timestamp: new Date(),
        pnl: -2250,
        direction: "Long"
    },
    {
        id: "2",
        asset: "ETH",
        symbol: "ETHUSD",
        quantity: 2,
        price: 3000,
        timestamp: new Date(),
        pnl: 6000,
        direction: "Short"
    },
    {
        id: "3",
        asset: "BTC",
        symbol: "BTCUSD",
        quantity: 0.5,
        price: 45000,
        timestamp: new Date(),
        pnl: 800,
        direction: "Short"
    },
    {
        id: "4",
        asset: "SOL",
        symbol: "SOLUSD",
        quantity: 10,
        price: 100,
        timestamp: new Date(),
        pnl: -1000,
        direction: "Long"
    },
    {
        id: "5",
        asset: "ADA",
        symbol: "ADAUSD",
        quantity: 100,
        price: 1,
        timestamp: new Date(),
        pnl: -100,
        direction: "Short"
    }
];