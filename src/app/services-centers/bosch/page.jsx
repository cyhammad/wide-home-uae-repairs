import AboutUs from "@/components/sections/AboutUs";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import LogoSection from "@/components/sections/LogoSection";
import Main from "@/components/sections/Main";
import Qualities from "@/components/sections/Qualities";
import Services from "@/components/sections/Services";
import ServicesBar from "@/components/sections/ServicesBar";
import TopBar from "@/components/sections/TopBar";

const BoschPage = () => {
  return (
    <div>
      <TopBar />
      <LogoSection />
      <Main />
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
