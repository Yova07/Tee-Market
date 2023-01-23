import { Link } from 'react-router-dom';

const links = 'pl-5 py-2 hover:bg-red-200 text-zinc-900 opacity-50 hover:opacity-100';

const AdminAsideNavbar = () => {

    return (
        <div className="aside__navbar w-96 bg-white">
            <h2 className="my-10 ml-5 text-xl">Categories</h2>
            <Link>
                <p className={links}>Create</p>
            </Link>
            <Link>
                <div className='flex items-center hover:bg-red-200'>
                    <p className={links}>Products</p>
                    <i class="fa-solid fa-chevron-left ml-3 text-xs text-gray-500"></i>
                </div>
            </Link>
            <Link>
                <p className={links}>Users</p>
            </Link>
        </div>
    )
}

export default AdminAsideNavbar;