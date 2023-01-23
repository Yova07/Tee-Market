const Header = () => {

    return (
        <div data-aos='fade up' className="header 2xl:w-[1500px] w-11/12 mx-auto mt-4 md:mt-12 rounded-lg shadow-xl h-96 md:h-[500px] flex items-center md:pl-20 px-10">
            <div>
                <h1 className="text-white md:text-6xl text-3xl font-['Cutive Mono']">Find the better way</h1>
                <h1 className="text-red-900 md:text-6xl text-3xl font-['Cutive Mono'] mt-3 md:mt-5 mb-6 md:mb-16">To be creative</h1>
                <h2 className="text-white text-sm md:text-base mt-5">Discover our assortment of products and find the right item for you</h2>
                <button className="text-white border border-white mt-8 md:mt-16 px-6 py-2 md:text-xl text-sm rounded-md hover:border-red-900 hover:text-red-900 transition-all">Shop Now</button>
            </div>
        </div>
    )
}

export default Header;