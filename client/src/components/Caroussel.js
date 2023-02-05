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
        <div data-aos='fade up' className=" mx-auto pt-10 md:pt-20 mb-10 md:mb-20 bg-white">
            <h1 className="text-3xl md:text-4xl text-center"><span className="font-bold text-[#90323D]">New</span> on <span className="font-['Lobster'] text-3xl md:text-4xl" >Music</span></h1>
            <Carousel
                customRightArrow={<button className='bg-red-900 w-10 h-10 rounded-full absolute top:1/2 right-10'><i class="fa-solid fa-chevron-right  text-white"></i></button>}
                customLeftArrow={<button className='bg-red-900 w-10 h-10 rounded-full absolute top:1/2 left-10'><i class="fa-solid fa-chevron-left text-white"></i></button>}
                infinite={true}
                responsive={responsive}
                className="carousel mt-5 md:py-5 max-w-[1440px] mx-auto">
                {products.map((product) => (
                    <Link key={product._id} to={`/product/${product.name}`}>
                        <div className="card rounded-md mx-1 md:mx-2 pb-2 transition-all cursor-pointer bg-white">
                            {/* <div className="img w-full h-32 md:h-48 rounded-t-md" style={{ backgroundImage: `url(${(product.image)})` }}></div> */}
                            <div className='h-full relative'>
                                <img className='img p-4 hover:p-2 transition-all' src={product.image[0]}></img>
                                <div className='absolute top-0 w-full h-full bg-gray-500 opacity-5'></div>
                            </div>
                            <div>
                                <h1 className="title flex justify-center items-center h-10 text-base transition-all">{product.name}</h1>
                                <p className=" text-lg text-center md:text-lg h-20 font-bold">{product.price}€</p>
                            </div>

                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    )
}

export default NewProducts;