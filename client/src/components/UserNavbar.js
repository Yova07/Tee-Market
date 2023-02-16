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
        <div className="flex justify-between w-[600px] rounded-sm shadow bg-gray-100 py-2 px-10">
            <div className="flex gap-5">
                <Link to='/user/profil'>
                    <button className="opacity-70 hover:opacity-100">My profil</button>
                </Link>
                <Link to='/user/favorites'>
                    <button className="opacity-70 hover:opacity-100">My favorites</button>
                </Link>
            </div>
            <button className="opacity-70 hover:opacity-100" onClick={handleClick}>Logout</button>
        </div>
    )
}

export default UserNavbar;