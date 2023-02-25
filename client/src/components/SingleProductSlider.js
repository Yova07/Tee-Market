
const SingleProductSlider = ({ article, image, setImage }) => {

    const handleClick = (e) => {
        setImage(e.target.src);
    }

    return (
        <div className="w-full mx-auto">
            <div className="sticky mt-10 top-10 mr-10 w-full">
                <div className={`flex justify-center items-center mx-auto relative xl:h-[500px] md:h-[300px] lg:h-[450px] h-[300px] md:mr-10 border-zinc-300`}>
                    <img className="p-5 h-full" src={image}></img>
                    <div className="absolute w-full h-full bg-gray-400 opacity-5 rounded"></div>
                </div>
                <div className="flex w-full overflow-auto ">
                    {article.image && article.image.map((image) => (
                        <img className="w-32 md:w-44 px-5" src={image} onClick={handleClick} ></img>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SingleProductSlider;