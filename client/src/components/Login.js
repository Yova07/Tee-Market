import { useState } from "react";

const Login = ({ active, setActive }) => {

    const handleClick = () => {
        setActive(!active);
    }

    const [hide, setHide] = useState(true);

    return (
        <div>
            <div className={`login fixed top-0 h-screen z-20 w-screen sm:w-[500px] bg-white ${active ? 'right-0' : '-right-[550px]'} ${active ? 'active' : ''} transition-all delay-50 duration-500`}>
                <i class="fa-solid fa-xmark absolute left-5 top-5 text-2xl cursor-pointer" onClick={handleClick}></i>
                <h1 className="text-3xl w-4/5 mx-auto font-bold mt-20" onClick={() => setHide(!hide)}>Welcome back !</h1>
                <button onClick={() => setHide(!hide)} className={`w-4/5 mx-auto border-2 ${hide ? 'hidden' : 'block'} mt-5 border-black text-lg opacity-30 hover:bg-black mb-5 hover:text-white transition-all duration-300 py-1`}>Login</button>
                <form className={`flex flex-col justify-center items-center ${hide ? 'h-72' : 'h-0'} overflow-hidden duration-300 w-4/5 mx-auto`}>
                    <div className="flex flex-col w-full ">
                        <label className="mb-2" for='email'>Email<span className="text-red-500">*</span></label>
                        <input className='border-2 p-1' type='email' name='email' />
                    </div>

                    <div className="flex flex-col mt-6 w-full">
                        <label className="mb-2" for='password'>Password<span className="text-red-500">*</span></label>
                        <input className='border-2 p-1' type='password' name='password' />
                    </div>
                    <div className="w-full">
                        <button className="bg-red-900 mt-5 w-full text-lg mx-auto py-2 text-white">Login</button>
                    </div>
                    <hr />
                </form>
                <h1 className="text-3xl w-4/5 mx-auto font-bold mt-5">Are you new here ?</h1>
                <button onClick={() => setHide(!hide)} className={`w-4/5 mx-auto border-2 ${hide ? 'block' : 'hidden'} mt-5 border-black text-lg opacity-30 hover:bg-black hover:text-white transition-all py-1`}>Sign up</button>
                <form className={`flex flex-col justify-center ${hide ? 'h-0' : 'h-[570px]'} overflow-hidden duration-300 transition-all items-center w-4/5 mx-auto`}>
                    <div className="flex flex-col w-full mt-5">
                        <label className="mb-2" for='firstName'>First Name</label>
                        <input className='border-2 p-1' type='text' name='firsName' />
                    </div>

                    <div className="flex flex-col mt-6 w-full">
                        <label className="mb-2" for='lastName'>Last Name</label>
                        <input className='border-2 p-1' type='text' name='lastName' />
                    </div>
                    <div className="flex flex-col w-full mt-6">
                        <label className="mb-2" for='email'>Email<span className="text-red-500">*</span></label>
                        <input className='border-2 p-1' type='email' name='email' />
                    </div>

                    <div className="flex flex-col mt-6 w-full">
                        <label className="mb-2" for='password'>Password<span className="text-red-500">*</span></label>
                        <input className='border-2 p-1' type='password' name='password' />
                    </div>
                    <div className="w-full">
                        <p className="my-4">By creating an account, you agree to our website <span className="font-bold underline">Terms of Use Agreement</span>, <span className="font-bold underline">Terms of Sales</span>, <span className="font-bold underline">Privacy Policy</span>, and confirm that you are at least 16 years old.</p>
                        <button className="bg-red-900 mt-5 w-full text-lg mx-auto py-2 text-white">Sign up</button>
                    </div>
                    <div className="w-full m-auto">
                        <p className="text-xs text-gray-400"><span className="text-red-600">*</span>required fields</p>
                    </div>
                </form>

            </div>
            <div className={`fixed sm:block hidden top-0 h-screen bg-black ${active ? 'w-screen' : 'w-0'} opacity-30 backdrop-blur-xl ease-in duration-300 transition-all z-10`}></div>
        </div>
    )
}

export default Login;