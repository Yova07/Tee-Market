import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AsideFilterCategory from "../components/AsideFilterCategory";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductsByCategory from "../components/ProductsByCategory";

const Categories = () => {

    const { category } = useParams();
    const [productsByCategory, setProductsByCategory] = useState([]);
    const [allProductsByCategory, setAllProductsByCategory] = useState([]);
    const [categoryTitle, setCategoryTitle] = useState('');
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(5000)
    const [active, setActive] = useState(false)
    const [hideFilter, setHideFilter] = useState(false)

    const toLowerCase = (category) => {
        let split = category.split('-').join(' ');
        let toUpperCase = split.charAt(0).toUpperCase() + split.slice(1);
        setCategoryTitle(toUpperCase);
    }

    useEffect(() => {
        setProductsByCategory(allProductsByCategory.filter((data) => data.price < maxValue && data.price > minValue ));
        if(active === true) {
            setProductsByCategory(allProductsByCategory.filter((data) => data.quantity > 0));
        }
    },[minValue, maxValue, active])

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await axios.get(`/api/products/category/${category}`);
                setAllProductsByCategory(response.data);
                setProductsByCategory(response.data);
                toLowerCase(category);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategory();
    }, [category]);

    return (
        <div>
            <Navbar />
            <div data-aos='fade up' className="max-w-[1440px] w-11/12 mx-auto">
                <div className="flex items-center gap-5 mt-5">
                    <Link to='/' className="opacity-70 hover:opacity-100">Home</Link>
                    <i className="fa-solid fa-chevron-right text-xs opacity-70"></i>
                    <p className="font-bold">{categoryTitle}</p>
                </div>
                {/* <ServiceIcone /> */}
                <h1 className="mt-10 pb-5 text-5xl w-full mx-auto font-bold">{categoryTitle}</h1>
                <div className="flex items-end full justify-between border-b pb-3">
                    <p className="text-lg" onClick={() => setHideFilter(!hideFilter)}><i class="fa-solid fa-sliders mr-1"></i>Filter</p>
                    <select className="w-40 text-lg p-1 bg-zinc-50 rounded">
                        <option>Popularity</option>
                        <option>Price : low to high</option>
                        <option>Price : high to low</option>
                        <option>New products first</option>
                    </select>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mt-10">
                    <AsideFilterCategory setMinValue={setMinValue} setMaxValue={setMaxValue} minValue={minValue} maxValue={maxValue} setActive={setActive} active={active} hideFilter={hideFilter} setHideFilter={setHideFilter} />
                    <ProductsByCategory productsByCategory={productsByCategory} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Categories;