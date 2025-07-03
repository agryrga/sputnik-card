import ProductList from './components/ProductList'
import { mockProducts } from './mocks/products'

function App() {
  return (
    <main className="container mx-auto p-4">
      <ProductList products={mockProducts} />
    </main>
  )
}

export default App
