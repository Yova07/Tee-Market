import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AsideFilterCategory from "../components/AsideFilterCategory";
import Navbar from "../components/Navbar";
import ProductsByCategory from "../components/ProductsByCategory";
import ServiceIcone from "../components/ServiceIcone";

const Categories = () => {

    const { category } = useParams();
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState('');

    const toLowerCase = (category) => {
        let split = category.split('-').join(' ');
        let toUpperCase = split.charAt(0).toUpperCase() + split.slice(1);
        setCategoryTitle(toUpperCase);
    }

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`/api/products/category/${category}`);
                setProductsByCategory(response.data);
                toLowerCase(category);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategory();
    }, [category]);

    return (
        <div className="bg-zinc-50">
            <Navbar />
            <ServiceIcone />
            <div data-aos='fade up'  className="max-w-[1500px] w-11/12 mx-auto">
            <h1 className="mt-10 pb-5 text-5xl w-full mx-auto font-bold">{categoryTitle}</h1>
            <div className="flex items-end full justify-between border-b pb-3">
                <p className="text-lg"><i class="fa-solid fa-sliders mr-1"></i>Filter</p>
                <select className="w-40 text-lg p-1 bg-zinc-50 rounded">
                    <option>Popularity</option>
                    <option>Price : low to high</option>
                    <option>Price : high to low</option>
                    <option>New products first</option>
                </select>
            </div>

            <div className="flex w-full mt-10 ">
                <AsideFilterCategory />
                <ProductsByCategory productsByCategory={productsByCategory} />
            </div>
            </div>
        </div>
    )
}

export default Categories;