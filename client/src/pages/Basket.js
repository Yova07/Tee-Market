import BasketArticle from "../components/BasketArticles";
import Navbar from "../components/Navbar";
import Summary from "../components/Summary";
import Footer from "../components/Footer";

const Basket = () => {


    return (
        <div>
            <Navbar />
            <div data-aos='fade up' className="max-w-[1440px] min-h-[calc(100vh-180px)] w-11/12 mx-auto flex flex-wrap-reverse lg:flex-nowrap justify-between pt-10">
                <div className="lg:w-1/2 w-full">
                    <BasketArticle />
                </div>
                <div>
                    <Summary />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Basket;