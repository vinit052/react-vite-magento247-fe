import React, { createContext, useContext, useState } from 'react'

interface userContextType {
    user: string
    setUser: (user: string) => void
}

interface Propes {
    children: React.ReactNode
}

const userContext = createContext<userContextType | undefined>(undefined)

export const useUserContext = () => {
    const context = useContext(userContext)
    if (!context) {
        throw new Error('useUserContext must be inside User provider')
    }
    return context
}

export const UserProvider = ({ children }: Propes) => {
    const [user, setUser] = useState("")
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}
