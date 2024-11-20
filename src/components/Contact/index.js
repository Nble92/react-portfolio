import { useEffect, useRef, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for default Leaflet icons not appearing
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        // Return a cleanup function to clear the timeout
        return () => {
            clearTimeout(timerId);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_yo0wykk',
                'template_xm0zxhx',
                refForm.current,
                'ackhE7KcWIUnfGR0F'
            )
            .then(
                () => {
                    alert('Message successfully sent');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send message, please try again.');
                }
            );
    };

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
                        Listen, I'm experienced, I'm a great communicator, I'm broke, motivated and can fulfill those pesky diversity quotas.
                    </p>
                    
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input
                                        type='text'
                                        name="name"
                                        placeholder='Name'
                                        required
                                    />
                                </li>
                                <li className='half'>
                                    <input
                                        type='email'
                                        name="email"
                                        placeholder='Email'
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                        defaultValue=""
                                    />
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='info-map'>
                    John Noble
                    <br />
                    Philadelphia PA
                    <br />
                    New York City NY
                    <br />
                    USA
                    <span>j.nble92@gmail.com</span>
                </div>       
                
                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]} zoom={13} className='leaflet-map'>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[44.96366, 19.61045]}>
                            <Popup>I don't live here....</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
