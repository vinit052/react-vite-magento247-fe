import { useQuery } from "@apollo/client"
import { useProductContext } from "../context/ProductsContext"
import { GET_PRODUCT } from "../api/getProduct"
import { useState } from "react"

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

export const useProductList = () => {

    const { filter } = useProductContext()

    const [error, setError] = useState<string | null>(null)
    const [items, setItems] = useState<Product[] | null>([])
    const [totalPages, setTotalPages] = useState(0)

    useQuery(GET_PRODUCT, {
        variables: {
            'text': filter.text,
            'currentPage': filter.currentPage,
            'pageSize': filter.pageSize
        },
        onCompleted(data) {
            console.log(data.products);
            if (data?.products?.items) {
                setItems(data.products.items)
                const totalPage = Math.ceil((data.products.total_count) / (data.products.page_info.page_size))
                setTotalPages(totalPage)
                console.log('TC: ' + data.products.total_count)
                console.log('PS: ' + data.products.page_info.page_size)
            } else[
                setItems([])
            ]
        },
        onError(error) {
            console.log(error)
            setError(error.message)
        }
    })

    return (
        { error, items, totalPages }
    )
}
