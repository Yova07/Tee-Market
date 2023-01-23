import image from '../assets/images/saso-tusar-QtgGYlug6Cw-unsplash.jpg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {

    return (
        <>
            <Navbar />
                <div className="about flex justify-center items-center">
                    <div className='flex justify-between'>
                        <div className='flex flex-col justify-center items-center w-3/5 mx-auto'>
                            <h1 className='text-red-900 text-5xl mb-16'>About <span className="font-['Lobster'] text-5xl text-black" >Music</span></h1>
                            <p className='text-center mb-10 leading-smooth'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus id interdum velit laoreet id donec ultrices. Tempor nec feugiat nisl pretium fusce. Massa enim nec dui nunc mattis enim ut tellus elementum. Lacus sed viverra tellus in. Nunc non blandit massa enim nec dui. Et netus et malesuada fames. Diam quis enim lobortis scelerisque fermentum dui. Dolor morbi non arcu risus. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Arcu odio ut sem nulla pharetra diam sit amet.</p>
                            <p className='text-center leading-smooth'>Tincidunt tortor aliquam nulla facilisi cras fermentum odio. Scelerisque purus semper eget duis. Sit amet facilisis magna etiam. Risus nullam eget felis eget nunc lobortis. Pellentesque id nibh tortor id aliquet lectus. Quam id leo in vitae turpis massa sed. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Sollicitudin nibh sit amet commodo nulla facilisi. Hendrerit dolor magna eget est lorem ipsum dolor sit. Adipiscing commodo elit at imperdiet dui. Pharetra sit amet aliquam id diam. Etiam tempor orci eu lobortis elementum. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.</p>
                        </div>
                        <img className='about__img' src={image}></img>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default About;