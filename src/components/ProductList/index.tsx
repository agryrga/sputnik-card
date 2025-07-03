import React from 'react'
import ProductCard from '../ProductCard'
import type { ProductCardProps } from '../../types'

import styles from './index.module.css'

export interface ProductListProps {
  products: ProductCardProps[]
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <section className={styles.productGrid}>
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
    </section>
  )
}

export default ProductList
