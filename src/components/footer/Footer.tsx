

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Content */}
                <div className="flex justify-between items-center">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-semibold">My React Store</p>
                        <p className="text-sm mt-1">&copy; 2024 All Rights Reserved</p>
                    </div>
                    <div className="flex space-x-6">
                        {/* Social media icons */}
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Footer Links Section */}
                <div className="mt-6 border-t border-gray-700 pt-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold">Company</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                                <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                                <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Support</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gray-400">FAQ</a></li>
                                <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
                                <li><a href="#" className="hover:text-gray-400">Shipping Info</a></li>
                                <li><a href="#" className="hover:text-gray-400">Return Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Social</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
                                <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
                                <li><a href="#" className="hover:text-gray-400">Instagram</a></li>
                                <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Legal</h3>
                            <ul className="mt-2 space-y-2 text-sm">
                                <li><a href="#" className="hover:text-gray-400">Terms & Conditions</a></li>
                                <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-gray-400">Cookies Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
