import axios from "axios";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/UserContext";
import Stars from "./Stars";

const UserFavorites = () => {

    const { user } = useAuthContext();

    const handleClick = async (id) => {
        try{
        const { data } = await axios.delete(`/api/user/${id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('session_user')}`
            }
        })
        console.log(data);
    } catch(error) {
        console.log(error);
    }
    }

    return (
        <div className="full">
            <h1 className="text-center text-4xl mb-10 font-['Lobster']">My Favorites</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {user.favorites.map((product) => (
                    <div>
                    <Link key={product._id} to={`/product/${product.name}`}>
                        <div className="card rounded-sm transition-all cursor-pointer bg-white">
                            {/* <div className="img w-full h-32 md:h-48 rounded-t-md" style={{ backgroundImage: `url(${(product.image)})` }}></div> */}
                            <div className='relative'>
                                <img className='img max-h-72 mx-auto p-4 hover:p-2 transition-all' src={product.image}></img>
                                <div className='absolute top-0 w-full h-full bg-gray-500 opacity-5'></div>
                                <i className='fa-solid fa-heart absolute top-3 right-3 text-red-900 text-2xl' ></i>
                            </div>
                            <div>
                                <div className='flex flex-wrap-reverse md:flex-nowrap items-center justify-between'>
                                    <h1 className="title flex items-center w-48 h-10 text-base transition-all">{product.name}</h1>
                                    <Stars productId={product._id} />
                                </div>
                                <p className=" text-lg md:text-lg mb-5">€{product.price}</p>
                            </div>
                            
                        </div>
                    </Link>
                    <button className="border border-red-900 p-1 rounded-sm text-red-900 hover:bg-red-900 hover:text-white transition-all z-30" onClick={handleClick(product._id)}>Remove of my favorites</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserFavorites