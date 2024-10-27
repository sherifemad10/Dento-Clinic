import { useContext, memo, useCallback } from "react";
import "./Main.css";
import smile from "../../assets/smile.png";
import teeth from "../../assets/Teeth.png";
import { NavHashLink } from "react-router-hash-link";
import video from "../../assets/welcome.mp4";
import { CgClose } from "react-icons/cg";
import DataContext from "../Context/Context";

const Main = () => {
  const { viewDetails, setViewDetails } = useContext(DataContext);

  const closeVideo = useCallback(() => {
    setViewDetails(false);
  }, [setViewDetails]);

  return (
    <main id="main">
      <div className="main-text">
        <h1>Dento</h1>
        <q>A Better Life Starts with A Beautiful Smile</q>

        <p>
          Dental hospitals are healthcare facilities that specialize in
          providing dental care services to patients!
        </p>

        {/* Book appointment button */}
        <NavHashLink to="/#bookAppointment" className="nav-link" smooth>
          <button className="cta">
            <span>Book appointment</span>
            <ArrowIcon />
          </button>
        </NavHashLink>
      </div>

      {/* Main Images */}
      <div className="main-img">
        <figure className="smile-img">
          <img src={smile} alt="smile" loading="lazy" />
        </figure>
        <figure className="teeth-img">
          <img src={teeth} alt="teeth" loading="lazy" />
        </figure>
      </div>

      {/* Welcome Video */}
      {viewDetails && (
        <div className="welcome-video">
          <div className="welcome">
            <button className="close-video" onClick={closeVideo}>
              <CgClose />
            </button>
            <h2>Welcome to Dento</h2>
            <video controls autoPlay loop playsInline className="video">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </main>
  );
};

export default memo(Main);

// SVG Arrow Icon as a Component with Display Name for Reusability
const ArrowIcon = memo(() => (
  <svg width="15px" height="10px" viewBox="0 0 13 10" className="arrow-icon">
    <path d="M1,5 L11,5" />
    <polyline points="8 1 12 5 8 9" />
  </svg>
));

// Set display name for debugging
ArrowIcon.displayName = "ArrowIcon";
