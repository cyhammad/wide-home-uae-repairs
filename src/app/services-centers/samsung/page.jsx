import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";
import SamsungAboutUs from "@/components/samsung/SamsungAboutUs";
import SamsungExperience from "@/components/samsung/SamsungExperience";
import SamsungMain from "@/components/samsung/SamsungMain";
import SamsungQualities from "@/components/samsung/SamsungQualities";
import SamsungServicesBar from "@/components/samsung/SamsungServiceBar";
import SamsungServices from "@/components/samsung/SamsungServices";
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
