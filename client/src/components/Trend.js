import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import Stars from './Stars';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Trend = () => {

    const [trendsProducts, setTrendsProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products/popular');

                setTrendsProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts();
    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        largeDesktop: {
            breakpoint: { max: 3000, min: 1280 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 2
        }
    };

    return (
        <div  className='bg-zinc-50'>
            <div data-aos='fade-up' data-aos-delay='50' data-aos-once='true' className="py-10 md:py-20">
                <h1 className="text-3xl md:text-4xl max-w-[1440px] w-11/12 mx-auto text-center sm:text-left mb-10"><span className="font-bold text-red-900">Popular</span> on <span className="font-['Lobster'] text-3xl md:text-4xl" >Music</span></h1>
                <Carousel
                    customRightArrow={<button className='bg-zinc-700 hover:bg-red-900 lg:block hidden w-10 h-10 absolute top-1/2 right-0'><i class="fa-solid fa-chevron-right  text-white"></i></button>}
                    customLeftArrow={<button className='bg-zinc-700 hover:bg-red-900 lg:block hidden w-10 h-10 absolute top-1/2 left-0'><i class="fa-solid fa-chevron-left text-white"></i></button>}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    slidesToSlide={1}
                    responsive={responsive}
                    className="carousel mt-5 max-w-[calc(1440px+1rem)] mx-auto w-[calc(91.666667%+1rem)]">
                    {trendsProducts.map((product) => (
                        <Link key={product._id} to={`/product/${product.name}`}>
                            <div className="card rounded-sm mx-2 pb-2 transition-all cursor-pointer">
                                {/* <div className="img w-full h-32 md:h-48 rounded-t-md" style={{ backgroundImage: `url(${(product.image)})` }}></div> */}
                                <div className='bg-white'>
                                    <img className='max-h-72 p-4 hover:p-2 transition-all' src={product.image[0]}></img>
                                    <div className='absolute right-5 top-0 bg-black text-white text-xl w-16 text-center'>Top</div>
                                </div>
                                <div>
                                    <div className='flex justify-between items-center flex-wrap-reverse md:flex-nowrap'>
                                        <h1 className="title flex items-center h-10 text-sm transition-all">{product.name}</h1>
                                        <Stars productId={product._id} />
                                    </div>
                                    <p className=" text-lg md:text-lg">{product.price}€</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Trend;