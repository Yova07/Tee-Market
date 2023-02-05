const Header = () => {

    return (
        <div data-aos='fade up' className="header h-96 md:h-[600px] flex items-center">
            <div className="max-w-[1440px] sm:w-11/12 w-9/12 ml-5 sm:mx-auto">
                <h1 className="text-white md:text-6xl text-3xl font-['Cutive Mono']">Find the better way</h1>
                <h1 className="text-red-900 md:text-6xl text-3xl font-['Cutive Mono'] mt-3 md:mt-5 mb-6 md:mb-16">To be creative</h1>
                <h2 className="text-white text-sm md:text-base mt-5">Discover our assortment of products and find the right item for you</h2>
                <button className="text-white border border-white mt-8 md:mt-16 rounded-sm px-6 py-2 md:text-xl text-sm hover:border-red-900 hover:text-red-900 transition-all">Shop Now</button>
            </div>
        </div>
    )
}

export default Header;