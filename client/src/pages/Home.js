import Header from "../components/Header";
import NewProducts from "../components/NewProducts";
import Trend from '../components/Trend';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from 'react';  
import AOS from 'aos'
import 'aos/dist/aos.css';
import HomeCategory from "../components/HomeCategory";
import HomeInfos from "../components/HomeInfos";
import Banner from "../components/Banner";

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <section className="min-h-screen">
            <Navbar />
            <Header />
            <NewProducts />
            <Banner />
            <Trend />
            <HomeCategory />
            <HomeInfos />
            <Footer />
        </section>
    )
}

export default Home;