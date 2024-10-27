import { useEffect } from "react";
import About from "../../About/About";
import Services from "../../BestSelling/Services";
import BookAppointment from "../../BookAppointment/BookAppointment";
import Company from "../../Company/Company";
import Doctors from "../../Doctors/Doctors";
import Location from "../../Location/Location";
import Main from "../../Main/Main";
import OurServices from "../../ourServices/OurServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Helmet>
        <title>Dento</title>
        <meta
          name="description"
          content="Dento is a digital clinic that provides high-quality dentistry services to patients in the comfort of their homes. Visit us today and experience the best dentistry in the city."
        />
        <meta
          name="keywords"
          content="Dento, Dental Clinic, Dentistry, Dental Services, Dental Care, Dental Treatment, Dental Health, Dental Problems, Dental Problems, Dental Problems, Dental Problems"
        />
      </Helmet>
    <section className="Home container">
      <Main />
      <OurServices />
      <Services />
      <About />
      <Doctors />
      <Company />
      <BookAppointment />
      <Location />
    </section>
    </>

  );
};

export default Home;
