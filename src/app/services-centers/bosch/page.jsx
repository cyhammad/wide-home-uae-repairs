import AboutUs from "@/components/AboutUs";
import BoschMain from "@/components/bosch/BoschMain";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";
import Qualities from "@/components/Qualities";
import Services from "@/components/Services";
import ServicesBar from "@/components/ServicesBar";
import TopBar from "@/components/TopBar";

const BoschPage = () => {
  return (
    <div>
      <TopBar />
      <LogoSection />
      <BoschMain />
      <ServicesBar />
      <AboutUs />
      <Experience />
      <Services />
      <Qualities />
      <Footer />
    </div>
  );
};

export default BoschPage;
