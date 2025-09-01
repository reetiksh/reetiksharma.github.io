import React from "react";
import Navigation from "@/components/Navigation";
import EducationSection from "@/components/portfolio/EducationSection";

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navigation />
      <div className="pt-8">
        <EducationSection />
      </div>
    </div>
  );
};

export default Education;