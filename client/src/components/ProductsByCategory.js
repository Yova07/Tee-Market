import { Link } from "react-router-dom";
import Stars from "./Stars";

const ProductsByCategory = ({ productsByCategory }) => {

    return (
        <div className="col-start-2 col-end-6 min-h-screen">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-5">
            {productsByCategory.map((product) => (
                <Link key={product._id} to={`/product/${product.name}`}>
                    <div data-aos='fade-up' data-aos-delay='50' className="card rounded-md  mx-auto transition-all cursor-pointer bg-white">
                        {/* <div className="img w-full h-48 rounded-t-md" style={{ backgroundImage: `url(${(product.image)})` }}></div> */}
                        <div className="max-h-72 relative">
                            <img className="img h-full mx-auto p-4 hover:p-2 transition-all" src={product.image[0]}></img>
                            <div className="absolute top-0 w-full h-full bg-gray-500 opacity-5"></div>
                        </div>
                        <div>
                            <div className="flex justify-between items-center flex-wrap-reverse md:flex-nowrap">
                                <h1 className="title flex items-center h-10 text-md transition-all">{product.name}</h1>
                                <Stars productId={product._id} />
                            </div>
                            <div className="h-20">
                                <p className={`${product.quantity > 0 ? 'text-green-700' : 'text-red-700'} text-sm`}>{product.quantity > 0 ? 'Available now' : 'Not in stock'}</p>
                                <p className="text-lg font-bold">{product.price}€</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default ProductsByCategory;