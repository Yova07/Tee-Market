import { Link } from "react-router-dom";
import { useAuthContext } from "../context/UserContext";
import { useLogout } from "../hooks/useLogout"

const UserInfos = ({ active }) => {

    const { logout } = useLogout();
    const { user } = useAuthContext();

    return (
        <div className={`absolute bg-white top-12 right-0 z-30 w-56 shadow-xl rounded-b-xl rounded-tl-xl overflow-hidden transition-all cursor-default ${active ? 'max-h-72' : 'max-h-0'}`}>
            <div className="flex flex-col items-center mt-4">
                <div className="bg-violet-700 w-16 h-16 flex justify-center items-center font-bold rounded-full text-white text-3xl">{user.firstName.charAt(0).toUpperCase() + user.lastName.charAt(0).toUpperCase()}</div>
                <p className="py-2 border-b mb-2">{user.email}</p>
            </div>
            <Link to='/user/profil' >
                <div className="flex items-center gap-2 px-5 py-2 hover:bg-gray-100">
                    <i class="fa-regular fa-user"></i>
                    <button>My profil</button>
                </div>
            </Link>
            <Link to="/user/favorites">
                <div className="flex items-center gap-2 px-5 py-2 hover:bg-gray-100">
                    <i className="fa-regular fa-heart"></i>
                    <button className="opacity-70 hover:opacity-100 block">My favorites</button>
                </div>
            </Link>
            <div className="flex items-center gap-2 px-5 py-2 hover:bg-gray-100 cursor-pointer">
                <i class="fa-solid fa-power-off"></i>
                <button className="opacity-70 hover:opacity-100 block" onClick={logout}>Logout</button>
            </div>

        </div>
    )
}

export default UserInfos