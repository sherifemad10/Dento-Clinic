import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Loading from "./Component/Loading/Loading";
import { useState, useEffect, Suspense, lazy } from "react";

// Lazy loading components
const Home = lazy(() => import("./Component/Pages/Home/Home"));
const DoctorName = lazy(() => import("./Component/Doctors/DoctorName"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor/:id" element={<DoctorName />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
