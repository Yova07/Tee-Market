import image from '../assets/images/imgbin_native-instruments-maschine-mikro-mk2-native-instruments-maschine-mikro-mk2-digital-audio-workstation-musical-instruments-png.png';

const Banner = () => {

    return (
        <div className="bg-zinc-900 banner">
            <div className=" h-full max-w-[1440px] mx-auto flex justify-center items-center">
                <div className="z-30 flex flex-col justify-center py-10 md:py-20">
                    <img className='md:w-1/2 w-8/12 mx-auto' src={image} />
                    <h1 className="text-white text-xl md:text-2xl text-center mt-5 md:mt-0 px-5 font-['Anton']">Native instrument partner of your studies !</h1>
                    <p className="text-white text-sm md:text-base mt-5 text-center">Get your promotion with student voucher</p>
                </div>

            </div>
        </div>
    )
}

export default Banner;