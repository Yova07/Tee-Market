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
        <div data-aos='fade up' className="flex flex-col justify-center items-center mt-10 md:mt-20 mb-10 md:mb-20">
            <h1 className="text-3xl md:text-5xl"><span className="font-bold text-red-900">New</span> on <span className="font-['Lobster'] text-3xl md:text-5xl" >Music</span></h1>
            <Carousel
                customRightArrow={<button className='bg-red-900 w-10 h-10 rounded-full absolute top:1/2 right-10'><i class="fa-solid fa-chevron-right  text-white"></i></button>}
                customLeftArrow={<button className='bg-red-900 w-10 h-10 rounded-full absolute top:1/2 left-10'><i class="fa-solid fa-chevron-left text-white"></i></button>}
                infinite={true}
                responsive={responsive}
                className="carousel mt-10 2xl:max-w-[1500px] w-11/12 md:py-5">
                {products.map((product) => (
                    <Link key={product._id} to={`/product/${product.name}`}>
                        <div className="card rounded-md mx-1 md:mx-2 pb-2 transition-all cursor-pointer bg-white shadow hover:shadow-lg">
                            {/* <div className="img w-full h-32 md:h-48 rounded-t-md" style={{ backgroundImage: `url(${(product.image)})` }}></div> */}
                            <img className='p-4 hover:p-2 transition-all' src={product.image}></img>
                            <div className='w-4/5 mx-auto'>
                                <h1 className="title flex items-center h-10 text-base transition-all">{product.name}</h1>
                                <p className=" text-lg md:text-2xl h-20 font-bold">{product.price}€</p>
                            </div>

                        </div>
                    </Link>
                ))}
            </Carousel>
        </div>
    )
}

export default NewProducts;