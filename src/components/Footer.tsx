import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-blue-900 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Company</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Support</h5>
                        <ul className="space-y-2">
                            {/* <li><a href="#" className="hover:underline">Contact Us</a></li> */}
                            <li><a href="#" className="hover:underline">FAQ</a></li>
                            <li><a href="#" className="hover:underline">Returns</a></li>
                            <li><a href="#" className="hover:underline">Shipping Info</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
                        <p className="select-text text-md mb-2">(+91) 935-671-8688</p>
                        <p className="text-md mb-2">Monday to Saturday, 9am - 6pm</p>
                        {/* <form>
                            <input type="email" placeholder="Your email" className="p-2 rounded-md w-full mb-2" />
                            <button type="submit" className="bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-600">Subscribe</button>
                        </form> */}
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <p className="text-sm">&copy; 2024 X10Store. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer