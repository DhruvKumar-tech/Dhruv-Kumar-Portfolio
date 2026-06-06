"use client";

import { useEffect } from "react";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import Dashboard from "@/sections/Dashboard";
import Chatbot from "@/sections/Chatbot";
import Feedback from "@/sections/Feedback";
import Kaggle from "@/sections/Kaggle";
import Contact from "@/sections/Contact";
import LiveApps from "@/sections/LiveApps";
import FloatingDock from "@/components/FloatingDock";
import Timeline from "@/sections/Timeline";
import GithubStats from "@/sections/GithubStats";
import AnimatedBackground from "@/components/AnimatedBackground";


export default function Home() {
  useEffect(() => {
    fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event: "Visitor",
      }),
    });
  }, []);
  return (
    <main className="relative min-h-screen text-white">
      <AnimatedBackground />

      <Navbar />
      <Hero />
      <Projects />
      <LiveApps />
      <Timeline />
      <GithubStats />
      <Dashboard />
      
      <Kaggle />
      <Chatbot />
      <Feedback />
      <Contact />
      <FloatingDock />
    </main>
  );
}
