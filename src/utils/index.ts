import type { Currency } from '../types'

const localeMap: Record<Currency, string> = {
  RUB: 'ru-RU',
  USD: 'en-US',
  EUR: 'de-DE',
}

export function formatPrice(priceInCents: number, currency: Currency): string {
  const priceInUnits = priceInCents / 100
  const formatter = new Intl.NumberFormat(localeMap[currency], {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  })
  return formatter.format(priceInUnits)
}
