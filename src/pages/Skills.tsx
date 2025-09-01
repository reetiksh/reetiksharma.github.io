import React from "react";
import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/portfolio/SkillsSection";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navigation />
      <div className="pt-8">
        <SkillsSection />
      </div>
    </div>
  );
};

export default Skills;