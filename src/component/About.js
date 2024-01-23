import React from 'react';
import Image1 from '../img/iss1.jpg';
import Image2 from "../img/iss2.jpg";
import Image3 from "../img/iss3.jpg";
import { Container } from './LocationISS';
import Footer from './Footer';

export default function About() {
  return (
    <>
        <Container>
            <div className='text-light container py-3 mb-5' style={{maxWidth: 900}}>
                <div className='mb-2'>
                    <h3>The International Space Station (ISS)</h3>
                </div>
                <div>
                    <img className='w-100 mt-3' style={{ aspectRatio: "2/1"}} src={Image1}/>
                    <div>
                        <p className='my-3'>The International Space Station (ISS) is a spacecraft (largest man-made Object in space)  that orbits Earth at an average altitude of approximately 420 kilometers (about 261 miles). It serves as a unique and collaborative space environment where astronauts and cosmonauts from various countries live and work together.</p>
                        <p className='my-3'>
                            <ul>
                                <li>Orbit and Speed: The ISS orbits the Earth approximately every 90 minutes, traveling at a speed of about 28,000 kilometers per hour (17,500 miles per hour).</li>
                                <li>The construction of the ISS began in 1998, and it involved numerous spaceflights and assembly missions.</li>
                                <li>Involving multiple space agencies, including NASA (United States), Roscosmos (Russia), ESA (European Space Agency), JAXA (Japan Aerospace Exploration Agency), and CSA (Canadian Space Agency).</li>
                                <li>The ISS is composed of pressurized modules for living and working, unpressurized truss segments for structural support, solar arrays for power generation, and various other components.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 mt-md-3'>
                        <img className='w-100 mt-2' src={Image2} />
                    </div>
                    <div className='col-12 col-md-6 mt-md-3'>
                        <img className='w-100 mt-2' src={Image3} />
                    </div>
                    <div className='col-12 mt-3'>
                        <p>
                            <ul>
                                <li>Resupply missions are conducted regularly to deliver food, equipment, and scientific payloads to the ISS. These missions are carried out by various spacecraft, including Russian Soyuz and Progress vehicles, American SpaceX Dragon and Northrop Grumman Cygnus spacecraft, and others.</li>
                                <li>The ISS serves  as a platform for international partnerships, fostering collaboration in space exploration and research.</li>
                                <li>The knowledge gained from ISS research contributes to advancements in science and technology, with applications ranging from medical treatments to materials development.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </Container>
        <Footer/>
    </>
  )
}
