import "./Company.css";
import Allianz from "../../assets/allianz.png";
import Aarp from "../../assets/aarp.png";
import Humana from "../../assets/humana.png";
import Emblemi from "../../assets/emblemi.png";

const Company = () => {
  return (
    <section className="Company">
      <figure>
        <img src={Allianz} alt="Allianz" title="Allianz" loading="lazy" />
      </figure>

      <figure>
        <img src={Aarp} alt="AARP" title="AARP" loading="lazy" />
      </figure>

      <figure>
        <img src={Humana} alt="Humana" title="Humana" loading="lazy" />
      </figure>

      <figure>
        <img src={Emblemi} alt="Emblemi" title="Emblemi" loading="lazy" />
      </figure>
    </section>
  );
};

export default Company;
