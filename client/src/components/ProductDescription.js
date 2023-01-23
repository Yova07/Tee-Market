const ProductDescription = ({ article }) => {

    return (
        <div>
            <div className="mb-10">
                <div>
                    <p className="text-4xl font-bold">{article.price}€</p>
                    <p className="text-gray-500 text-sm">Incl. VAT</p>
                    <p className="text-green-700 mt-3">In Stock</p>
                </div>
            </div>
            <div className="flex items-center pb-14">
                <input className="w-10 h-10 mr-5 text-center bg-gray-200 rounded-lg" type='number' value='1' />
                <button className="px-6 py-2 text-3xl bg-red-900 text-white rounded-lg font-bold"><i class="fa-solid fa-cart-shopping pr-5"></i>Add to barket</button>
            </div>
            <div className="p-7 bg-zinc-50 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold">Informations on the product</h3>
                <ul className="list-disc pt-10 pl-5">
                    {article.informations && article.informations.map((information) => (
                        <li className="py-1">{information}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-14 p-8">
                <h1 className="text-2xl font-bold">Features</h1>
                <ul className="pt-8">
                    {article.characteristics && article.characteristics.map((characteristics) => (
                        <li className="grid grid-cols-2 border-b mb-2 pb-2"><p>{characteristics.split(': ').slice(0,1)}</p><p>{characteristics.split(': ').slice(1)}</p></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ProductDescription;