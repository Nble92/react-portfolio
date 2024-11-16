import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'

const About = () => {    

    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
    const timerId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000);

    // Return a cleanup function to clear the timeout
    return () => {
        clearTimeout(timerId);
    };
    }, []);
    
    
    return (
        <div className='container about-page'>
            <div className='text-zone'>

                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                        idx={15}
                />

                </h1>
                <p>
                    Need to link this to an actual document. Might be a cool idea given that people just like when
                    you connect a bunch of shit together securely.

                </p>
                <p>
                    I really wanna play some videogames.
                </p>

            
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faVuejs} color='#3FB07D'/>
                   
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                   
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#28A4D9'/>
                   
                    </div><div className='face4'>
                        <FontAwesomeIcon icon={faCss3} color='#5ED4F4'/>
                   
                    </div><div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color='#DD0EFD81D031'/>
                   
                    </div><div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                   
                    </div>

                </div>


            </div>
        </div>

    )
}

export default About