const Searchbar = () => {

    return (
        <div className="md:w-3/5 absolute top-16 md:relative md:top-0 w-full">
            <i class="fa-solid fa-magnifying-glass absolute top-2 left-2 md:left-4"></i>
            <input className="p-1 w-11/12 md:w-full rounded-lg pl-8 md:pl-10 text-base" type="search" />
        </div>
    )
}

export default Searchbar;