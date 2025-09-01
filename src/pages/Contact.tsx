import React from "react";
import Navigation from "@/components/Navigation";
import ContactSection from "@/components/portfolio/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      <Navigation />
      <div className="pt-8">
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;