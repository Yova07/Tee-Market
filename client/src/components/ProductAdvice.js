import { useEffect, useState } from "react"
import axios from "axios";

const ProductAdvice = ({ setActive, active, productId, updateNote }) => {

    const [oneStar, setOneStar] = useState();
    const [twoStars, setTwoStars] = useState();
    const [treeStars, setTreeStars] = useState();
    const [fourStars, setFourStars] = useState();
    const [fiveStars, setFiveStars] = useState();
    const [opinionNumber, setOpinionNumber] = useState();
    const [note, setNote] = useState();
    console.log(note);


    const calcAverageStars = async (stars) => {
        let oneStar = [];
        let twoStars = [];
        let treeStars = [];
        let fourStars = [];
        let fiveStars = [];

        for (let star of stars) {
            switch (star.stars) {
                case 1: oneStar.push(star.stars)
                    break;
                case 2: twoStars.push(star.stars)
                    break;
                case 3: treeStars.push(star.stars)
                    break;
                case 4: fourStars.push(star.stars)
                    break;
                case 5: fiveStars.push(star.stars)
                    break;
            }
        }

        setOneStar((oneStar.length / (stars.length)) * 100)
        setTwoStars((twoStars.length / (stars.length)) * 100)
        setTreeStars((treeStars.length / (stars.length)) * 100)
        setFourStars((fourStars.length / (stars.length)) * 100)
        setFiveStars((fiveStars.length / (stars.length)) * 100)
        setOpinionNumber(stars.length)
    }

    const calcAverage = (stars) => {
        let sum = 0;
        for (let star of stars) {
            sum += star.stars;
        }

        if (stars.length === 0) {
            setNote(0)
        }
        else {
            if ((sum / stars.length) % 1 === 0) {
                setNote(sum / stars.length)
            } else {
                setNote((sum / stars.length).toFixed(1))
            }

            updateNote((sum / stars.length));
        }

    }

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`/api/comments/stars/${productId}`);
            calcAverageStars(response.data)
            calcAverage(response.data);
        }
        fetch();
    }, [productId])

    return (
        <div className="md:mb-32 p-5 rounded-sm flex flex-col">
            <p className="font-bold mb-2">Opinion ({opinionNumber})</p>
            <p className="text-4xl mb-5 font-['Lobster']">{note} / 5</p>
            <div className="flex items-center">
                <p className="mr-10 text-sm">5</p>
                <div className="h-1 w-full relative bg-gray-200">
                    <div className="h-1 w-full absolute top-0 left-0" style={{ background: `linear-gradient(to right, rgba(127, 29, 29, 1) ${fiveStars}%, rgba(229, 231, 235, 0) 0%)` }}></div>
                </div>
            </div>
            <div className="flex items-center">
                <p className="mr-10 text-sm">4</p>
                <div className="h-1 w-full relative bg-gray-200">
                    <div className="h-1 w-full absolute top-0 left-0" style={{ background: `linear-gradient(to right, rgba(127, 29, 29, 1) ${fourStars}%, rgba(229, 231, 235, 0) 0%)` }}></div>
                </div>
            </div>
            <div className="flex items-center">
                <p className="mr-10 text-sm">3</p>
                <div className="h-1 w-full relative bg-gray-200">
                    <div className="h-1 w-full absolute top-0 left-0" style={{ background: `linear-gradient(to right, rgba(127, 29, 29, 1) ${treeStars}%, rgba(229, 231, 235, 0) 0%)` }}></div>
                </div>
            </div>
            <div className="flex items-center">
                <p className="mr-10 text-sm">2</p>
                <div className="h-1 w-full relative bg-gray-200">
                    <div className="h-1 w-full absolute top-0 left-0" style={{ background: `linear-gradient(to right, rgba(127, 29, 29, 1) ${twoStars}%, rgba(229, 231, 235, 0) 0%)` }}></div>
                </div>
            </div>
            <div className="flex items-center">
                <p className="mr-11 text-sm">1</p>
                <div className="h-1 w-full relative bg-gray-200">
                    <div className="h-1 w-full absolute top-0 left-0" style={{ background: `linear-gradient(to right, rgba(127, 29, 29, 1) ${oneStar}%, rgba(229, 231, 235, 0) 0%)` }}></div>
                </div>
            </div>
            <button className="border-2 border-red-900 py-2 w-full font-bold mx-auto text-red-900 rounded-sm mt-10 hover:bg-red-900 hover:text-white transition-all" onClick={() => setActive(!active)}>Share your experience</button>
        </div>

    )
}

export default ProductAdvice;