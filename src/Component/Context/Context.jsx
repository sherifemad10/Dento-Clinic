import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import doctorsData from "../Doctors/Doctors.json";
import jon from "../../assets/jon.jpg";
import Jane from "../../assets/Jane.jpg";
import Emma from "../../assets/Emma.jpg";
import Alexa from "../../assets/Alexa.jpg";
import { useCallback } from "react";
import { Bounce, toast } from "react-toastify";
const DataContext = createContext();

export function DataProvider({ children }) {
  const [viewDetails, setViewDetails] = useState(false);
  const [viewMenu, setViewMenu] = useState("");

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [phone, setPhone] = useState();
  const [yourDoctor, setYourDoctor] = useState();
  console.log(yourDoctor);
  const [day, setDay] = useState();

  const [doctors, setDoctors] = useState([]);
  const doctorimg = [jon, Jane, Emma, Alexa];

  useEffect(() => {
    setDoctors(doctorsData);
  }, []);

  const sendDateWhatapp = useCallback(() => {
    const phoneNumber = "+201210587417";
    const message = "Hello, I would like to book an appointment with you.";

    if (name && age && phone && yourDoctor && day) {
      const url = `https://wa.me/${phoneNumber}?text=Name: ${encodeURIComponent(
        name
      )}%0AAge: ${encodeURIComponent(age)}%0APhone: ${encodeURIComponent(
        phone
      )}%0ADoctor: ${encodeURIComponent(
        yourDoctor
      )}%0ADay: ${encodeURIComponent(day)}%0AMessage: ${encodeURIComponent(
        message
      )}`;

      window.open(url);
    } else {
      toast.error("Please fill in all the fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [name, age, phone, yourDoctor, day]);

  return (
    <DataContext.Provider
      value={{
        doctors,
        setDoctors,
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
        sendDateWhatapp,
        viewDetails,
        setViewDetails,
        viewMenu,
        setViewMenu,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext;
