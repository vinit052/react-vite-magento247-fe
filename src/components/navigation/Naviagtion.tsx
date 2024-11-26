import { NavLink } from "react-router-dom"


export const Naviagtion = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="hidden md:flex space-x-8">
                    <NavLink to="/" className="text-white hover:text-gray-300">Home</NavLink>
                    <NavLink to="/products" className="text-white hover:text-gray-300">Products</NavLink>
                    <NavLink to="/about" className="text-white hover:text-gray-300">About</NavLink>
                    <NavLink to="/services" className="text-white hover:text-gray-300">Services</NavLink>
                    <NavLink to="/contect" className="text-white hover:text-gray-300">Contact</NavLink>
                </div>
                <div className="md:hidden flex items-center">
                    <button id="menuButton" className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}
