import { useState } from "react";
// import IdeaNavbar from "../components/IdeaNavbar";
import AuthCard from "../components/auth/AuthCard";
// import Footer from "../layout/Footer";

export default function AuthPage({ mode = "signin" }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      console.log(data);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogle = () => {
    console.log("google");
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* <IdeaNavbar /> */}

      <main className="flex flex-1 items-center justify-center bg-[#E2E8DF] px-4 py-10 md:py-14">
        <AuthCard
          key={mode}
          mode={mode}
          onSubmit={handleSubmit}
          onGoogleClick={handleGoogle}
          isLoading={isLoading}
        />
      </main>

      {/* <Footer bg="bg-white" /> */}
    </div>
  );
}