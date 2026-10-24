import { useNavigate } from "react-router-dom";
import IdeaNavbar from "../components/IdeaNavbar";
import IdeaForm from "../components/IdeaForm";
import ReportAnalysis from "../components/ReportAnalysis";
import PrivacyNote from "../components/PrivacyNote";
import Footer from "../layout/Footer";
import useValidateIdea from "../hooks/useValidateIdea";

export default function IdeaPage() {
  const navigate = useNavigate();
  const { run, isLoading, error } = useValidateIdea();

  const handleSubmit = async (data) => {
    const result = await run(data);
    if (result) {
      navigate("/results", { state: { input: data, result } });
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <IdeaNavbar />

      <main className="flex-1 bg-[#F6F6ED] px-4 py-10 md:px-6 md:py-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
            <div className="lg:pt-10">
              <IdeaForm onSubmit={handleSubmit} isLoading={isLoading} error={error} />
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