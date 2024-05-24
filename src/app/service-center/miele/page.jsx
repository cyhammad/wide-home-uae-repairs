import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";
import MieleAboutUs from "@/components/miele/MieleAboutUs";
import MieleExperience from "@/components/miele/MieleExperience";
import MieleMain from "@/components/miele/MieleMain";
import MieleQualities from "@/components/miele/MieleQualities";
import MieleServicesBar from "@/components/miele/MieleServiceBar";
import MieleServices from "@/components/miele/MieleServices";
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
