
const Footer = () => {

    return (
        <footer className="w-full bg-black text-white ">
            <div className="flex flex-col justify-between items-center py-10 w-11/12 mx-auto">
                <div className="flex items-center mb-10">
                    <i className="fa-brands fa-cc-mastercard text-3xl md:text-5xl mx-4 md:mx-8"></i>
                    <i className="fa-brands fa-cc-visa text-3xl md:text-5xl mx-4 md:mx-8"></i>
                    <i className="fa-brands fa-paypal text-2xl md:text-4xl mx-4 md:mx-8"></i>
                    <i className="fa-brands fa-apple-pay text-3xl md:text-5xl mx-4 md:mx-8"></i>
                    <i className="fa-brands fa-google-pay text-3xl md:text-5xl mx-4 md:mx-8"></i>
                </div>
                <p className="text-white opacity-70 text-xs md:text-md mb-5">Copyright &#169; Music.Lth., All right reserved, 2023</p>
                <div className="flex items-center">
                    <a href="https://github.com/Yova07" target='_blank'><i className="fa-brands fa-github text-white text-3xl md:text-4xl mr-5 opacity-70 hover:opacity-100 transition-all"></i></a>
                    <a href="https://www.linkedin.com/in/igor-jovanovic-8086031b2/" target='_blank'><i className="fa-brands fa-linkedin-in text-2xl md:text-3xl opacity-70 hover:opacity-100 transition-all"></i></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;