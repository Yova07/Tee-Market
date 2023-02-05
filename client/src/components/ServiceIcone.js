const ServiceIcone = () => {
    return (
        <div className="w-full mt-5 py-5 pl-5 border border-zinc-300">
            <div className="flex items-center my-2">
                <i className="fa-solid fa-money-bills text-lg drop-shadow-md border-white text-white border-2 w-10 h-10 flex justify-center leading-[37px] rounded-full bg-red-900"></i>
                <p className="mx-5 text-sm">30 days money-back</p>
            </div>
            <div className="flex items-center my-2">
                <i className="fa-solid fa-file-invoice text-lg drop-shadow-md border-white text-white border-2 w-10 h-10 flex justify-center leading-[37px] rounded-full bg-red-900"></i>
                <p className="mx-5 text-sm">3 years warranty</p>
            </div>
            <div className="flex items-center my-2">
                <i className="fa-solid fa-bag-shopping text-lg drop-shadow-md border-white text-white border-2 w-10 h-10 flex justify-center leading-[37px] rounded-full bg-red-900"></i>
                <p className="mx-5 text-sm">Free shipping over 69€</p>
            </div>
            <div className="flex items-center my-2">
                <i className="fa-solid fa-truck-fast text-lg drop-shadow-md border-white text-white border-2 w-10 h-10 flex justify-center leading-[37px] rounded-full bg-red-900"></i>
                <p className="mx-5 text-sm">3-5 days delivery</p>
            </div>
        </div>
    )
}

export default ServiceIcone;