import { useState } from "react";
import { useBasketContext } from "../context/BasketContext";
import DateObject from "react-date-object";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from "react-router-dom";

const BasketArticle = () => {

    const { basket, setBasket } = useBasketContext();
    const [count, setCount] = useState(1);

    const handleClickPlus = () => {
        if (count < 10) {
            setCount(count + 1)
        }
    }

    const handleClickMinus = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const deleteHandle = (id) => {
        setBasket(basket.filter((article) => id !== article._id))
    }

    const firstDate = new DateObject();
    firstDate.day += 3;
    const secondDate = new DateObject();
    secondDate.day += 5;
    const firstDateFormat = firstDate.format('dddd DD MMMM');
    const secondDateFormat = secondDate.format('dddd DD MMMM');

    if (basket.length === 0) {
        return (
            <div>
                <h1 className="text-3xl border-b mb-10 pb-5">Your cart</h1>
                <div className="relative">
                    <p className="text-2xl absolute top-20 left-1/2 -translate-x-1/2 text-center font-['Lobster']">There's nothing in your cart</p>
                    <Player
                        autoplay
                        loop
                        src="https://assets4.lottiefiles.com/packages/lf20_NeuXI2OPLG.json"
                        style={{ height: '500px', width: '500px' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1 className="text-3xl border-b mb-10 pb-5">Your cart</h1>
                {basket && basket.map((article) => (
                    <div className="flex items-center flex-wrap md:flex-nowrap justify-between mb-10">
                        <Link to={`/product/${article.name}`}>
                            <div className="flex items-center">
                                <div className="relative w-32 p-2 flex justify-center items-center">
                                    <img src={article.image[0]}></img>
                                    <div className='absolute top-0 w-full h-full bg-gray-500 opacity-5'></div>
                                </div>
                                <div className="pl-5">
                                    <h2 className="text-lg md:text-xl font-bold">{article.name}</h2>
                                    <p className="text-green-700">Available now</p>
                                    <p className="text-lg md:text-xl">€{article.price}</p>
                                </div>
                            </div>
                        </Link>
                        <div className="flex items-center gap-5 mt-5 md:mt-0">
                            <div className="flex justify-center rounded gap-5 w-full mr-2 border py-2 px-4">
                                <button className="text-lg" onClick={handleClickMinus}>-</button>
                                <p className="text-lg">{count}</p>
                                <button className="text-lg" onClick={handleClickPlus}>+</button>
                            </div>
                            <button className="border border-red-500 text-red-500 py-2 px-4 rounded" onClick={() => deleteHandle(article._id)}>Remove</button>
                        </div>
                    </div>

                ))}
                <div className="mt-20">
                    <h1 className="text-3xl border-b pb-5">Estimated delivery date</h1>
                    <p className="border-zinc-300 mt-10">Delivery by approx. between <span className="font-bold">{firstDateFormat}</span> and <span className="font-bold">{secondDateFormat}</span></p>
                </div>
                <div className="mt-20 mb-20">
                    <h1 className="text-3xl border-b pb-5">Payement</h1>
                    <div className="flex items-center mt-10">
                        <i class="fa-brands fa-cc-mastercard text-3xl md:text-5xl mr-4 md:mr-8"></i>
                        <i class="fa-brands fa-cc-visa text-3xl md:text-5xl mx-4 md:mx-8"></i>
                        <i class="fa-brands fa-paypal text-2xl md:text-4xl mx-4 md:mx-8"></i>
                        <i class="fa-brands fa-apple-pay text-3xl md:text-5xl mx-4 md:mx-8"></i>
                        <i class="fa-brands fa-google-pay text-3xl md:text-5xl mx-4 md:mx-8"></i>
                    </div>
                </div>
            </div>
        )
    }


}

export default BasketArticle;