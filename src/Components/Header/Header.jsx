import { useState } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { RiMenuAddFill } from "react-icons/ri";

const Header = () => {
    const Links = [
        { name: 'Home', link: '/' },
        { name: 'Add Product', link: '/add-product' },
        { name: 'Add To Cart', link: '/add-to-cart' },
        { name: 'SignIn', link: '/signIn' },
    ];

    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className="shadow-md w-full top-0 left-0">
                <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                    <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                        <span className="text-5xl">
                            <IoLogoJavascript />
                        </span>
                        React Nav
                    </div>
                    {/* React icon nav */}
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                    >
                        {open ? <IoClose /> : <RiMenuAddFill />}
                    </div>
                    <ul
                        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}
                    >
                        {Links.map((link, index) => (
                            <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                            </li>
                        ))}

                    </ul>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;