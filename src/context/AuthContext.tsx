import React, { useContext, useState, createContext } from 'react'

interface ContextType {
    token: string | null
    authenticate: boolean
    setAuthenticate: (value: boolean) => void
    setToken: (token: string) => void
}

interface ContextPropes {
    children: React.ReactNode
}

export const authContext = createContext<ContextType | undefined>(undefined)

export const useAuthContext = () => {
    const context = useContext(authContext)
    if (!context) {
        throw new Error("UseAuthContext must be inside AuthContextProvider")
    }

    return context
}

export const AuthProvider = ({ children }: ContextPropes) => {
    const authToken = localStorage.getItem('token') ? localStorage.getItem('token') : ""
    const [token, setToken] = useState<string | null>(authToken)
    const [authenticate, setAuthenticate] = useState(token ? true : false)

    return (
        <authContext.Provider value={{ token, setToken, authenticate, setAuthenticate }}>
            {children}
        </authContext.Provider>
    )
}
