import './index.scss';
import AngularCal from '../AngularCal';


const Projects = () => {
  return (
    <div className="container projects-page">
      <div className='text-zone'>
        <div className="jsparticles">

          <iframe
            height="100%"
            style={{ width: '100%', }}
            scrolling="no"
            title="Untitled"
            src="https://codepen.io/Nble92/embed/dygMKab?,result"
            frameBorder="no"
            loading="lazy"
            allowTransparency={true}
            allowfullscreen="true"

          >
          </iframe>

        </div>

        <div className='angularcal'>

          <AngularCal></AngularCal>


        </div>

      </div>

    </div>
  );
};

export default Projects;
