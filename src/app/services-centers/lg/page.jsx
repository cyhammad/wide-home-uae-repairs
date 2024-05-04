import Footer from "@/components/Footer";
import LgAboutUs from "@/components/lg/LgAboutUs";
import LgExperience from "@/components/lg/LgExperience";
import LgMain from "@/components/lg/LgMain";
import LgQualities from "@/components/lg/LgQualities";
import LgServicesBar from "@/components/lg/LgServiceBar";
import LgServices from "@/components/lg/LgServices";
import LogoSection from "@/components/LogoSection";
import TopBar from "@/components/TopBar";

const LgPage = () => {
  return (
    <div>
      <TopBar />
      <LogoSection />
      <LgMain />
      <LgServicesBar />
      <LgAboutUs />
      <LgExperience />
      <LgServices />
      <LgQualities />
      <Footer />
    </div>
  );
};

export default LgPage;
