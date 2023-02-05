
const ProductAdvice = ({ setActive, active }) => {

    return (
        <div className="md:mb-32 p-5 rounded-sm flex flex-col">
            <p className="font-bold mb-2">Opinion (0)</p>
            <p className="text-4xl mb-5 font-['Lobster']">0 / 5</p>
            <div className="flex items-center">
                <p className="mr-10 text-sm">5</p>
                <div className="h-1 w-full bg-gray-200"></div>
            </div>
            <div className="flex items-center">
                <p className="mr-10 text-sm">4</p>
                <div className="h-1 w-full bg-gray-200"></div>
            </div>
            <div className="flex items-center">
                <p className="mr-10 text-sm">3</p>
                <div className="h-1 w-full bg-gray-200"></div>
            </div>
            <div className="flex items-center">
                <p className="mr-10 text-sm">2</p>
                <div className="h-1 w-full bg-gray-200"></div>
            </div>
            <div className="flex items-center">
                <p className="mr-10 text-sm">1</p>
                <div className="h-1 w-full bg-gray-200"></div>
            </div>
            <button className="border-2 border-orange-600 py-2 w-full font-bold mx-auto text-orange-600 rounded-sm mt-10 hover:bg-orange-600 hover:text-white transition-all" onClick={() => setActive(!active)}>Share your experience</button>
        </div>

    )
}

export default ProductAdvice;