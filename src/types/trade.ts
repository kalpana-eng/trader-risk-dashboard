export interface Trade {
  id: string;
  symbol: string;
  quantity: number;
  price: number;
  timestamp: Date;
  asset: string;
  pnl: number;
  direction: "Long" | "Short";
}