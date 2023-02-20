import axios from "axios";
import { useState } from "react";

const CreateComment = ({ active, setActive, articleId, note }) => {

    const [stars, setStars] = useState(10);
    const [shortTitle, setShortTitle] = useState();
    const [comment, setComment] = useState();

    const buttonClick = () => {
        if (stars !== 0 && stars !== 10) {
            setActive(!active)
        }
        if (stars === 0 || stars === 10) {
            setStars(0);
        }
    }

    const handleClick = () => {
        setActive(!active);
        setStars(10);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const getComment = {
                stars,
                shortTitle,
                comment
            };

            const response = await axios.post(`/api/comments/${articleId}/create`, getComment);
            setStars(10);
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className={`${active ? 'block' : 'hidden'}`}>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11/12 sm:w-[600px] rounded-sm">
                <i className="fa-solid fa-xmark absolute text-xl top-2 left-3 cursor-pointer" onClick={handleClick}></i>
                <form className="bg-white flex flex-col p-10" onSubmit={handleSubmit}>
                    <h1 className="text-2xl border-b pb-2 mb-8">Share your experience</h1>
                    <div className='stars text-2xl flex items-center text-gray-300'>
                        <i className={`fa-solid fa-star ${stars === 1 || stars === 2 || stars === 3 || stars === 4 || stars === 5 ? 'text-red-900' : ''}`} onClick={() => setStars(1)}></i>
                        <i className={`fa-solid fa-star ${stars === 2 || stars === 3 || stars === 4 || stars === 5 ? 'text-red-900' : ''}`} onClick={() => setStars(2)}></i>
                        <i className={`fa-solid fa-star ${stars === 3 || stars === 4 || stars === 5 ? 'text-red-900' : ''}`} onClick={() => setStars(3)}></i>
                        <i className={`fa-solid fa-star ${stars === 4 || stars === 5 ? 'text-red-900' : ''}`} onClick={() => setStars(4)}></i>
                        <i className={`fa-solid fa-star ${stars === 5 ? 'text-red-900' : ''}`} onClick={() => setStars(5)}></i>
                    </div>
                    <p className={`${stars === 0 ? 'opacity-100' : 'opacity-0'} text-sm text-red-500 mt-3`}>Share your experience</p>
                    <input className="border mb-5 p-1 mt-2 rounded-sm" type='text' placeholder="Short Title (optional)" value={shortTitle} onChange={(e) => setShortTitle(e.target.value)}></input>
                    <textarea className="border p-1 mb-10 h-40 rounded-sm" placeholder="Your comment (optional)" onChange={(e) => setComment(e.target.value)}>{comment}</textarea>
                    <button className="bg-black text-white py-2 hover:opacity-70" onClick={buttonClick}>Add your comment</button>
                </form>
            </div>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50"></div>
        </div>
    )
}

export default CreateComment;