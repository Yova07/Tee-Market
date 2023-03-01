import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const LoginPannel = ({ active, setActive }) => {

    const handleClick = () => {
        setActive(!active);
    }

    const [hide, setHide] = useState(true);

    return (
        <div className={`login fixed top-0 min-h-screen z-40 w-screen sm:w-[500px] bg-white ${active ? 'right-0' : '-right-[550px]'} ${active ? 'active' : ''} transition-all delay-50 duration-500 shadow-2xl`}>   
            <div className="pannel h-screen overflow-auto">
            <div className='relative pb-20'>
            <i className="fa-solid fa-xmark absolute z-40 left-5 -top-16 text-2xl cursor-pointer" onClick={handleClick}></i>
                <Login hide={hide} setHide={setHide} active={active} setActive={setActive} />
                <Signup hide={hide} setHide={setHide} active={active} setActive={setActive} />
            </div>
            </div>
        </div>
    )
}

export default LoginPannel;