import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useBasketContext } from "../context/BasketContext";
import { useAuthContext } from "../context/UserContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";

const BasketButton = ({ article }) => {

    const { basket, setBasket } = useBasketContext();
    const { user, setActive, dispatch } = useAuthContext();
    const [activeProduct, setActiveProduct] = useState(false);

    useEffect(() => {
        if (user) {
            for (let favorite of user.favorites) {
                if (favorite._id === article._id) {
                    setActiveProduct(true);
                }
            }
        }
    }, [article])


    const handleClick = async () => {
        if (!user) {
            return setActive(true)
        }

        if (activeProduct === false) {
            try {
                const favoriteProduct = {
                    _id: article._id,
                    image: article.image[0],
                    name: article.name,
                    price: article.price
                }
                const { data } = await axios.patch(`${process.env.REACT_APP_API_URL}/api/user/updateFavorites`, favoriteProduct, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('session_user')}`
                    }
                })
                dispatch({ type: 'UPDATE', payload: data });
                addToFavorite();
                setActiveProduct(true);
            } catch (error) {
                alreadyFavorite(error.response.data)
            }
        }
        if(activeProduct === true) {
            const { data } = await axios.delete(`${process.env.REACT_APP_API_URL}/api/user/${article._id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('session_user')}`
                }
            })
            dispatch({ type: 'UPDATE', payload: data });    
            removeFromFavorite();
            setActiveProduct(false);
        }
    }

    const addToCart = () => toast("Added to your cart");
    const addToFavorite = () => toast("Added to your favorites");
    const removeFromFavorite = () => toast("Removed from your favorites");
    const alreadyFavorite = (error) => toast(error);

    const handleBasket = () => {

        setBasket([...basket, {
            image: article.image[0],
            name: article.name,
            price: article.price,
            quantity: article.quantity
        }])
        addToCart();
    }

    return (
        <div className="flex flex-col items-center justify-between mb-10 md:pl-5 sm:pl-0">
            <div className="flex w-full">
                <button className="py-2 basis-full text-base sm:text-lg bg-red-900 lg:hover:bg-red-800 shadow-lg hover:shadow-xl transition-all text-white font-bold" onClick={handleBasket}><i class="fa-solid fa-cart-shopping pr-5"></i>Add to Cart</button>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="dark" />
                <i className={`fa-solid fa-heart opacity-30 flex justify-center lg:hover:text-red-700 transition-all items-center text-2xl border-2 w-16 h-12 ml-3 cursor-pointer ${activeProduct ? 'text-red-700 opacity-100' : ''}`} onClick={handleClick}></i>
            </div>
        </div>
    )
}


export default BasketButton;