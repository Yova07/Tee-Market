import { useEffect, useState } from "react";

const AsideFilterCategory = () => {

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(1000)
    const [scroll, setScroll] = useState();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const position = document.documentElement.scrollTop;
            setScroll(position)
        });
    })

    return (
        <div className="w-80 h-screen">
            <div className={`w-96 ${scroll > 278 ? "sticky top-40": "relative"}`}>
                <h3 className="mb-10 font-bold">Price</h3>
                <div className="bg-white h-2 w-64 relative rounded-full">
                    <div className="h-2 bg-red-500 w-64 absolute top-0 left-0 rounded-full">
                        <input className="slider absolute -top-1 appearance-none left-0 w-64" min='0' max="1000" value={minValue} type="range" onChange={(e) => setMinValue(e.target.value)}></input>
                        <input input className="slider absolute -top-1 appearance-none left-0 w-64" min="0" max='1000' value={maxValue} type="range" onChange={(e) => setMaxValue(e.target.value)}></input>
                    </div>
                </div>


                <div className="flex mt-5 items-center">
                    <input name="minValue" className="w-20 rounded text-center py-1 border-2 border-gray-300" type="number" min="0" value={minValue} onChange={(e) => setMinValue(e.target.value)} />
                    <label className="flex pl-1" for="minValue">€</label>
                    <input className="w-20 rounded py-1  ml-20 text-center border-2 border-gray-300" type="number" max="999" value={maxValue} onChange={(e) => setMaxValue(e.target.value)} />
                    <label className="flex pl-1" for="maxValue">€</label>
                </div>
                <div className="w-64">
                    <p className="mt-16 mb-3 font-bold">Availablity</p>
                    <div>
                        <input type="checkbox" name="available"></input>
                        <label className="ml-5" for="available">Available now</label>
                    </div>
                </div>
                <div class="flex flex-col w-64">
                    <p className="mt-16 mb-3 font-bold">Evaluations</p>
                    <div>
                        <input type="checkbox" name="fiveStars"></input>
                        <label className="ml-5" for="fiveStars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" name="fourStars"></input>
                        <label className="ml-5" for="fourStars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" name="treeStars"></input>
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

    )
}

export default AsideFilterCategory;