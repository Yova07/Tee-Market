import { useContext, useState } from "react";
import { basketContext } from "../context/BasketContext";

const BasketButton = ({ article }) => {

    const { basket, setBasket } = useContext(basketContext);
    const [count, setCount] = useState(1);

    const handleClickPlus = () => {
        if(count < 10) {
            setCount(count + 1)
        }
    }

    const handleClickMinus = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="flex flex-col items-center justify-between mb-10 md:pl-5 sm:pl-0">
            {/* <div className="flex justify-between items-center w-full mb-4">
                <p className="basis-1/4">Quantity</p>
                <div className="flex justify-between w-full border-2 py-1 px-4">
                    <button className="text-xl" onClick={handleClickMinus}>-</button>
                    <p className="text-xl">{count}</p>
                    <button className="text-xl" onClick={handleClickPlus}>+</button>
                </div>
            </div> */}
            <div className="flex w-full">
                <button className="py-2 basis-full text-base sm:text-lg bg-red-900 hover:bg-red-800 shadow-lg hover:shadow-xl transition-all text-white font-bold" onClick={() => setBasket([...basket, article])}><i class="fa-solid fa-cart-shopping pr-5"></i>Add to Cart</button>
                <i className="fa-regular fa-heart flex justify-center hover:text-red-700 transition-all items-center text-2xl border-2 w-16 h-12 ml-3 cursor-pointer"></i>
            </div>
        </div>
    )
}

export default BasketButton;