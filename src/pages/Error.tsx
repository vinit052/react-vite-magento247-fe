import { Link } from "react-router-dom"


export const Error = () => {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen text-center">
            <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-6">Oops! The page you are looking for cannot be found.</p>
                <Link to="/" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition">Go Back Home</Link>
            </div>
        </div>
    )
}
