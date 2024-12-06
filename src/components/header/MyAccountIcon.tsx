import { useQuery } from "@apollo/client"
import { Link } from "react-router-dom"
import { GET_USER_QUERY } from "../../api/userQuery"

import { useUserContext } from "../../context/UserContext"
import { useEffect } from "react"
import useLogin from "../../hooks/useLogin"


export const MyAccountIcon = () => {
    const { error, data } = useQuery(GET_USER_QUERY)
    const { user, setUser } = useUserContext();
    const { handleLogout } = useLogin()

    useEffect(() => {
        if (data?.customer?.firstname) {
            setUser(data.customer.firstname)
        } else if (error) {
            console.log(error)
            handleLogout()
        } else {
            setUser("")
        }

    }, [data, setUser])

    return (
        <>
            {(user) && <h6>Welcome, {user}</h6>}
            <button className="text-gray-700 hover:text-blue-600 transition">
                <Link to="/login">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" stroke-inejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    </svg>
                </Link>
            </button>
            {user && <button onClick={handleLogout}>Logout</button>}
        </>
    )
}
