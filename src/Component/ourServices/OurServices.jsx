import { memo, useMemo } from "react";
import "./OurServices.css";
import Root from "../../assets/service-icon-1.png";
import Cosmetic from "../../assets/service-icon-3.png";
import Live from "../../assets/service-icon-5.png";
import Alignment from "../../assets/service-icon-2.png";
import Oral from "../../assets/service-icon-4.png";
import Cavity from "../../assets/service-icon-6.png";
import banner from "../../assets/service-banner.png";

// Memoized Service Card Component
// eslint-disable-next-line react/prop-types
const ServiceCard = memo(({ img, title, text }) => (
  <div className="ourServices-card">
    <figure>
      <img src={img} alt={`${title} icon`} loading="lazy" />
    </figure>
    <div className="ourServices-card-text">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
));

// Set display name for easier debugging in React DevTools
ServiceCard.displayName = "ServiceCard";

const OurServices = () => {
  // Memoize services data to avoid recreating it on each render
  const services = useMemo(
    () => [
      {
        id: 1,
        img: Root,
        title: "Root Canal",
        text: "Our skilled professionals use the latest technology to relieve pain, remove infection, and restore your dental health with precision and care. Trust us to preserve your smile with comfortable and effective root canal services.",
      },
      {
        id: 2,
        img: Cosmetic,
        title: "Cosmetic Teeth",
        text: "Enhance your smile with our advanced cosmetic teeth services at Dento. From teeth whitening to veneers, our expert team provides personalized treatments to help you achieve the radiant, confident smile you've always wanted.",
      },
      {
        id: 3,
        img: Live,
        title: "Live Advisory",
        text: "Get expert dental advice in real-time with our Live Advisory Services at Dento. Our professionals are here to answer your questions, provide guidance on treatments, and help you make informed decisions about your oral health from the comfort of your home.",
      },
      {
        id: 4,
        img: Alignment,
        title: "Alignment Teeth",
        text: "Achieve a perfectly aligned smile with our expert teeth alignment services at Dento. Using modern techniques like clear aligners and braces, we create customized solutions to straighten your teeth and improve your overall dental health.",
      },
      {
        id: 5,
        img: Oral,
        title: "Oral Hygiene",
        text: "Maintain a healthy, beautiful smile with our comprehensive oral hygiene services at Dento. From professional cleanings to personalized care plans, our team helps prevent dental issues and keeps your teeth and gums in top condition.",
      },
      {
        id: 6,
        img: Cavity,
        title: "Cavity Inspection",
        text: "Ensure your teeth stay healthy with our cavity inspection services at Dento. Using advanced diagnostic tools, we detect cavities early and provide the necessary treatment to prevent further damage and maintain your oral health.",
      },
    ],
    []
  );

  return (
    <section className="OurServices" id="services" data-aos="fade-up">
      <h2>Our Services</h2>
      <h3>What We Provide</h3>

      <div className="ourServices-warpper">
        {/* Left Column */}
        <div className="ourServices-col-left">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>

        {/* Center Banner */}
        <div className="ourServices-col-center">
          <figure>
            <img src={banner} alt="Service banner" loading="lazy" />
          </figure>
        </div>

        {/* Right Column */}
        <div className="ourServices-col-right">
          {services.slice(3, 6).map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(OurServices);
