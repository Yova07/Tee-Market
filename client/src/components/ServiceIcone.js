const ServiceIcone = () => {
    return (
        <div data-aos='fade up' className="flex justify-between max-w-[1500px] min-w-[1000px] ml-10 w-11/12 overflow-hidden lg:mx-auto mt-10 rounded py-3 px-5 xl:px-20 bg-gray-100">
            <div className="flex items-center py-2">
                <i className="fa-solid fa-money-bills text-lg drop-shadow-md border-white text-white border-2 w-10 h-10 flex justify-center leading-[37px] rounded-full bg-red-900"></i>
                <p className="mx-5 text-sm">30 days money-back</p>
            </div>
            <div className="flex items-center">
                <i className="fa-solid fa-file-invoice text-lg drop-shadow-md border-white text-white border-2 w-10 h-10 flex justify-center leading-[37px] rounded-full bg-red-900"></i>
                <p className="mx-5 text-sm">3 years warranty</p>
            </div>
            <div className="flex items-center">
                <i className="fa-solid fa-bag-shopping text-lg drop-shadow-md border-white text-white border-2 w-10 h-10 flex justify-center leading-[37px] rounded-full bg-red-900"></i>
                <p className="mx-5 text-sm">Free shipping over 69€</p>
            </div>
            <div className="flex items-center">
                <i className="fa-solid fa-truck-fast text-lg drop-shadow-md border-white text-white border-2 w-10 h-10 flex justify-center leading-[37px] rounded-full bg-red-900"></i>
                <p className="mx-5 text-sm">3-5 days delivery</p>
            </div>
        </div>
    )
}

export default ServiceIcone;