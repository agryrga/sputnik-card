import React from 'react'
import type { ProductCardProps } from '../../types'
import { formatPrice } from '../../utils'

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  return (
    <article className="flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={imageUrl}
        alt={title}
        className="w-full aspect-[4/3] object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col justify-center p-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-500 mt-1">Происхождение: {origin}</p>
        <p className="text-lg font-semibold text-gray-800 mt-3">
          {formatPrice(price, currency)}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
