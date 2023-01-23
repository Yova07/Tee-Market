import { Link } from "react-router-dom";

const HomeCategory = () => {

    return (
        <div data-aos='fade up' >
            <h1 className="text-3xl md:text-5xl text-center md: mb-10 md:mb-16"><span className="font-bold text-red-900">Category</span> on <span className="font-['Lobster'] text-3xl md:text-5xl" >Music</span></h1>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 2xl:w-[1500px] w-11/12 mx-auto auto-rows-[300px] mb-8 md:mb-16">
                <Link to='/category/audio-interface'>
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1569050937856-f2a05c0ab6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Audio Interfaces</p>
                    </div>
                </Link>
                <Link to="/category/studio-monitors">
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1609702847389-b8aec1b0b929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1563&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Studio Monitors</p>
                    </div>
                </Link>
                <Link to='/category/microphones'>
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Microphones</p>
                    </div>
                </Link>
                <Link to='/category/preamps'>
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1576441581476-95757e4e515b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Preamps</p>
                    </div>
                </Link>
                <Link to='/category/headphones'>
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Headphones</p>
                    </div>
                </Link>
                <Link to='/category/acoustic-treatment'>
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://www.thomann.de/blog/wp-content/uploads/2018/11/Acoustic-Treatment.png)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Acoustic Treatment</p>
                    </div>
                </Link>
                <Link to='/category/controllers'>
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1583568671741-c75e1e2e4389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Controllers</p>
                    </div>
                </Link>
                <Link to='/category/effects-and-signal-processors'>
                    <div className="bg text-center h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1618233980710-f7ca074de8cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Effects and Signal Processor</p>
                    </div>
                </Link>
                <Link to='/category/midi-equipement'>
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1615297658577-dc5cec88e81a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">MIDI Equipment</p>
                    </div>
                </Link>
                <Link to='/category/mixing-consoles'>
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1618609377864-68609b857e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Mixing Consoles</p>
                    </div>
                </Link>
                <Link to='/category/studio-accessories'>
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1569050937856-f2a05c0ab6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Studio Accessories</p>
                    </div>
                </Link>
                <Link to='/category/studio-software'>
                    <div className="bg h-full flex justify-center items-center text-white rounded-lg bg-[url(https://images.unsplash.com/photo-1569050937856-f2a05c0ab6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)]">
                        <p className="z-10 text-xl sm:text-2xl mx-5">Studio Software</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HomeCategory;