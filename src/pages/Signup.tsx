

export const Signup = () => {
    return (
        <>
            <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
                <form>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your email"
                        />
                        <p className="text-red-500 text-sm mt-1">Email is required</p>
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Enter your password"
                        />
                        <p className="text-red-500 text-sm mt-1">Password is required</p>
                    </div>


                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Confirm your password"
                        />
                        <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
                    </div>


                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign Up
                    </button>
                </form>


                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?
                        <a href="#" className="text-blue-600 hover:text-blue-800">Login</a>
                    </p>
                </div>
            </div>

        </>
    )
}
