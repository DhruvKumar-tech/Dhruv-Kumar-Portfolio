import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Dashboard from "@/sections/Dashboard";
import Chatbot from "@/sections/Chatbot";
import Github from "@/sections/Github";
import Kaggle from "@/sections/Kaggle";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Dashboard />
      <Github />
      <Kaggle />
      <Chatbot />
      <Contact />
    </main>
  );
}