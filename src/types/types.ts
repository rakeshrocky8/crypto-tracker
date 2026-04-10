export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
}

export interface CryptoState {
  items: Coin[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
