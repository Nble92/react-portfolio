import LogoTitle from '../../assets/images/NobleLogo.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import {Loader} from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    // const nameArray = ['N', 'B', 'L', 'E']
    // const jobArray = ['D',''e,'v','e','l','o','p','e','r']

    useEffect(() => {
    const timerId = setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 4000);

    // Return a cleanup function to clear the timeout
    return () => {
        clearTimeout(timerId);
    };
}, []);


    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>J</span>
                    <span className={`${letterClass} _12`}>O </span>
                    <span className={`${letterClass} _12`}>H </span>
                    <span className={`${letterClass} _12`}>N </span>
                    <br/>
                    {/* <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m </span> */}
                <img class='nbleLogo' src={LogoTitle} alt="developer" />
                {/* <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} /> */}
                <br />
                {/* <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                            idx={15} /> */}
                        <br />
                    </h1>
                    <h2>
                        <br />
                        Full-Stack developer / Cyber Security Engineer / Content Creator</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
            </div>
            <Loader type="pacman"/>
        </>
        
    )
}

export default Home