
const AsideFilterCategory = ({ setMaxValue, setMinValue, minValue, maxValue, setActive, active, hideFilter, setHideFilter, fiveStarsActive, fourStarsActive, treeStarsActive, setFiveStarsActive, setFourStarsActive, setTreeStarsActive }) => {


    return (
        <div>
            <div className={`md:h-screen bg-white md:bg-none top-1/2 -translate-y-1/2 w-10/12 px-10 md:px-0 mx-auto py-10 md:py-0 md:col-start-1 md:col-end-2 fixed md:relative ${hideFilter ? 'right-1/2 md:left-0 translate-x-1/2' : '-right-full md:right-auto'} z-20 transition-all duration-500`}>
                <div className={`w-full sticky top-10 mx-auto`}>
                    <i class="fa-solid fa-xmark absolute -left-10 -top-10 text-2xl cursor-pointer block md:hidden" onClick={() => setHideFilter(!hideFilter)}></i>
                    <h3 className="mb-10 font-bold">Price</h3>
                    <div className="bg-gray-200 h-2 w-full relative rounded-full">
                        <div className="h-2 right-0 absolute top-0 left-0 rounded-full" style={{ background: `linear-gradient(90deg, rgba(255, 0, 0, 0) ${minValue / 50}%, rgba(255, 0, 0, 1) 0%, rgba(255, 0, 0, 1) ${(maxValue / 50)}%, rgba(255, 0, 0, 0) ${(maxValue / 50)}%)` }}>
                            <input className="slider absolute -top-1 appearance-none right-0 left-0 " min='0' max="5000" value={minValue} type="range" onChange={(e) => setMinValue(e.target.value)}></input>
                            <input input className="slider absolute -top-1 appearance-none left-0 right-0 " min="0" max='5000' value={maxValue} type="range" onChange={(e) => setMaxValue(e.target.value)}></input>
                        </div>
                    </div>


                    <div className="flex mt-5 items-center justify-between">
                        <div className='flex items-center'>
                            <input name="minValue" className="w-20 rounded text-center py-1 border-2 border-gray-300" type="number" value={minValue} onChange={(e) => setMinValue(e.target.value)} />
                            <label className="flex pl-1" for="minValue">€</label>
                        </div>
                        <div className="flex items-center">
                            <input className="w-20 rounded py-1 text-center border-2 border-gray-300" type="number" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} />
                            <label className="flex pl-1" for="maxValue">€</label>
                        </div>
                    </div>
                    <div>
                        <p className="mt-16 mb-3 font-bold">Availablity</p>
                        <div>
                            <input type="checkbox" name="available" onChange={() => setActive(!active)}></input>
                            <label className="ml-5" for="available">Available now</label>
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <p className="mt-16 mb-3 font-bold">Evaluations</p>
                        <div>
                            <input type="checkbox" name="fiveStars" onChange={() => setFiveStarsActive(!fiveStarsActive)}></input>
                            <label className="ml-5" for="fiveStars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </label>
                        </div>

                        <div>
                            <input type="checkbox" name="fourStars" onChange={() => setFourStarsActive(!fourStarsActive)}></input>
                            <label className="ml-5" for="fourStars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </label>
                        </div>

                        <div>
                            <input type="checkbox" name="treeStars" onChange={() => setTreeStarsActive(!treeStarsActive)}></input>
                            <label className="ml-5" for="treeStars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`fixed top-0  left-0 opacity-20 h-screen bg-black ${hideFilter ? 'w-full' : 'w-0'} z-10 transition-all duration-500`}></div>
        </div>

    )
}

export default AsideFilterCategory;