import { useState } from "react";
import DateObject from "react-date-object";
import ServiceIcone from './ServiceIcone';
import BasketButton from "./BasketButton";
import ProductAdvice from "./ProductAdvice";
import CreateComment from "./CreateComment";
import Stars from "./Stars";
import axios from "axios";


const ProductDescription = ({ article }) => {

    const firstDate = new DateObject();
    firstDate.day += 3;
    const secondDate = new DateObject();
    secondDate.day += 5;
    const firstDateFormat = firstDate.format('dddd DD MMMM');
    const secondDateFormat = secondDate.format('dddd DD MMMM');

    const [hideInformations, setHideInformations] = useState(false);
    const [hideFeatures, setHideFeatures] = useState(false);
    const [active, setActive] = useState(false);

    const updateNote = async (note) => {
        try {
            const response = await axios.patch(`/api/products/note/${article._id}`, { note })
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div className="md:mt-10 md:w-[900px] mx-auto">
            <div className="mb-10">
                <div className='md:pl-5 sm:pl-0'>
                    <h1 className="text-2xl mt-5 md:mt-0 font-bold sm:text-4xl">{article.name}</h1>
                    <div >
                        <Stars productId={article._id} />
                    </div>
                    <p className="text-2xl sm:text-3xl mt-3"><span className="text-2xl md:text-3xl">€</span>{article.price}</p>
                    <p className="text-gray-500 text-sm">Incl. VAT</p>
                    <div className="flex items-center mt-3">
                        <div className="h-2 w-2 rounded-full bg-green-700 mr-2"></div>
                        <p className="text-green-700">In Stock</p>
                    </div>
                </div>
            </div>
            <BasketButton article={article} />
            <ServiceIcone />
            <p className="border border-zinc-300 p-5">Delivery by approx. between <span className="font-bold">{firstDateFormat}</span> and <span className="font-bold">{secondDateFormat}</span></p>
            <div className={`mt-8 md:mt-16 border-b`}>
                <h3 className="flex justify-between items-center text-xl md:text-2xl cursor-pointer py-3 px-5 lg:hover:bg-gray-50" onClick={() => setHideInformations(!hideInformations)}>Informations on the product<i className={`fa-solid transition-all duration-500 fa-chevron-down text-lg ${hideInformations ? 'rotate-180' : ''}`}></i></h3>
                <ul className={`list-[circle] pl-10 transition-all duration-500 overflow-hidden ${hideInformations ? 'pb-5 pt-3 max-h-[550px]' : 'max-h-0'}`}>
                    {article.informations && article.informations.map((information) => (
                        <li className="py-1">{information}</li>
                    ))}
                </ul>
            </div>
            <div className="pt-0">
                <h1 className="flex items-center justify-between text-xl md:text-2xl py-3 px-5 cursor-pointer lg:hover:bg-gray-50" onClick={() => setHideFeatures(!hideFeatures)}>Features <i className={`fa-solid transition-all duration-500 fa-chevron-down text-lg ${hideFeatures ? 'rotate-180' : ''}`}></i></h1>
                <ul className={`pt-8 pl-5 transition-all duration-500 overflow-hidden ${hideFeatures ? 'max-h-[700px] pb-10 pt-3' : 'max-h-0'}`}>
                    {article.characteristics && article.characteristics.map((characteristics) => (
                        <li className="md:grid md:grid-cols-2 flex justify-between text-sm border-b mb-2 pb-2"><p>{characteristics.split(': ').slice(0, 1)}</p><p className="font-bold">{characteristics.split(': ').slice(1)}</p></li>
                    ))}
                </ul>
            </div>
            <ProductAdvice setActive={setActive} active={active} productId={article._id} updateNote={updateNote} />
            <CreateComment active={active} setActive={setActive} articleId={article._id} />
        </div>
    )
}

export default ProductDescription;