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
        <section className="min-h-screen bg-zinc-50">
            <Navbar />
            <Header />
            <NewProducts products={products} />
            <Trend products={products} />
            <HomeCategory />
            <HomeInfos />
            <Footer />
        </section>
    )
}

export default Home;