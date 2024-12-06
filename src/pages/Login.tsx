import { FormEvent, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import useLogin from "../hooks/useLogin"

export const Login = () => {

    const [username, setUsername] = useState<string | null>("")
    const [password, setPassword] = useState<string | null>("")
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (usernameRef.current) {
            usernameRef.current.focus();
        }

        if (passwordRef.current) {
            passwordRef.current.focus();
        }
    }, [username, password])

    const { error, authenticate, handleLogin } = useLogin()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        if (username === null || password === null) {
            return
        }
        e.preventDefault()
        handleLogin(username, password)
    }

    if (authenticate) {
        return <h3 className="text-right">You have logged in successfully</h3>
    }

    return (
        <>
            <div className="max-w-screen-lg w-[400px] p-5 bg-white border border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            ref={usernameRef}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                        />
                        <p className="text-red-500 text-sm mt-1">Email is required</p>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            ref={passwordRef}
                            name="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                        />
                        <p className="text-red-500 text-sm mt-1">Password is required</p>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?
                        <Link to="/signup" className="text-blue-600 hover:text-blue-800">Sign up</Link>
                    </p>
                </div>
                {(error != null && (<p className="text-red-500 text-sm mt-4">{error}</p>))}
            </div>

        </>
    )
}
