
import { Item } from "../components/product/Item";
import Pagination from "../components/product/Pagination";
import { useProductContext } from "../context/ProductsContext";
import { useProductList } from "../hooks/useProductList";

function ProductList() {

  const { error, totalPages } = useProductList()
  const { filter } = useProductContext()

  if (error) return <p className="text-red-700">{error}</p>

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">{filter.text.length > 0 && ("Search result for: " + filter.text)}</h1>
      {(totalPages > 0 && <Pagination totalPagas={totalPages} />)}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Item />
      </div>
    </div>
  )
}

export default ProductList