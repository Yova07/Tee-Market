import { Link } from "react-router-dom";

const ProductsByCategory = ({ productsByCategory }) => {

    return (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-5">
            {productsByCategory.map((product) => (
                <Link key={product._id} to={`/product/${product.name.split(' ').join('-')}`}>
                    <div data-aos='fade-up' data-aos-anchor-placement="bottom-bottom" className="card rounded-md  mx-auto transition-all cursor-pointer bg-white shadow hover:shadow-lg">
                        {/* <div className="img w-full h-48 rounded-t-md" style={{ backgroundImage: `url(${(product.image)})` }}></div> */}
                        <img className="p-4 hover:p-2 transition-all" src={product.image}></img>
                        <div className="w-4/5 mx-auto ">
                            <h1 className="title h-10 text-md transition-all">{product.name}</h1>
                            <div className="h-20">
                                <p className="text-green-700 text-sm">Available now</p>
                                <p className="text-xl font-bold mb-10">{product.price}€</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductsByCategory;