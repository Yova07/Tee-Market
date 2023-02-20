import { useEffect, useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = ({ hide, setHide, active, setActive }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [stopRender, setStopRender] = useState(true);
    const [submit, setSubmit] = useState(false);
    const { signup, error, loading } = useSignup();

    useEffect(() => {
        if (error === null && stopRender === false) {
            setEmail('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setActive(!active);
        }
        if(stopRender === true) {
            setStopRender(false);
        }
    }, [error, submit])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            firstName,
            lastName,
            email,
            password
        }

        signup(newUser);
        setSubmit(!submit)
        
    }

    return (
        <div className="pb-32">
            <h1 className="text-3xl w-4/5 mx-auto font-bold mt-5">Are you new here ?</h1>
            <button onClick={() => setHide(!hide)} className={`w-4/5 mx-auto border-2 ${hide ? 'block' : 'hidden'} mt-5 border-black text-lg opacity-30 hover:bg-black hover:text-white transition-all py-1`}>Sign up</button>
            <form onSubmit={handleSubmit} className={`flex flex-col justify-center ${hide ? 'h-0' : 'h-[570px]'} overflow-hidden duration-300 transition-all items-center w-4/5 mx-auto`}>
                <div className="flex flex-col w-full mt-5">
                    <label className="mb-2" for='firstName'>First Name</label>
                    <input className={`border-2 p-1 ${error && firstName.length === 0 ? 'border-red-500' : ''}`} value={firstName} type='text' name='firsName' onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="flex flex-col mt-6 w-full">
                    <label className="mb-2" for='lastName'>Last Name</label>
                    <input className={`border-2 p-1 ${error && lastName.length === 0 ? 'border-red-500' : ''}`} type='text' value={lastName} name='lastName' onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="flex flex-col w-full mt-6">
                    <label className="mb-2" for='email'>Email<span className="text-red-500">*</span></label>
                    <input className={`border-2 p-1 ${error && email.length === 0 ? 'border-red-500' : ''}`} type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="flex flex-col mt-6 w-full">
                    <label className="mb-2" for='password'>Password<span className="text-red-500">*</span></label>
                    <input className={`border-2 p-1 ${error && password.length === 0 ? 'border-red-500' : ''}`} type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="w-full relative">
                    <p className="my-4">By creating an account, you agree to our website <span className="font-bold underline">Terms of Use Agreement</span>, <span className="font-bold underline">Terms of Sales</span>, <span className="font-bold underline">Privacy Policy</span>, and confirm that you are at least 16 years old.</p>
                    {error && <p className="text-red-500 absolute top-24">{error.response.data.error}</p>}
                    <button className={`bg-red-900 mt-5 w-full text-lg mx-auto py-2 text-white ${loading === true ? 'opacity-60 cursor-none' : ''}`}>Sign up</button>
                </div>
                <div className="w-full m-auto">
                    <p className="text-xs text-gray-400"><span className="text-red-600">*</span>required fields</p>
                </div>
            </form>
        </div>
    )
}

export default Signup;