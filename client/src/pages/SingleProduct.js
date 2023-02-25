import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductComments from "../components/PorductComments";
import ProductDescription from "../components/ProductDescription";
import SingleProductSlider from "../components/SingleProductSlider";

const SingleProduct = () => {

    const { product } = useParams('');
    const [article, setArticle] = useState({});
    const [image, setImage] = useState();
    const [category, setCategory] = useState();
    console.log(article);

    const upperCase = (category) => {
        const lowerCase = category.charAt(0).toUpperCase() + category.slice(1);
        setCategory(lowerCase);
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`/api/products/product/${product}`);
            setArticle(response.data);
            setImage(response.data.image[0]);
            upperCase(response.data.category);
        }

        fetchProduct();
    }, [product])

    return (
        <div>
            <div data-aos='fade' data-aos-delay='50' className="max-w-[1440px] w-11/12 mx-auto min-h-screen">
                <div className="flex items-center gap-5 mt-5">
                    <Link to='/' className="opacity-70 hover:opacity-100 text-sm md:text-base">Home</Link>
                    <i className="fa-solid fa-chevron-right text-xs opacity-70"></i>
                    <Link to={`/category/${article.category}`} className="opacity-70 hover:opacity-100 md:text-base text-sm">{category && category.split('-').join(' ')}</Link>
                    <i className="fa-solid fa-chevron-right text-xs opacity-70"></i>
                    <p className="font-bold md:text-base text-sm">{article.name}</p>
                </div>
                <div className="flex flex-col md:flex-row">
                    <SingleProductSlider article={article} image={image} setImage={setImage} />
                    <ProductDescription article={article} />
                </div>
                <ProductComments articleId={article._id} />
            </div>
            <Footer />
        </div>
    )
}

export default SingleProduct;