import AboutUs from "@/components/sections/AboutUs";
import Experience from "@/components/sections/Experience";
import LogoSection from "@/components/sections/LogoSection";
import Services from "@/components/sections/Services";
import TopBar from "@/components/sections/TopBar";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-[url('/pic1.svg')] bg-cover bg-center">
        <TopBar />
        <LogoSection />
        <AboutUs />
        <Experience />
        <Services />
      </div>
    </>
  );
}
