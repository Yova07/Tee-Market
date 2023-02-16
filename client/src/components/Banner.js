import image from '../assets/images/imgbin_native-instruments-maschine-mikro-mk2-native-instruments-maschine-mikro-mk2-digital-audio-workstation-musical-instruments-png.png';

const Banner = () => {

    return (
        <div className="bg-zinc-900 banner">
            <div className=" h-full max-w-[1440px] mx-auto flex justify-center items-center">
                <div className="w-1/2 z-30 flex flex-col justify-center py-20">
                    <img src={image} />
                    <h1 className="text-white text-2xl text-center">Native instrument partner of your studies !</h1>
                    <p className="text-white mt-1 text-center">Get your promotion with student voucher</p>
                </div>

            </div>
        </div>
    )
}

export default Banner;