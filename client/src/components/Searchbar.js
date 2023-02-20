import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Searchbar = () => {

    const [search, setSearch] = useState('')
    const [searchResult, setSearchReslut] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            if (search.length > 0) {
                const response = await axios.get(`/api/products/search/${search.toLowerCase()}`);
                setSearchReslut(response.data);
            }
            if(search.length === 0) {
                setSearchReslut('')
            }
        }
        fetch();
    }, [search]);

    const handleClick = () => {
        setSearchReslut([]);
        setSearch('');
    }

    return (
        <div className="md:w-3/5 absolute top-16 md:relative md:top-0 left-16 md:left-5 right-5">
            <i class="fa-solid fa-magnifying-glass absolute top-2 left-2 md:left-4"></i>
            <input value={search} className="p-1 w-full rounded-lg pl-8 md:pl-10 text-base" type="search" onChange={(e) => setSearch(e.target.value)} />
            <div className={`absolute max-h-72 rounded-lg mt-1 w-full shadow-lg z-50 bg-white ${searchResult === '' ? 'hidden' : 'block'}`}>
            <p className={`text-center pt-1 pb-3 mt-3 text-gray-400 ${searchResult.length === 0 ? 'block' : 'hidden'}`}>No result</p>
                {searchResult !== '' && searchResult.map((product) => (
                    <Link to={`/product/${product.name}`}>
                        <p className="text-lg pl-5 py-2 hover:bg-gray-200 last:rounded-b-lg first:rounded-t-lg" onClick={handleClick}>{product.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Searchbar;