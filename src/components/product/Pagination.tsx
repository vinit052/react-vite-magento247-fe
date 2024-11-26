import React, { ChangeEvent, MouseEvent, useContext } from "react";
import { SearchContext } from "../../context/SerachContext";


interface Props {
    totalPagas: number
}

function Pagination({ totalPagas }: Props) {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Event("Throw errror")
    }

    const { params, setParams } = context;

    const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setParams((prevParams) => ({
            ...prevParams,
            pageSize: parseInt(event.target.value)
        }));
    }

    const handlePageNumber = (e: MouseEvent<HTMLButtonElement>) => {
        const page = parseInt(e.currentTarget.value);
        setParams((prevParams) => ({
            ...prevParams,
            currentPage: page
        }))
    }


    const pageSelectors = []
    for (let i = 1; i <= totalPagas; i++) {
        if (i == 5) { break; }
        const style = i === params.currentPage ? 'p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600' : 'p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300';
        pageSelectors.push(<button value={i} onClick={handlePageNumber} className={style}>{i}</button>)
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex justify-between items-center mb-4">
                    {/* <!-- Page Size Dropdown --> */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">Items per page:</label>
                        <select value={params.pageSize} onChange={handlePageSizeChange} id="pageSize" name="pageSize" className="ml-2 p-2 rounded border border-gray-300">
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                            <option value="16">16</option>
                            <option value="20">20</option>
                        </select>
                    </div>

                    {/* <!-- Pagination Info (Current Page and Total Pages) --> */}
                    <div className="text-sm text-gray-600">
                        <span>Page <span id="currentPage">{params.currentPage}</span> of <span id="totalPages">{totalPagas}</span></span>
                    </div>
                </div>

                {pageButtons(pageSelectors)}

            </div>
        </>
    )
}

function pageButtons(pageSelectors: React.ReactNode) {
    return <>
        <div className="flex items-center justify-center space-x-4">
            {/* <!-- First Page Button --> */}
            <button id="firstPage" className="p-2 rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 disabled:opacity-50" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 6l-6 6 6 6M7 6l-6 6 6 6"></path>
                </svg>
            </button>

            {/* <!-- Previous Page Button --> */}
            <button id="prevPage" className="p-2 rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 disabled:opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l-7 7 7 7"></path>
                </svg>
            </button>

            {/* <!-- Page Numbers --> */}
            <div className="flex space-x-2">
                {pageSelectors}
            </div>

            {/* <!-- Next Page Button --> */}
            <button id="nextPage" className="p-2 rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 disabled:opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l7-7-7-7"></path>
                </svg>
            </button>

            {/* <!-- Last Page Button --> */}
            <button id="lastPage" className="p-2 rounded-full bg-gray-300 text-gray-600 hover:bg-gray-400 disabled:opacity-50" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6l6 6-6 6M17 6l6 6-6 6"></path>
                </svg>
            </button>
        </div>
    </>
}
export default Pagination