import { useState, useEffect } from "react";

const SingleProductSlider = ({ article }) => {

    const [scroll, setScroll] = useState();
    console.log(scroll);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const position = document.documentElement.scrollTop;
            setScroll(position)
        });
    })

    return (
        <div className="w-1/2">
            <div className={`flex justify-center ${scroll > 80 ? "sticky top-20" : ''}`}>
                <img src={article.image}></img>
            </div>
        </div>
    )
}

export default SingleProductSlider;