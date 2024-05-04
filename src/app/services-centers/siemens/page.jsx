import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";
import TopBar from "@/components/TopBar";
import SiemensAboutUs from "@/components/Siemens/SiemensAboutUs";
import SiemensExperience from "@/components/Siemens/SiemensExperience";
import SiemensMain from "@/components/Siemens/SiemensMain";
import SiemensQualities from "@/components/Siemens/SiemensQualities";
import SiemensServicesBar from "@/components/Siemens/SiemensServiceBar";
import SiemensServices from "@/components/Siemens/SiemensServices";

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
