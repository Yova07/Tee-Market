import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const Trend = ({ products }) => {

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
        <div className='bg-zinc-50'>
            <div data-aos='fade up' className="pt-10 md:pt-20">
                <h1 className="text-3xl md:text-4xl max-w-[1440px] w-11/12 mx-auto text-center sm:text-left mb-10"><span className="font-bold text-red-900">Popular</span> on <span className="font-['Lobster'] text-3xl md:text-4xl" >Music</span></h1>
                <Carousel
                    customRightArrow={<button className='bg-zinc-700 hover:bg-red-900 w-10 h-10 absolute top-1/2 right-0'><i class="fa-solid fa-chevron-right  text-white"></i></button>}
                    customLeftArrow={<button className='bg-zinc-700 hover:bg-red-900 w-10 h-10 absolute top-1/2 left-0'><i class="fa-solid fa-chevron-left text-white"></i></button>}
                    infinite={true}
                    slidesToSlide={4}
                    responsive={responsive}
                    className="carousel mt-5 max-w-[calc(1440px+1rem)] mx-auto w-[calc(91.666667%+1rem)]">
                    {products.map((product) => (
                        <Link key={product._id} to={`/product/${product.name}`}>
                            <div className="card rounded-sm mx-2 pb-2 transition-all cursor-pointer">
                                {/* <div className="img w-full h-32 md:h-48 rounded-t-md" style={{ backgroundImage: `url(${(product.image)})` }}></div> */}
                                <div className='bg-white'>
                                    <img className='max-h-72 p-4 hover:p-2 transition-all' src={product.image[0]}></img>
                                    <div className='absolute right-5 top-0 bg-black text-white text-xl w-16 text-center'>Top</div>
                                </div>
                                <div>
                                    <div className='flex justify-between items-center flex-wrap-reverse md:flex-nowrap'>
                                        <h1 className="title flex items-center h-10 text-base transition-all">{product.name}</h1>
                                        <div className='text-sm flex items-center text-red-900'>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <i class="fa-regular fa-star"></i>
                                            <p className='ml-1 text-black'>(0)</p>
                                        </div>
                                    </div>
                                    <p className=" text-lg md:text-lg h-20">{product.price}€</p>
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