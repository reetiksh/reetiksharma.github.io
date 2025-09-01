import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Ernst & Young (EY)",
      role: "Software Engineer",
      period: "Apr 2025 - Present",
      location: "",
      achievements: [
        "Led development of enterprise solutions for government and private clients, improving performance, automating processes, and introducing security features like fingerprint authentication and digital signing",
        "Enhanced system efficiency by optimizing algorithms, leveraging Docker, and transitioning to microservices, resulting in 25% performance improvement and 35% faster data processing",
        "Managed codebases and teams, delivering 12+ projects, reducing system downtime by 25%, and boosting deployment throughput by 40%",
        "Improved client management and user experience, achieving a 30% efficiency gain, 15% higher user satisfaction, and reducing costs by 20% through cloud infrastructure optimization"
      ]
    },
    {
      company: "Natural Support and Consultancy Services Pvt. Ltd.",
      role: "Software Engineer", 
      period: "Aug 2021 - Apr 2025",
      location: "Jaipur",
      achievements: [
        "Led development of enterprise solutions for government and private clients, improving performance, automating processes, and introducing security features like fingerprint authentication and digital signing",
        "Enhanced system efficiency by optimizing algorithms, leveraging Docker, and transitioning to microservices, resulting in 25% performance improvement and 35% faster data processing",
        "Managed codebases and teams, delivering 12+ projects, reducing system downtime by 25%, and boosting deployment throughput by 40%",
        "Improved client management and user experience, achieving a 30% efficiency gain, 15% higher user satisfaction, and reducing costs by 20% through cloud infrastructure optimization"
      ]
    },
    {
      company: "The Tech Musketeers",
      role: "Software Developer Intern",
      period: "Feb 2021 - Jul 2021", 
      location: "",
      achievements: [
        "Collaborated in Agile teams, contributing to all phases of product development, including design, testing, and documentation. Actively participated in daily stand-ups, sprint planning, and retrospectives",
        "Optimized back-end processes, reducing server response time by 30% and managing high-volume database transactions (1,000+ per second)",
        "Enhanced system security by implementing new protocols, reducing vulnerabilities by 25%",
        "Contributed to large-scale projects, working on 250,000 lines of code across 10 modules and ensuring software quality through automated tests and development iterations"
      ]
    }
  ];

  const metrics = [
    { label: "Projects Delivered", value: "12+", icon: TrendingUp },
    { label: "Performance Improvement", value: "25%", icon: TrendingUp },
    { label: "Cost Reduction", value: "20%", icon: TrendingUp },
    { label: "User Satisfaction", value: "15%↑", icon: TrendingUp }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Work Experience</h2>
          <p className="text-xl text-muted-foreground animate-fade-in stagger-1">
            Over 3.5 years of professional software development experience
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric, index) => (
            <Card key={metric.label} className="hover-scale animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-4 text-center">
                <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-primary">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={`${exp.company}-${exp.period}`} className="hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      {exp.location && <Badge variant="outline">{exp.location}</Badge>}
                    </div>
                    <h4 className="text-lg font-semibold text-primary mb-2">{exp.role}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;