// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { CiLocationOn } from "react-icons/ci";
import "./Location.css";

const Location = () => {
  return (
    <section className="location" id="contact" data-aos="fade-up">
      <h2>More Information</h2>

      <div className="location-wrapper">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27076967.084304288!2d-157.3209228!3d34.061981199999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d61a06f963f5%3A0x1b7430f5e183644a!2sDental%20Care%20USA!5e0!3m2!1sen!2seg!4v1729529540329!5m2!1sen!2seg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location of Dental Care USA"
          />
        </div>

        <div className="info">
          <div className="location-item">
            <h3>Our Location</h3>
            <p>
              <span>
                <CiLocationOn />
              </span>
              15940 Amar Rd, City of Industry, CA 91744, United States
            </p>
          </div>

          <div className="hour">
            <h3>Opening Hours</h3>
            <p>
              <span>
                <HiOutlineCalendarDays />
              </span>
              Saturday - Thursday: 5:00 PM - 10:00 PM
            </p>
          </div>

          <div className="number">
            <h3>Clinic Number</h3>
            <p>
              <span>
                <MdOutlineLocalPhone />
              </span>
              +1 626-336-3404
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
