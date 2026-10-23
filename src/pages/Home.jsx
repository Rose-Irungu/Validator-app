import Navbar from "../layout/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import ProblemSolution from "../components/ProblemSolution";
import WhyValidator from "../components/WhyValidator";
import GetTheApp from "../components/GetTheApp";
import Pricing from "../components/Pricing";
import FAQs from "../components/FAQs";
import ClosingBanner from "../components/ClosingBanner";
import Footer from "../layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <ProblemSolution />
      <WhyValidator />
      <GetTheApp />
      <Pricing />
      <FAQs />
      <ClosingBanner />
      <Footer />
    </div>
  );
}