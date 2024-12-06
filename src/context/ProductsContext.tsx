import React, { createContext, useContext, useState } from 'react'

interface Propes {
    children: React.ReactNode
}

type FilterType = {
    text: string
    currentPage: number
    pageSize: number
}

interface ProductFilter {
    filter: FilterType
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>
}

const productContext = createContext<ProductFilter | undefined>(undefined)

export const useProductContext = () => {
    const context = useContext(productContext)
    if (!context) {
        throw new Error("useProductContext must be used by ProductsProvider")
    }
    return context
}

export const ProductsProvider = ({ children }: Propes) => {
    const defaultFilter = {
        text: "",
        currentPage: 1,
        pageSize: 4
    }
    const [filter, setFilter] = useState<{ text: string; currentPage: number; pageSize: number }>(defaultFilter);
    console.log(filter)
    return (
        <productContext.Provider value={{ filter, setFilter }}>
            {children}
        </productContext.Provider>
    )
}
