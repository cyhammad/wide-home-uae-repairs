import Footer from "@/components/Footer";
import LgAboutUs from "@/components/Lg/LgAboutUs";
import LgExperience from "@/components/Lg/LgExperience";
import LgMain from "@/components/Lg/LgMain";
import LgQualities from "@/components/Lg/LgQualities";
import LgServicesBar from "@/components/Lg/LgServiceBar";
import LgServices from "@/components/Lg/LgServices";
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
