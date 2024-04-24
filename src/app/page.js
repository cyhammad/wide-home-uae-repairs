import LogoSection from "@/components/sections/LogoSection";
import TopBar from "@/components/sections/TopBar";

export default function Home() {
  return (
    <>
    <div className="bg-[url('/pic1.svg')] h-screen w-screen bg-cover bg-center bg-opacity-70"> 
    <TopBar/>
    <LogoSection/>
    </div>
   
    </>
  );
}
