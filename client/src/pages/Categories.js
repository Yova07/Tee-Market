import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import AsideFilterCategory from "../components/AsideFilterCategory";
import Footer from "../components/Footer";
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
    const [fiveStarsActive, setFiveStarsActive] = useState(false);
    const [fourStarsActive, setFourStarsActive] = useState(false);
    const [treeStarsActive, setTreeStarsActive] = useState(false);

    const toLowerCase = (category) => {
        const split = category.charAt(0).toUpperCase();
        const upperCase = split + category.slice(1);
        setCategoryTitle(upperCase)
    }

    const handleSelectChange = (value) => {
        if (value === 'popularity') {
            const sortedData = [...productsByCategory].sort((a, b) => {
                return a.note > b.note ? -1 : 1
            })
            setProductsByCategory(sortedData);
        }
        if (value === 'priceLowToHigh') {
            const sortedData = [...productsByCategory].sort((a, b) => {
                return a.price > b.price ? 1 : -1
            })
            setProductsByCategory(sortedData);
        }
        if (value === 'priceHighToLow') {
            const sortedData = [...productsByCategory].sort((a, b) => {
                return a.price > b.price ? -1 : 1
            })
            setProductsByCategory(sortedData);
        }
        if (value === 'newFirst') {
            const sortedData = [...productsByCategory].sort((a, b) => {
                return a.createdAt > b.createdAt ? 1 : -1
            })
            setProductsByCategory(sortedData);
        }
    }

    useEffect(() => {
        setProductsByCategory(allProductsByCategory.filter((data) => data.price < maxValue && data.price > minValue));
        if (active === true) {
            setProductsByCategory(allProductsByCategory.filter((data) => data.quantity > 0));
        }
        if(fiveStarsActive === true && fourStarsActive === false && treeStarsActive === false) {
            setProductsByCategory(allProductsByCategory.filter((data) => data.note > 4.5))
        }
        if(fiveStarsActive === true && fourStarsActive === true && treeStarsActive === false) {
            setProductsByCategory(allProductsByCategory.filter((data) => data.note > 3.5))
        }
        if(fiveStarsActive === true && fourStarsActive === true && treeStarsActive === true) {
            setProductsByCategory(allProductsByCategory.filter((data) => data.note > 2.5))
        }
        if(fiveStarsActive === false && fourStarsActive === true && treeStarsActive === false) {
            setProductsByCategory(allProductsByCategory.filter((data) => data.note < 4.5 && data.note > 3.5))
        }
        if(fiveStarsActive === false &&fourStarsActive === true && treeStarsActive === true) {
            setProductsByCategory(allProductsByCategory.filter((data) => data.note < 4.5 && data.note > 2.5))
        }
        if(fiveStarsActive === false && fourStarsActive === false && treeStarsActive === true) {
            setProductsByCategory(allProductsByCategory.filter((data) => data.note < 3.5 && data.note > 2.5))
        }
        if(fiveStarsActive === true && fourStarsActive === false && treeStarsActive === true) {
            setProductsByCategory(allProductsByCategory.filter((data) => data.note < 2.5 && data.note > 4.5))
        }
    }, [minValue, maxValue, active, fiveStarsActive, fourStarsActive, treeStarsActive])

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
            <div data-aos='fade-up' data-aos-delay='50' className="max-w-[1440px] w-11/12 mx-auto">
                <div className="flex items-center gap-5 mt-5 text-sm md:text-base">
                    <Link to='/' className="opacity-70 hover:opacity-100">Home</Link>
                    <i className="fa-solid fa-chevron-right text-xs opacity-70"></i>
                    <p className="font-bold">{categoryTitle.split('-').join(' ')}</p>
                </div>
                {/* <ServiceIcone /> */}
                <h1 className="mt-10 pb-5 text-3xl md:text-5xl w-full mx-auto font-bold">{categoryTitle.split('-').join(' ')}</h1>
                <div className="flex items-end justify-between border-b pb-3">
                    <p className="text-lg" onClick={() => setHideFilter(!hideFilter)}><i class="fa-solid fa-sliders mr-1"></i>Filter</p>
                    <select className="w-40 text-lg p-1 bg-zinc-50 rounded" onChange={(e) => handleSelectChange(e.target.value)}>
                        <option value='popularity' selected>Popularity</option>
                        <option value='priceLowToHigh'>Price : low to high</option>
                        <option value='priceHighToLow'>Price : high to low</option>
                        <option value='newFirst'>New products</option>
                    </select>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full mt-10 auto-rows-auto">
                    <AsideFilterCategory
                        setMinValue={setMinValue}
                        setMaxValue={setMaxValue}
                        minValue={minValue}
                        maxValue={maxValue}
                        setActive={setActive}
                        active={active}
                        hideFilter={hideFilter}
                        setHideFilter={setHideFilter}
                        fiveStarsActive={fiveStarsActive}
                        fourStarsActive={fourStarsActive}
                        treeStarsActive={treeStarsActive}
                        setFiveStarsActive={setFiveStarsActive}
                        setFourStarsActive={setFourStarsActive}
                        setTreeStarsActive={setTreeStarsActive} />
                    <ProductsByCategory productsByCategory={productsByCategory} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Categories;