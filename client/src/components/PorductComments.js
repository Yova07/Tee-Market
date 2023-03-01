import axios from "axios";
import { useEffect, useState } from "react";

const ProductComments = ({ articleId }) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${articleId}`)
            setComments(response.data);
        }
        fetch();
    })

    return (
        <div className="mt-14 md:mt-20 mb-20">
            <h1 className="text-4xl border-b mb-5 pb-5">Comments</h1>
            <p>There's no comments here</p>
            {comments && comments.map((comment) => (
                <p>{comment.shortTitle}</p>
            ))}
        </div>
    )
}

export default ProductComments;