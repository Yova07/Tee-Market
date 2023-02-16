import axios from "axios";
import { useEffect, useState } from "react";
import { useBasketContext } from "../context/BasketContext";
import { useAuthContext } from "../context/UserContext";

const BasketButton = ({ article }) => {

    const { basket, setBasket } = useBasketContext();
    const { user, setActive, dispatch } = useAuthContext();
    const [activeProduct, setActiveProduct] = useState(false);

    useEffect(() => {
        for (let data of user.favorites) {
            if (data._id === article._id) {
                setActiveProduct(true)
            }
        }
    }, []);

    const handleClick = async () => {
        if (!user) {
            return setActive(true)
        }

        user.favorites.filter(favorites => favorites._id === article._id);

        const favoriteProduct = {
            _id: article._id,
            image: article.image[0],
            name: article.name,
            price: article.price
        }
        const { data } = await axios.patch('/api/user/updateFavorites', favoriteProduct, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('session_user')}`
            }
        })
        dispatch({ type: 'UPDATE', payload: data });
        console.log(data);
    }

    return (
        <div className="flex flex-col items-center justify-between mb-10 md:pl-5 sm:pl-0">
            <div className="flex w-full">
                <button className="py-2 basis-full text-base sm:text-lg bg-red-900 hover:bg-red-800 shadow-lg hover:shadow-xl transition-all text-white font-bold" onClick={() => setBasket([...basket, article])}><i class="fa-solid fa-cart-shopping pr-5"></i>Add to Cart</button>
                <i className={`fa-solid fa-heart opacity-30 flex justify-center hover:opacity-100 hover:text-red-700 transition-all items-center text-2xl border-2 w-16 h-12 ml-3 cursor-pointer ${activeProduct === true ? 'text-red-500' : ''}`} onClick={handleClick}></i>
            </div>
        </div>
    )
}


export default BasketButton;