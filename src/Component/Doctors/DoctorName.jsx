import { useCallback, useContext } from "react";
import { useParams } from "react-router";
import DataContext from "../Context/Context";
import "./DoctorName.css";
import review from "../../assets/Teeth.png";
import rate5 from "../../assets/star5.png";
import rate45 from "../../assets/star4.5.png";
import rate4 from "../../assets/star4.png";
import { useState } from "react";
import icon from "../../assets/iconss.png";
import { Helmet } from "react-helmet-async";
import video from "../../assets/welcome.mp4";
import { CgClose } from "react-icons/cg";

const DoctorName = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState(false);

  const {
    doctors,
    doctorimg,
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
    viewDetails,
    setViewDetails,
    sendDateWhatapp,
  } = useContext(DataContext);

  const doctor = doctors.find((doc) => doc.id == id);
  console.log(doctor.reviews);
  if (!doctor) {
    return <p>Doctor not found</p>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const closeVideo = useCallback(() => {
    setViewDetails(false);
  }, [setViewDetails]);

  return (
    <>
      <Helmet>
        <title>{doctor.name}</title>
        <meta
          name="description"
          content="Dento is a digital clinic that provides high-quality dentistry services to patients in the comfort of their homes. Visit us today and experience the best dentistry in the city."
        />
        <meta
          name="keywords"
          content="Dento, Dental Clinic, Dentistry, Dental Services, Dental Care, Dental Treatment, Dental Health, Dental Problems, Dental Problems, Dental Problems, Dental Problems"
        />
      </Helmet>

      <section className="DoctorName container">
        <div className="doctor-name">
          <div className="doctor-img">
            <figure>
              <img src={doctorimg[id - 1]} alt={doctor.name} />
            </figure>
          </div>

          <div className="doctor-name-dec">
            <h4>{doctor.name}</h4>
            <q>{doctor.specialty}</q>
            <p className="summery">{doctor.summery}</p>
            <h5>Available Days</h5>
            <div className="doctor-day">
              {doctor.day.map((item) => (
                <div className="doctor-day-card" key={item.id}>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            {!booking && (
              <button onClick={() => setBooking(true)} className="cta">
                <span>Book appointment</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5" />
                  <polyline points="8 1 12 5 8 9" />
                </svg>
              </button>
            )}

            {/* Form */}
            {booking && (
              <div className="BookAppointment-form" data-aos="fade-down">
                <figure>
                  <img src={icon} alt="Dento" loading="lazy" />
                </figure>

                <h5>Keep Smiling</h5>
                <h6>Start your treatment</h6>
                <p>
                  Every step in your journey is crucial to achieving
                  outstanding, enduring, and natural results.
                </p>

                <form>
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
                    type="number"
                    placeholder="Your Phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <div className="select-doctor-date">
                    <select
                      value={day}
                      onChange={(e) => setDay(e.target.value)}
                    >
                      <option>Select Date</option>
                      {doctor.day.map((item) => (
                        <option key={item.id} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setYourDoctor(doctor.name);
                      console.log(yourDoctor);
                      sendDateWhatapp();
                      setBooking(false);
                    }}
                    type="submit"
                    className="continue-application"
                  >
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
            )}
          </div>
        </div>

        <div className="doctor-review">
          <h3>Reviews</h3>
          <div className="doctor-review-wrapper">
            {doctor.reviews.map((item) => (
              <div className="doctor-review-card" key={item.id}>
                <div className="doctor-review-card-img">
                  <figure>
                    <img src={review} alt="logo-review" />
                  </figure>
                </div>

                <div className="doctor-review-card-name-rate-dec">
                  <h4>{item.name}</h4>
                  <figure className="review-img">
                    {item.rating == 5 ? (
                      <img src={rate5} alt="rate 5" />
                    ) : item.rating == 4.5 ? (
                      <img src={rate45} alt="rate 4.5" />
                    ) : item.rating == 4 ? (
                      <img src={rate4} alt="rate 4" />
                    ) : (
                      <p></p>
                    )}
                  </figure>
                  <p>{item.comment}</p>
                </div>
              </div>
            ))}
          </div>
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
      </section>
    </>
  );
};

export default DoctorName;
