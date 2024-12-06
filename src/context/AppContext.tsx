import React from "react"
import { AuthProvider } from "./AuthContext"
import { ApolloClientWrapper } from "./ApolloClientWrapper"
import { ProductsProvider } from "./ProductsContext"
import { UserProvider } from "./UserContext"


interface Propes {
    children: React.ReactNode
}

export const AppContext = ({ children }: Propes) => {
    return (
        <AuthProvider>
            <ApolloClientWrapper>
                <UserProvider>
                    <ProductsProvider>
                        {children}
                    </ProductsProvider>
                </UserProvider>
            </ApolloClientWrapper>
        </AuthProvider>
    )
}
