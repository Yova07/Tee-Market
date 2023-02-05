import Header from "../components/Header";
import NewProducts from "../components/NewProducts";
import Trend from '../components/Trend';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from 'aos'
import 'aos/dist/aos.css';
import HomeCategory from "../components/HomeCategory";
import HomeInfos from "../components/HomeInfos";
import Banner from "../components/Banner";

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        AOS.init();
    }, [])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/api/products');

                setProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchProducts();
    }, [])

    return (
        <section className="min-h-screen">
            <Navbar />
            <Header />
            <NewProducts products={products} />
            <Banner />
            <Trend products={products} />
            <HomeCategory />
            <HomeInfos />
            <Footer />
        </section>
    )
}

export default Home;