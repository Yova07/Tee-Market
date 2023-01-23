import { Link } from "react-router-dom";

const NavbarCategories = () => {

    return (
        <div className="wrapper w-full bg-zinc-900 hidden md:flex items-center overflow-auto">
            <Link to='/category/audio-interface'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Audio Interfaces</p>
            </Link>
            <Link to="/category/studio-monitors">
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Studio Monitors</p>
            </Link>
            <Link to='/category/microphones'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Microphones</p>
            </Link>
            <Link to='/category/preamps'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Preamps</p>
            </Link>
            <Link to='/category/headphones'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Headphones</p>
            </Link>
            <Link to='/category/acoustic-treatment'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Acoustic Treatment</p>
            </Link>
            <Link to='/category/controllers'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Controllers</p>
            </Link>
            <Link to='/category/effects-and-signal-processors'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Effects and Signal Processors</p>
            </Link>
            <Link to='/category/midi-equipement'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">MIDI Equipement</p>
            </Link>
            <Link to='/category/mixing-consoles'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Mixing Consoles</p>
            </Link>
            <Link to='/category/studio-accessories'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Studio Accessories</p>
            </Link>
            <Link to='/category/studio-software'>
                <p className="text-white px-5 py-2 opacity-60 hover:opacity-100 w-full hover:bg-red-900 hover:text-white transition-all whitespace-nowrap">Studio Software</p>
            </Link>
        </div>
    )
}

export default NavbarCategories;