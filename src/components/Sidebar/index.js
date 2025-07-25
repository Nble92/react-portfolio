import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import LogoN from '../../assets/images/NlogoVertWHT.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faUser, faRocket } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoN} alt="logo" />
            {/* <img className="sub-logo" src={LogoSubtitle} alt="LIGMA"/> */}
        </Link>
        <nav>
            <NavLink
                exact="true"
                activeclassname="active"
                to="/">
                <FontAwesomeIcon
                    icon={faHome}
                    color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about">
                <FontAwesomeIcon
                    icon={faUser}
                    color="#4d4d4e" />
            </NavLink> 
            <NavLink
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact">
                <FontAwesomeIcon
                    icon={faEnvelope}
                    color="#4d4d4e" />
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="project-link"
                to="/projects">
                <FontAwesomeIcon
                    icon={faRocket}
                    color="#4d4d4e" />
            </NavLink>

        </nav>
    
        <ul>
            <li>
                
                <a target="_blank" rel='noreferrer' href='https://github.com/Nble92'>

                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />

                </a>


            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/john-noble-tech/'>

                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />

                </a>

            </li>

        </ul>

   </div>
        

)

export default Sidebar