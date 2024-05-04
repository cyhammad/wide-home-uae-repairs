import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";
import MieleAboutUs from "@/components/Miele/MieleAboutUs";
import MieleExperience from "@/components/Miele/MieleExperience";
import MieleMain from "@/components/Miele/MieleMain";
import MieleQualities from "@/components/Miele/MieleQualities";
import MieleServicesBar from "@/components/Miele/MieleServiceBar";
import MieleServices from "@/components/Miele/MieleServices";
import TopBar from "@/components/TopBar";

const MielePage = () => {
  return (
    <div>
      <TopBar />
      <LogoSection />
      <MieleMain />
      <MieleServicesBar />
      <MieleAboutUs />
      <MieleExperience />
      <MieleServices />
      <MieleQualities />
      <Footer />
    </div>
  );
};

export default MielePage;
