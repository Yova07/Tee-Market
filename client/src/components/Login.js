import { Link } from "react-router-dom";

const Login = ({ active, setActive }) => {

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <div className={`login fixed top-0 h-screen w-screen sm:w-[550px] bg-white ${active ? 'right-0' : '-right-[550px]'} ${active ? 'active' : ''} transition-all duration-500 cursor-pointer`}>
            <i class="fa-solid fa-xmark absolute left-10 top-5 text-2xl" onClick={handleClick}></i>
            <h1 className="text-5xl font-bold text-center mt-20">Login</h1>
            <form className="flex flex-col justify-center items-center w-3/5 mx-auto mt-10">
                <div className="flex flex-col w-full mt-6">
                    <label className="mb-2" for='email'>Email</label>
                    <input className='border-2' type='email' name='email' />
                </div>

                <div className="flex flex-col mt-6 w-full">
                    <label className="mb-2" for='password'>Password</label>
                    <input className='border-2' type='password' name='password' />
                </div>
                <div className="w-full">
                    <button className="bg-red-900 mt-5 px-8 py-1 text-white rounded">Login</button>
                </div>
            </form>
            <div className="w-3/5 mx-auto mt-10">
                <p className="text-center mb-3">Don't have an account yet ?</p>
                <Link to='/register'>
                    <p className="text-center font-bold">Sign up here</p>
                </Link>
            </div>
        </div>
    )
}

export default Login;