import axios from "axios";
import { useEffect, useState } from "react";

const Stars = ({ productId }) => {

    const [star, setStar] = useState('');
    const [numberComment, setNumberComment] = useState('')

    const calcAverage = (stars) => {
        let sum = 0;
        for(let star of stars) {
            sum += star.stars;
        }

        if(stars.length === 0) {
            setStar(0)
        }
        else {
            if(sum / stars.length > 4.5) {
                setStar(5)
            }
            if(sum / stars.length <= 4.5 && sum / stars.length >= 3.5) {
                setStar(4)
            }
            if(sum / stars.length < 3.5 && sum / stars.length >= 2.5) {
                setStar(3)
            }
            if(sum / stars.length < 2.5 && sum / stars.length >= 1.5) {
                setStar(2)
            }
            if(sum / stars.length < 1.5 && sum / stars.length >= 0.5) {
                setStar(1)
            }
            if(sum / stars.length < 0.5 ) {
                setStar(0)
            }      
        }
        
    }

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`/api/comments/stars/${productId}`);
            setNumberComment(response.data.length);
            calcAverage(response.data);
        }
        fetch();
    })

    return (
        <div className='text-sm flex items-center text-gray-200'>
            <i className={`fa-solid fa-star ${star === 1 || star === 2 || star === 3 || star === 4 || star === 5 ? 'text-red-900' : ''}`}></i>
            <i className={`fa-solid fa-star ${star === 2 || star === 3 || star === 4 || star === 5 ? 'text-red-900' : ''}`}></i>
            <i className={`fa-solid fa-star ${star === 3 || star === 4 || star === 5 ? 'text-red-900' : ''}`}></i>
            <i className={`fa-solid fa-star ${star === 4 || star === 5 ? 'text-red-900' : ''}`}></i>
            <i className={`fa-solid fa-star ${star === 5 ? 'text-red-900' : ''}`}></i>
            <p className='ml-1 text-black'>({numberComment})</p>
        </div>
    )
}

export default Stars;