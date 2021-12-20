import { quote } from "./quote";

export interface currency {
  id: number
  name: string
  symbol: string
  slug: string
  num_market_pairs: number
  date_added: string
  tags: string[]
  max_supply: any
  circulating_supply: number
  total_supply: number
  is_active: number
  platform: any
  cmc_rank: number
  is_fiat: number
  last_updated: string
  quote: quote
}
