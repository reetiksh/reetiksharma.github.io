import React from "react";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/portfolio/ProjectsSection";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navigation />
      <div className="pt-8">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default Projects;