export type Currency = 'RUB' | 'USD' | 'EUR'

export interface ProductCardProps {
  title: string
  origin: string
  price: number
  currency: Currency
  imageUrl: string
}
