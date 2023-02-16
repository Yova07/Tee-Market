import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const LoginPannel = ({ active, setActive }) => {

    const handleClick = () => {
        setActive(!active);
    }

    const [hide, setHide] = useState(true);

    return (
        <div>
            <div className={`login fixed top-0 h-screen z-40 w-screen sm:w-[500px] bg-white ${active ? 'right-0' : '-right-[550px]'} ${active ? 'active' : ''} transition-all delay-50 duration-500`}>
                <i class="fa-solid fa-xmark absolute left-5 top-5 text-2xl cursor-pointer" onClick={handleClick}></i>
                <Login hide={hide} setHide={setHide} active={active} setActive={setActive} />
                <Signup hide={hide} setHide={setHide} active={active} setActive={setActive} />

            </div>
            <div className={`fixed sm:block hidden top-0 h-screen bg-black ${active ? 'w-screen' : 'w-0'} opacity-30 backdrop-blur-xl ease-in duration-300 transition-all z-30`}></div>
        </div>
    )
}

export default LoginPannel;