import Footer from '../components/Footer';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const About = () => {

    return (
        <>
                <div className="about flex justify-center items-center">
                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className="text-3xl md:text-5xl font-['Lobster'] mt-20">In construction</h1>
                            <Player
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/packages/lf20_ffdeo4si.json"
                        style={{ height: '80%', width: '80%' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default About;