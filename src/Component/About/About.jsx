import { memo } from "react";
import "./About.css";
import whyus from "../../assets/about-banner.png";

// Subcomponent for the "Why Us" section with display name
const WhyUs = memo(() => (
  <div className="WhyUs">
    <h5>Why Us?</h5>
    <ul>
      <li>Best doctors</li>
      <li>Quality equipment</li>
      <li>Best prices</li>
      <li>24/7 support</li>
    </ul>
  </div>
));
WhyUs.displayName = "WhyUs";

// Subcomponent for the main content of About with display name
const AboutContent = memo(() => (
  <div className="about-contant" data-aos="fade-right">
    <h4>About Us</h4>
    <p>
      Dento is a dental center for treating all types of dental problems. We
      have the best doctors in treating dental problems with the latest
      equipment and at the cheapest prices, while paying attention to
      cleanliness and sterilization, as our first goal is the patient’s health.
    </p>
    <WhyUs />
  </div>
));
AboutContent.displayName = "AboutContent";

// Main About component with display name
const About = memo(() => {
  return (
    <section className="About" id="about">
      <div className="about-wrapper">
        <AboutContent />

        <figure data-aos="fade-left">
          <img src={whyus} alt="why-us" loading="lazy" />
        </figure>
      </div>
    </section>
  );
});
About.displayName = "About";

export default About;
