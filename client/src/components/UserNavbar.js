import { Link, useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const UserNavbar = () => {

    const { logout } = useLogout();
    const navigate = useNavigate();

    const handleClick = () => {
        logout();
        navigate('/');
    }

    return (
        <div data-aos='fade-left' data-aos-duration='500' className="flex justify-between w-10/12 sm:w-[600px] rounded-sm shadow-lg border py-2 px-3 md:px-10">
            <div className="flex gap-5">
                <Link to='/user/profil'>
                    <button className="opacity-70 hover:opacity-100">My profil</button>
                </Link>
                <Link to='/user/favorites'>
                    <button className="opacity-70 hover:opacity-100">Favorites</button>
                </Link>
            </div>
            <button className="opacity-70 hover:opacity-100" onClick={handleClick}>Logout</button>
        </div>
    )
}

export default UserNavbar;