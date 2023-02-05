import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const NewProducts = ({ products }) => {


    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        largeDesktop: {
            breakpoint: { max: 3000, min: 1440 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1440, min: 1144 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1144, min: 634 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 634, min: 0 },
            items: 2
        }
    };

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
                                    <div className='text-sm flex items-center text-red-900'>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
                                        <p className='ml-1 text-black'>(0)</p>
                                    </div>
                                </div>

                                <p className=" text-lg md:text-lg h-20">€{product.price}</p>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
            <div className='w-full text-center pb-10 md:pb-20'>
                <button className='px-20 py-2 text-xl rounded-sm text-orange-700 border-2 border-orange-700 hover:bg-orange-700 hover:text-white transition-all '>See more</button>
            </div>
        </div>
    )
}

export default NewProducts;