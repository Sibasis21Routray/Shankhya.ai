import { useLocation } from "react-router-dom";
import Development from "../components/home/Development";
import Hero from "../components/home/Hero";
import Mission from "../components/home/Mission";
import Product from "../components/home/Product";
import Service from "../components/home/Service";
import Stat from "../components/home/Stat";
import { useEffect } from "react";

function Home() {
 const location = useLocation();


  useEffect(() => {
    if (location.hash.startsWith("#service=")) {
      

      // Scroll to services section
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);
    }
  }, [location]);

  
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Product />
      <Mission />
      <Development />
      <Stat />
      <Service
        initialTab={
          location.hash.startsWith("#service=")
            ? location.hash.split("=")[1]
            : "ai"
        }
      />
    </div>
  );
}

export default Home;
