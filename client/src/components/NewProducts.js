import { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import Stars from './Stars';
import axios from 'axios';

const NewProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');

                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts();
    }, [])

    return (
        <div data-aos='fade up' className=" mx-auto pt-10 md:pt-20 bg-white max-w-[1440px] w-11/12">
            <h1 className="text-3xl md:text-4xl mb-10 text-center sm:text-left"><span className="font-bold text-red-900">New</span> on <span className="font-['Lobster'] text-3xl md:text-4xl" >Music</span></h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {products.map((product) => (
                    <Link key={product._id} to={`/product/${product.name}`}>
                        <div className="card rounded-sm transition-all cursor-pointer bg-white">
                            {/* <div className="img w-full h-32 md:h-48 rounded-t-md" style={{ backgroundImage: `url(${(product.image)})` }}></div> */}
                            <div className='relative'>
                                <img className='img max-h-72 mx-auto p-4 hover:p-2 transition-all' src={product.image[0]}></img>
                                <div className='absolute top-0 w-full h-full bg-gray-500 opacity-5'></div>
                                <div className='absolute right-0 top-0 bg-black text-white text-xl w-16 text-center'>New</div>
                            </div>
                            <div>
                                <div className='flex flex-wrap-reverse md:flex-nowrap items-center justify-between'>
                                    <h1 className="title flex items-center w-48 h-10 text-base transition-all">{product.name}</h1>
                                    <Stars productId={product._id} />
                                </div>

                                <p className=" text-lg md:text-lg h-20">€{product.price}</p>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
            <div className='w-full text-center pb-10 md:pb-10'>
                <button className='px-20 py-2 text-xl md:hidden block mx-auto rounded-sm text-orange-700 border-2 border-orange-700 hover:bg-orange-700 hover:text-white transition-all '>See more</button>
            </div>
        </div>
    )
}

export default NewProducts;