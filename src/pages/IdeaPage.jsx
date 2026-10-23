import { useState } from "react";
import IdeaNavbar from "../components/IdeaNavbar";
import IdeaForm from "../components/IdeaForm";
import ReportAnalysis from "../components/ReportAnalysis";
import PrivacyNote from "../components/PrivacyNote";
import Footer from "../layout/Footer";

export default function IdeaPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <IdeaNavbar />

      <main className="flex-1 bg-[#F6F6ED] px-4 py-10 md:px-6 md:py-12">
        <div className="mx-auto max-w-350">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
            <div className="lg:pt-10">
              <IdeaForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
            <ReportAnalysis />
          </div>

          <div className="mt-10">
            <PrivacyNote />
          </div>
        </div>
      </main>

      <Footer bg="bg-white" />
    </div>
  );
}