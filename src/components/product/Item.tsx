import { useProductList } from "../../hooks/useProductList"

export const Item = () => {
    const { items } = useProductList()
    return (
        items?.map((item, index) =>
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
                <img src={item.thumbnail.url} alt="Product Image 1" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-sm text-gray-500 mt-2">A short description of the product goes here.</p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-semibold text-gray-800">{item.price_range.minimum_price.regular_price.currency} {item.price_range.minimum_price.regular_price.value}</span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    )
}

