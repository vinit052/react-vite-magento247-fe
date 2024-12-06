import { useMutation } from "@apollo/client"
import { useState } from "react"
import { LOGIN_MUTATION } from "../api/loginMutation"
import { useAuthContext } from "../context/AuthContext"


// interface LoginResponse {
//     error: string | null
//     loading: boolean
// }
const useLogin = () => {

    const { setToken, authenticate, setAuthenticate } = useAuthContext()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const [getToken] = useMutation(LOGIN_MUTATION)

    const handleLogin = async (username: string, password: string) => {
        getToken(
            {
                variables: {
                    username,
                    password
                },
                onCompleted: (data) => {
                    const token = data.generateCustomerToken.token
                    console.log("Login Response Token: " + token);
                    setLoading(false)
                    setToken(token)
                    setAuthenticate(true)
                    localStorage.setItem('token', token)

                },
                onError: (error) => {
                    console.log(error);
                    setError(error.message)
                    setLoading(false)
                    setAuthenticate(false)
                }
            },

        )
    }

    const handleLogout = () => {
        setToken("")
        setError("")
        setLoading(false)
        setAuthenticate(false)
        localStorage.removeItem('token')
    }
    return (
        { loading, error, authenticate, setAuthenticate, handleLogin, handleLogout }
    )
}

export default useLogin