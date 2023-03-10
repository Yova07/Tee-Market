import BasketArticle from "../components/BasketArticles";
import Summary from "../components/Summary";
import Footer from "../components/Footer";

const Basket = () => {


    return (
        <div>
            <div data-aos='fade' data-aos-delay='50' className="max-w-[1440px] min-h-[calc(100vh-180px)] w-11/12 mx-auto flex flex-wrap-reverse lg:flex-nowrap justify-between pt-10">
                <div className="lg:w-1/2 w-full">
                    <BasketArticle />
                </div>
                <div className="lg:w-auto w-full">
                    <Summary />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Basket;