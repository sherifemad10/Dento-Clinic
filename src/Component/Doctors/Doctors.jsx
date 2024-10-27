/* eslint-disable react/prop-types */
import React, { useMemo, useContext } from "react";
import "./Doctors.css";
import { Link } from "react-router-dom";
import DataContext from "../Context/Context";

// Memoized component for individual doctor card
// eslint-disable-next-line react/display-name, react/prop-types
const DoctorCard = React.memo(({ doctor, img }) => (
  // eslint-disable-next-line react/prop-types
  <Link to={`/doctor/${doctor.id}`} key={doctor.id} className="doctor-card">
    <figure>
      <img src={img} alt={doctor.name} loading="lazy" />
    </figure>
    <h4>{doctor.name}</h4>
    <p>{doctor.specialty}</p>
    <div className="doctor-days">
      <p className="dayss">{doctor.day[0]}</p>
      <p className="dayss">{doctor.day[1]}</p>
    </div>
  </Link>
));

const Doctors = () => {
  const { doctors, doctorimg } = useContext(DataContext);

  const doctorsList = useMemo(() => {
    if (!doctors || doctors.length === 0) {
      return <p>No doctors available.</p>;
    }

    return doctors.map((doctor, index) => (
      <DoctorCard key={doctor.id} doctor={doctor} img={doctorimg[index]} />
    ));
  }, [doctors, doctorimg]);

  return (
    <section className="Our-doctors" id="doctor" data-aos="fade-up">
      <h2>Our Doctors</h2>
      <h3>Meet Our Expert Doctors</h3>
      <div className="doctors-wrapper">{doctorsList}</div>
    </section>
  );
};

export default Doctors;
