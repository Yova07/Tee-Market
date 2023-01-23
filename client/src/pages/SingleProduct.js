import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductDescription from "../components/ProductDescription";
import SingleProductSlider from "../components/SingleProductSlider";

const SingleProduct = () => {

    const { product } = useParams();
    const [article, setArticle] = useState({});
    console.log(article);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`/api/products/product/${product}`);
            setArticle(response.data);
        }

        fetchProduct();
    }, [])

    console.log(product);

    return (
        <div>
            <Navbar />
            <div className="py-20 max-w-[1500px] mx-auto">
                <h1 className="text-4xl border-b pb-5 mb-5">{article.name}</h1>
                <div className="flex">
                    <SingleProductSlider article={article} />
                    <ProductDescription article={article} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SingleProduct;