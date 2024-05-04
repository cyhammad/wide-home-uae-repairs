import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";
import TopBar from "@/components/TopBar";
import SiemensAboutUs from "@/components/siemens/SiemensAboutUs";
import SiemensExperience from "@/components/siemens/SiemensExperience";
import SiemensMain from "@/components/siemens/SiemensMain";
import SiemensQualities from "@/components/siemens/SiemensQualities";
import SiemensServicesBar from "@/components/siemens/SiemensServiceBar";
import SiemensServices from "@/components/siemens/SiemensServices";

const SiemensPage = () => {
  return (
    <div>
      <TopBar />
      <LogoSection />
      <SiemensMain />
      <SiemensServicesBar />
      <SiemensAboutUs />
      <SiemensExperience />
      <SiemensServices />
      <SiemensQualities />
      <Footer />
    </div>
  );
};

export default SiemensPage;
