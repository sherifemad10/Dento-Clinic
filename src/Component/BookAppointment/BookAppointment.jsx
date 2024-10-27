import { useContext, useCallback } from "react";
import "./BookAppointment.css";
import Bookappointment from "../../assets/BookAppointment.jpg";
import icon from "../../assets/iconss.png";
import DataContext from "../Context/Context";

const BookAppointment = () => {
  const {
    doctors,
    name,
    setName,
    age,
    setAge,
    phone,
    setPhone,
    yourDoctor,
    setYourDoctor,
    day,
    setDay,
    sendDateWhatapp,
  } = useContext(DataContext);

  // Using useCallback to memoize the form submission handler
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      sendDateWhatapp();
    },
    [sendDateWhatapp]
  );

  return (
    <section className="BookAppointment" id="bookAppointment">
      <figure className="BookAppointment-img" data-aos="fade-left">
        <img src={Bookappointment} alt="Book appointment" loading="lazy" />
      </figure>

      <div className="BookAppointment-form" data-aos="fade-right">
        <figure>
          <img src={icon} alt="Dento" loading="lazy" />
        </figure>

        <h5>Keep Smiling</h5>
        <h6>Start your treatment</h6>
        <p>
          Every step in your journey is crucial to achieving outstanding,
          enduring, and natural results.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Your Age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Your Phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="select-doctor-date">
            <select
              value={yourDoctor}
              onChange={(e) => setYourDoctor(e.target.value)}
              required
            >
              <option value="">Select Doctor</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            </select>

            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            >
              {}
              <option value="">Select Day</option>
              {[
                "Saturday",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
              ].map((dayName) => (
                <option key={dayName} value={dayName}>
                  {dayName}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="continue-application">
            <div>
              <div className="pencil" />
              <div className="folder">
                <div className="top">
                  <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,0 24,0.447715 24,1 L24,8.17157 C24,8.70201 23.7893,9.21071 23.4142,9.58579 L20.5858,12.4142 C20.2107,12.7893 20,13.298 20,13.8284 L20,26 C20,26.5523 19.5523,27 19,27 L1,27 C0.447715,27 0,26.5523 0,26 L0,1 C0,0.447715 0.447715,0 1,0 Z" />
                  </svg>
                </div>
                <div className="paper" />
              </div>
            </div>
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookAppointment;
