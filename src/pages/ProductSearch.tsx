
import { useQuery } from "@apollo/client"

import { GET_PRODUCT } from "../api/getProduct"
import { Item } from "../components/product/Item";
import Pagination from "../components/product/Pagination";
import { useContext } from "react";
import { SearchContext } from "../context/SerachContext";


type Product = {
  name: string
  sku: string
  thumbnail: {
    url: string
  }
  price_range: {
    minimum_price: {
      regular_price: {
        value: number
        currency: string
      }
    }
  }
}

function ProductList() {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error("Compoent should be correct ");
  }

  const { params, setParams } = context;

  console.log("Page Size :" + params.pageSize);
  console.log("Currnet Page : " + params.currentPage);
  console.log("Search text: " + params.text)

  let searchText = params.text;
  let pageSize = params.pageSize;
  let currentPage = params.currentPage;

  const { loading, error, data } = useQuery(GET_PRODUCT,
    {
      variables: {
        searchText,
        pageSize,
        currentPage
      }
    });

  if (loading) return <p>Loading</p>;
  if (error) return <p className="text-red-700">{error.message}</p>

  console.log(data.products.total_count)
  console.log(data.products)

  //setTotalPage(parseInt(pages))

  let totalPage = Math.ceil(data.products.total_count / pageSize);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {loading && <p>Loading</p>}
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">{params.text.length > 0 && ("Search result for: " + params.text)}</h1>
      <Pagination totalPagas={totalPage} />
      {productGrid(data.products.items)}
    </div>

  )
}


function productGrid(products: Product[]) {
  return <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {
        products.map((product: Product, index: number) => {
          return <Item item={product} key={index} />
        })
      }
    </div>
  </>
}


export default ProductList