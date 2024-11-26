import { ChangeEvent, useContext } from "react"
import { SearchContext } from "../../context/SerachContext"
import { Link } from "react-router-dom";


export const Header = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("Context  is passed");
    }
    const { params, setParams } = context;
    const handleSerachInput = (event: ChangeEvent<HTMLInputElement>) => {
        setParams((prevParams) => ({
            ...prevParams,
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
                            <img src="https://magento.test/static/version1727241617/frontend/Magento/luma/en_US/images/logo.svg" alt="Logo" className="h-10" />
                        </Link>
                    </div>

                    {/* <!-- Search Bar Section --> */}
                    <div className="flex flex-1 justify-center">
                        <div className="relative w-full max-w-2xl">
                            <input value={params.text} onChange={handleSerachInput}
                                type="text" placeholder="Search..." className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 18l6-6m0 0a7.958 7.958 0 001.267-4.567A7.97 7.97 0 0010 4a7.97 7.97 0 00-7.267 5.433A7.958 7.958 0 004 10a7.97 7.97 0 005.433 7.267C9.907 17.077 10 18 10 18z">
                                </path>
                            </svg>
                        </div>
                    </div>

                    {/* <!-- Icons Section (Cart, My Account) --> */}
                    <div className="flex items-center space-x-6">
                        {/* <!-- Cart Icon --> */}
                        <div className="relative">
                            <button className="text-gray-700 hover:text-blue-600 transition">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l3.6 7.2 1.4 4.8h7.2l1.4-4.8L19 3h2m-4 3h-5m5 0l-1.6 5.6M14 6H9"></path>
                                </svg>
                            </button>
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">3</span>
                        </div>

                        {/* <!-- My Account Icon --> */}
                        <button className="text-gray-700 hover:text-blue-600 transition">
                            <Link to="/login">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" stroke-inejoin="round" strokeWidth="2" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM12 14c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                </svg>
                            </Link>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}
