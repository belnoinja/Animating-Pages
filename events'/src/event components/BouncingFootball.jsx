
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../event components css/BouncingFootball.css';  // Import the CSS for the animation

const FootballBounce = () => {
  return (
    <div className="ball-container">
      <FontAwesomeIcon icon="fa-light fa-futbol" className='football-icon'/>
    </div>
  );
};

export default FootballBounce;
