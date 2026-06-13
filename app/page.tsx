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
    let visitorId = localStorage.getItem("visitorId");

    if (!visitorId) {
      visitorId =
        "VST-" +
        crypto.randomUUID()
          .split("-")[0]
          .toUpperCase();

      localStorage.setItem(
        "visitorId",
        visitorId
      );
    }

  // Ignore localhost
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    return;
  }

  // Ignore owner
  if (document.cookie.includes("owner=true")) {
    return;
  }


  if (!visitorId) {
    visitorId =
      "VST-" +
      crypto.randomUUID()
        .split("-")[0]
        .toUpperCase();

    localStorage.setItem("visitorId", visitorId);
  }

  const lastVisit = localStorage.getItem("visitorTracked");

  if (lastVisit) {
    const daysPassed =
      (Date.now() - Number(lastVisit)) /
      (1000 * 60 * 60 * 24);

    if (daysPassed < 30) {
      return;
    }
  }

  fetch("/api/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      event: "Visitor",
      visitorId,
    }),
  });

  localStorage.setItem(
    "visitorTracked",
    Date.now().toString()
  );

}, []);  return (
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
