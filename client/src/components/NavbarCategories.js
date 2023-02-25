import { Link } from "react-router-dom";

const NavbarCategories = ({ menuActive, setMenuActive }) => {

    return (
        <div className={`wrapper bg-zinc-900 fixed h-screen transition-all md:h-auto z-40 top-0 ${menuActive ? 'w-screen' : 'w-0 md:w-full'} md:relative md:flex items-center overflow-auto`}>
            <i className="fa-solid fa-xmark absolute text-white md:hidden text-xl top-4 right-6" onClick={() => setMenuActive(!menuActive)}></i>
            <h1 className="text-white px-7 mt-10 text-5xl font-['Lobster'] md:hidden">Categories</h1>
            <Link to='/category/audio-interface'>
                <p className="text-white md:px-5 py-4 md:py-2 w-10/12 mx-auto mt-10 md:mt-0 md:opacity-60 lg:hover:opacity-100 md:w-full lg:hover:bg-red-900 border-b border-zinc-600 my-2 md:my-0 md:border-none transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Audio Interfaces</p>
            </Link>
            <Link to="/category/studio-monitors">
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 border-b border-zinc-600 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Studio Monitors</p>
            </Link>
            <Link to='/category/microphones'>
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 border-b border-zinc-600 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Microphones</p>
            </Link>
            <Link to='/category/preamps'>
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 border-b border-zinc-600 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Preamps</p>
            </Link>
            <Link to='/category/headphones'>
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 border-b border-zinc-600 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Headphones</p>
            </Link>
            <Link to='/category/acoustic-treatment'>
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 border-b border-zinc-600 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Acoustic Treatment</p>
            </Link>
            <Link to='/category/controllers'>
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 border-b border-zinc-600 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Controllers</p>
            </Link>
            <Link to='/category/effects-and-signal-processors'>
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 border-b border-zinc-600 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Effects and Signal Processors</p>
            </Link>
            <Link to='/category/midi-equipement'>
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 border-b border-zinc-600 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>MIDI Equipement</p>
            </Link>
            <Link to='/category/mixing-consoles'>
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 border-b border-zinc-600 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Mixing Consoles</p>
            </Link>
            <Link to='/category/studio-accessories'>
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 border-b border-zinc-600 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Studio Accessories</p>
            </Link>
            <Link to='/category/studio-software'>
                <p className="text-white md:px-5 py-4 md:py-2 md:opacity-60 lg:hover:opacity-100 w-10/12 mx-auto md:w-full lg:hover:bg-red-900 md:border-none my-2 md:my-0 transition-all whitespace-nowrap" onClick={() => setMenuActive(!menuActive)}>Studio Software</p>
            </Link>
        </div>
    )
}

export default NavbarCategories;