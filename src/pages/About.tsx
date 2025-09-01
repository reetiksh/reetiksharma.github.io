import React from "react";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/portfolio/AboutSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navigation />
      <div className="pt-8">
        <AboutSection />
      </div>
    </div>
  );
};

export default About;