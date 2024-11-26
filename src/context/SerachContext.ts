import React, { createContext } from "react";


type SearchConfigType = {
    text: string,
    currentPage: number,
    pageSize: number
}

interface SearchContextType {
    params: SearchConfigType
    setParams: React.Dispatch<React.SetStateAction<SearchConfigType>>
}

export const SearchContext = createContext<SearchContextType | undefined>(undefined)


