import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Users, Target, Award } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Backend Expertise",
      description: "Strong expertise in Java/Spring Boot development"
    },
    {
      icon: Users,
      title: "Full-Stack Development", 
      description: "Skilled in Spring Boot + Angular/React/Thymeleaf"
    },
    {
      icon: Target,
      title: "Database Optimization",
      description: "Experienced in MySQL, PostgreSQL design & optimization"
    },
    {
      icon: Award,
      title: "API Integration",
      description: "Hands-on with API design & integration expertise"
    }
  ];

  const industries = ["Banking", "Taxation (GST)", "ERP", "Automation"];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in stagger-1">
            Passionate about leveraging cutting-edge technology to solve real-world challenges and thrive in delivering innovative solutions for enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Professional Journey</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">Current Role</h4>
                    <p className="text-muted-foreground">Software Engineer at Ernst & Young (EY)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Previous Experience</h4>
                    <p className="text-muted-foreground">Natural Support and Consultancy Services Pvt. Ltd.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Industries</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {industries.map((industry, index) => (
                        <Badge key={industry} variant="secondary" className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={highlight.title} className="hover-lift group animate-bounce-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-6 text-center">
                    <highlight.icon className="w-10 h-10 mx-auto mb-4 text-primary group-hover:animate-wiggle" />
                    <h4 className="font-bold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;