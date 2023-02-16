import { useState, useEffect } from "react";
import { useBasketContext } from "../context/BasketContext";

const Summary = () => {

    const { basket } = useBasketContext();
    const [totalPrice, setTotalPrice] = useState('');
    const [hideVoucher, setHideVoucher] = useState(false)

    useEffect(() => {
        let sum = 0;
        for (let article of basket) {
            sum += article.price
        }

        setTotalPrice(sum);
    }, [basket])

    return (
        <div className="w-full lg:w-auto md:sticky top-10">
            <div className="shadow p-10 rounded bg-zinc-50">
                <h1 className="text-3xl mb-16">Summary</h1>
                <div>
                    <div className="flex justify-between md:gap-60 mb-5">
                        <p>{basket.length} article{basket.length > 1 ? 's' : ''}</p>
                        <p>€{totalPrice}</p>
                    </div>
                    <div className="flex justify-between md:gap-60 mb-5 border-b pb-5">
                        <p>Total shipping</p>
                        <p>{totalPrice > 69 ? 'Free' : basket.length === 0 ? '0' : '€5,99'}</p>
                    </div>
                    <div className="flex justify-between md:gap-60 mb-10">
                        <p className="text-2xl font-bold">Total</p>
                        <p className="text-2xl">€{totalPrice > 69 ? totalPrice : basket.length === 0 ? totalPrice : totalPrice + 5.99}</p>
                    </div>
                    <button className="bg-red-900 text-white w-full py-2 font-bold">Order Now</button>
                </div>
            </div>
            <div className={`bg-gray-50 px-10 mt-5 mb-10 lg:mb-0 shadow ${hideVoucher ? 'h-44' : 'h-16'} transition-all duration-500 overflow-hidden flex flex-col items-center`}>
                <div className="w-full">
                    <h2 className="flex my-5 justify-between items-center cursor-pointer" onClick={() => setHideVoucher(!hideVoucher)}>Add a gift voucher <i className={`fa-solid transition-all duration-500 fa-chevron-down text-lg ${hideVoucher ? 'rotate-180' : ''}`}></i></h2>
                </div>
                <input className='border-2 mb-3 w-full py-1' type='text'></input>
                <button className="bg-red-900 w-full text-white py-2">Add</button>
            </div>
        </div>
    )
}

export default Summary;