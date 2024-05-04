import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";
import SamsungAboutUs from "@/components/Samsung/SamsungAboutUs";
import SamsungExperience from "@/components/Samsung/SamsungExperience";
import SamsungMain from "@/components/Samsung/SamsungMain";
import SamsungQualities from "@/components/Samsung/SamsungQualities";
import SamsungServicesBar from "@/components/Samsung/SamsungServiceBar";
import SamsungServices from "@/components/Samsung/SamsungServices";
import TopBar from "@/components/TopBar";

const SamsungPage = () => {
  return (
    <div>
      <TopBar />
      <LogoSection />
      <SamsungMain />
      <SamsungServicesBar />
      <SamsungAboutUs />
      <SamsungExperience />
      <SamsungServices />
      <SamsungQualities />
      <Footer />
    </div>
  );
};

export default SamsungPage;
