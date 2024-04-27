import AboutUs from "@/components/sections/AboutUs";
import Experience from "@/components/sections/Experience";
import Footer from "@/components/sections/Footer";
import LogoSection from "@/components/sections/LogoSection";
import Qualities from "@/components/sections/Qualities";
import Services from "@/components/sections/Services";
import TopBar from "@/components/sections/TopBar";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-[url('/pic1.webp')] bg-cover bg-center">
        <TopBar />
        <LogoSection />
        <AboutUs />
        <Experience />
        <Services />
        <Qualities />
        <Footer />
      </div>
    </>
  );
}
