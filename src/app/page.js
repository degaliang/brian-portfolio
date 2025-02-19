import Image from "next/image";

import PersonSection from "./components/PersonSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <PersonSection />
          {/* <AchievementsSection /> OPTIONAL */}
          <AboutSection />
          <ProjectSection />
          <EmailSection />
        </div>
        <Footer />
    </main>
  );
}
