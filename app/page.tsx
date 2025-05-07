import Career from "@/components/Career";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";
import Qualifications from "@/components/Qualifications";
import Shuffle from "@/components/shuffle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero/>
      <Qualifications/>
      <Main/>
      <Career/>
      <Shuffle/>
      <EmailSection/>
      <Footer/>
    </div>
  );
}
