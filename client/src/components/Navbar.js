import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import NavbarCategories from "./NavbarCategories";
import LoginPannel from "./LoginPannel";
import { useState } from "react";
import { useBasketContext } from "../context/BasketContext";
import UserInfos from "./UserInfos";
import { useAuthContext } from "../context/UserContext";

const Navbar = () => {

    
    const { user, active, setActive } = useAuthContext();
    const { basket } = useBasketContext();

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <header className="w-full bg-black z-20 md:pt-5 pt-4 pb-1 md:pb-0 h-28 md:h-auto">
            <div className="flex justify-between w-11/12 mx-auto md:w-full items-center md:px-10 mb-5">
                <Link to="/">
                    <h1 className="text-white text-3xl lg:text-5xl font-['Lobster'] hover:text-red-900 transition-all">Music</h1>
                </Link>
                <div className="flex mx-10">
                    <Link to="/about">
                        <p className="text-white text-sm md:text-base mr-5 sm:mr-10 opacity-70 hover:opacity-100 hover:text-red-900 transition-all">About</p>
                    </Link>
                    <Link>
                        <p className="text-white text-sm md:text-base opacity-70 hover:opacity-100 hover:text-red-900 transition-all">Help</p>
                    </Link>
                </div>
                <Searchbar />
                <div className="flex justify-center items-center ml-6">
                    <div className="lg:flex items-center w-52 ml-6 hidden">
                        <i className="fa-solid fa-phone text-white mr-2"></i>
                        <p className="text-white mr-6">(+32) 484 34 78 23</p>
                    </div>
                    <Link onClick={handleClick}>
                        <div className="relative">
                            <i className={`fa-regular fa-user text-white text-xl md:text-2xl md:ml-10 lg:ml-0 z-30 py-[7px] md:py-2 px-[9px] md:px-[13px]  hover:text-red-900 transition-all ${user && active ? 'bg-white text-black rounded-t-xl' : ''}`}></i>
                            {user && (
                                <UserInfos active={active}/>
                            )}
                        </div>
                    </Link>
                    <Link to='/basket'>
                        <i className="fa-solid fa-cart-shopping text-white text-xl md:text-2xl ml-3 md:ml-6 lg:hover:text-red-900 transition-all"></i>
                        <div className={`text-white absolute top-10 ${basket.length === 0 ? 'hidden' : 'block'} right-8 bg-red-900 rounded-full text-xs py-1 px-2`}>{basket.length}</div>
                    </Link>
                </div>
            </div >
            <NavbarCategories />
            {!user && (
                <LoginPannel active={active} setActive={setActive} />
            )}
        </header>
    )
}

export default Navbar;

