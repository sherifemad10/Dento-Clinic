import { memo, useMemo } from "react";
import "./Services.css";
import Whitening from "../../assets/img.jpg";
import Nerve from "../../assets/nerve filling.jpg";
import Extraction from "../../assets/Tooth Extraction.jpg";

// Separate and memoized ServiceCard component
// eslint-disable-next-line react/prop-types
const ServiceCard = memo(({ img, title }) => (
  <div className="card">
    <figure>
      <img src={img} alt={`${title} service`} loading="lazy" />
      <figcaption>
        <h3>{title}</h3>
      </figcaption>
    </figure>
  </div>
));

// Set display name for easier debugging in React DevTools
ServiceCard.displayName = "ServiceCard";

const Services = () => {
  // Memoize services array
  const services = useMemo(
    () => [
      {
        id: 1,
        img: Whitening,
        title: "Alignment Teeth",
      },
      {
        id: 2,
        img: Nerve,
        title: "Root Canal",
      },
      {
        id: 3,
        img: Extraction,
        title: "Live Advisory",
      },
    ],
    []
  );

  return (
    <section className="Services" data-aos="fade-up">
      <h2>Explore the best services booked in the clinic</h2>
      <div className="Services-card">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            img={service.img}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Services);
