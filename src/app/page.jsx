import AboutUs from "@/components/AboutUs";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LogoSection from "@/components/LogoSection";
import Main from "@/components/Main";
import Qualities from "@/components/Qualities";
import Services from "@/components/Services";
import ServicesBar from "@/components/ServicesBar";
import TopBar from "@/components/TopBar";

export default function Home() {
  return (
    <>
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
    </>
  );
}
