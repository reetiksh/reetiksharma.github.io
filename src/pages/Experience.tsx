import React from "react";
import Navigation from "@/components/Navigation";
import ExperienceSection from "@/components/portfolio/ExperienceSection";

const Experience = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navigation />
      <div className="pt-8">
        <ExperienceSection />
      </div>
    </div>
  );
};

export default Experience;