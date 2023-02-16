import { useEffect, useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = ({ hide, setHide, active, setActive }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [stopRender, setStopRender] = useState(true);
    const [submit, setSubmit] = useState(false);
    const { login, error, loading } = useLogin();

    useEffect(() => {
        if(error === null && stopRender === false) {
            setEmail('');
            setPassword('');
            setActive(!active);
        }
        if(stopRender === true) {
            setStopRender(false);
        }
    }, [error, submit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email, 
            password
        }

        login(user);
        setSubmit(!submit)
    }

    return (
        <div>
            <h1 className="text-3xl w-4/5 mx-auto font-bold mt-20" onClick={() => setHide(!hide)}>Welcome back !</h1>
            <button onClick={() => setHide(!hide)} className={`w-4/5 mx-auto border-2 ${hide ? 'hidden' : 'block'} mt-5 border-black text-lg opacity-30 hover:bg-black mb-5 hover:text-white transition-all duration-300 py-1`}>Login</button>
            <form onSubmit={handleSubmit} className={`flex flex-col justify-center items-center ${hide ? 'h-72' : 'h-0'} overflow-hidden duration-300 w-4/5 mx-auto`}>
                <div className="flex flex-col w-full ">
                    <label className="mb-2" for='email'>Email<span className="text-red-500">*</span></label>
                    <input className={`border-2 p-1 ${error && email.length === 0 ? 'border-red-500' : ''}`} value={email} type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="flex flex-col mt-6 w-full">
                    <label className="mb-2" for='password'>Password<span className="text-red-500">*</span></label>
                    <input className={`border-2 p-1 ${error && password.length === 0 ? 'border-red-500' : ''}`} value={password} type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="w-full">
                    {error && <p className="text-red-500">{error.response.data.error}</p>}
                    <button className="bg-red-900 mt-5 w-full text-lg mx-auto py-2 text-white">Login</button>
                </div>
                <hr />
            </form>
        </div>
    )
}

export default Login;