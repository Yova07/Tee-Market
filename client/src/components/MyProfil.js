
const MyProfil = ({ user }) => {

    return (
        <div className="bg-gray-50 basis-1/3 p-10 shadow flex justify-between items-start">
            <div>
                <h1 className="mb-10 text-3xl ">My Info</h1>
                <p>{user.lastName} {user.firstName}</p>
                <p>{user.email}</p>
                <p className="underline font-bold mt-5">Change my password</p>
            </div>
            <i className="fa-solid fa-pen p-3 transition-all cursor-pointer opacity-70 rounded-full hover:opacity-100 hover:bg-gray-200"></i>
        </div>
    )
}

export default MyProfil;