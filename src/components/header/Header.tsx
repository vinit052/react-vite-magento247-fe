import { ChangeEvent } from "react"

import { Link } from "react-router-dom";
import { MyAccountIcon } from "./MyAccountIcon";
import { useProductContext } from "../../context/ProductsContext";

export const Header = () => {
    const { filter, setFilter } = useProductContext();
    const handleSerachInput = (event: ChangeEvent<HTMLInputElement>) => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            text: event.target.value,
            currentPage: 1
        }))
    }
    return (
        <>
            <header className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    {/* <!-- Logo Section --> */}
                    <div className="flex items-center space-x-4">
                        <Link to="/">
                            <img src="/images/logo.svg" alt="Logo" className="h-10" />
                        </Link>
                    </div>
                    {/* <!-- Search Bar Section --> */}
                    <div className="flex flex-1 justify-center">
                        <div className="relative w-full max-w-2xl">
                            <input value={filter.text} onChange={handleSerachInput}
                                type="text" placeholder="Search..." className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18l6-6m0 0a7.958 7.958 0 001.267-4.567A7.97 7.97 0 0010 4a7.97 7.97 0 00-7.267 5.433A7.958 7.958 0 004 10a7.97 7.97 0 005.433 7.267C9.907 17.077 10 18 10 18z">
                                </path>
                            </svg>
                        </div>
                    </div>
                    {/* <!-- Icons Section (Cart, My Account) --> */}
                    <div className="flex items-center space-x-6">
                        <MyAccountIcon />
                    </div>
                </div>
            </header>
        </>
    )
}

