import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'

const Contact = () => {

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
        <>

            <div className='container contact-page'>
                <div className='text-zone'>

                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['H', 'i', 't', ' ', 'M', 'e', ' ', 'U', 'p', '!']}
                            idx={15}
                        />
                    </h1>

                    <p>
                        Listen, I'm experienced, I'm a great communicator, I'm broke, motivated and can fulfilled those pesky diversity quotas.


                    </p>
                    
                    <div className="contact-form">


                        <form>
                            <ul>
                                <li className='half'>
                                    <input
                                        type='text'
                                        name="name"
                                        placeholder='Name'
                                        required />

                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name="email"
                                        placeholder='Email'
                                        required />

                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required />

                                </li>
                                <li>
                                    <textarea
                                    placeholder="Message"
                                    name="message"
                                    required
                                    defaultValue=""  // Provide an empty default value
                                    />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>

                            </ul>


                        </form>




                    </div>
                    </div>


                




            </div>
            <Loader type="pacman" />

        </>

    )

}


export default Contact