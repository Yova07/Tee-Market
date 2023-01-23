const RegisterForm = () => {

    return (
        <div className="flex flex-col pt-20 items-center bg-zinc-50">
            <div className="max-w-[1500px] w-11/12 border-b mb-10">
                <h1 data-aos='fade up' className="text-5xl mb-5 font-bold">Register a new account</h1>
            </div>
            <div className="flex lg:flex-row flex-col justify-center max-w-[1500px] w-11/12 mb-36">
                <div data-aos='fade-right' data-aos-delay='100' className="xl:w-1/3 lg:w-1/2 w-11/12 mx-auto rounded shadow-2xl bg-white p-10 flex flex-col justify-between">
                    <h2 className="text-2xl">Welcome <span className="font-bold">stranger</span>, create an account and access all our features !</h2>
                    <div>
                        <div className="flex items-center mb-2">
                            <i class="fa-solid fa-check mr-5 text-red-700"></i>
                            <p className="text-base text-gray-500 text-justify">Simply and comfortably manage your account and orders</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <i class="fa-solid fa-check mr-5 text-red-700"></i>
                            <p className="text-base text-gray-500 text-justify">Create your personnal wish list and share it with your friends</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <i class="fa-solid fa-check mr-5 text-red-700"></i>
                            <p className="text-base text-gray-500 text-justify">Recieve exclusive offers and informations</p>
                        </div>
                        <div className="flex items-center mb-2">
                            <i class="fa-solid fa-check mr-5 text-red-700"></i>
                            <p className="text-base text-gray-500 text-justify">Be as cool as Mark Ranson</p>
                        </div>
                    </div>
                    <div className="border-t pt-3">
                        <p className="text-sm text-gray-400"><span className="text-red-600">*</span>required fields</p>
                        <p className="text-sm text-gray-400"><span className="text-red-600">**</span>you'll be able to complete your user's informations in your user pannel</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center mx-auto lg:ml-20 w-11/12 lg:w-1/2 lg:border-l lg:pl-20">
                    <form data-aos='fade-left' className="1/3">
                        <div className="flex flex-col">
                            <label className="mb-1" for='firstName'>First name<span className="text-red-500">**</span></label>
                            <input className="border bg-white mb-3 p-1 rounded w-full" type='text' name='firstName' />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1" for='name'>Last name<span className="text-red-500">**</span></label>
                            <input className="border bg-white mb-3 p-1 rounded" type='text' name='name' />
                        </div>
                        <div className="flex flex-col mt-10">
                            <label className="mb-1" for='email'>Email<span className="text-red-500">*</span></label>
                            <input className="border bg-white mb-3 p-1 rounded" type='email' name='email' />
                        </div>
                        <div className="flex flex-col">
                            <label className="mb-1" for='password'>Password<span className="text-red-500">*</span></label>
                            <input className="border bg-white mb-3 p-1 rounded" type='password' name='password' />
                            <p className="text-xs text-gray-400">At least 8 characters, including 1 uppercase letter, 1 lowercase letter and 1 number. Because you can never be too sure.</p>
                        </div>
                        <p className="my-4">By creating an account, you agree to our website <span className="font-bold underline">Terms of Use Agreement</span>, <span className="font-bold underline">Terms of Sales</span>, <span className="font-bold underline">Privacy Policy</span>, and confirm that you are at least 16 years old.</p>
                        <button className="bg-red-900 hover:opacity-70 mt-5 px-8 py-1 text-white rounded">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm;