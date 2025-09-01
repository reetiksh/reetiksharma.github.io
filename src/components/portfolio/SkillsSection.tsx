import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Settings, Brain, Shield, Cpu, Globe, Zap } from "lucide-react";
import { AnimatedTechStack, CodeTerminal, APIEndpoints, DatabaseSchema } from "@/components/ui/tech-showcase";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Backend Development",
      skills: ["Java", "Spring Boot", "REST APIs", ".NET Core", "Microservices"]
    },
    {
      icon: Code,
      title: "Frontend Development", 
      skills: ["Angular", "React", "Thymeleaf", "HTML", "CSS", "Bootstrap", "JavaScript", "jQuery"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Oracle"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Docker", "Maven", "Git", "Gitea"]
    },
    {
      icon: Settings,
      title: "Technologies & Tools",
      skills: ["JBoss", "Struts", "Hibernate", "JSP", "Python", "C++"]
    },
    {
      icon: Shield,
      title: "Security & Integration",
      skills: ["JWT & OAuth2", "API Integration", "Banking APIs", "GST APIs", "Razorpay", "DataTables"]
    }
  ];

  const operatingSystems = ["Linux", "Unix", "Windows"];
  const interpersonalSkills = ["Analytical Thinking", "Decision Making", "Problem Solving", "Logical Reasoning"];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Technical Skills</h2>
          <p className="text-xl text-muted-foreground animate-fade-in stagger-1">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        {/* Technical Skills Grid with Enhanced Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="hover-lift hover-glow animate-bounce-in relative overflow-hidden group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="absolute inset-0 bg-gradient-code opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-gradient"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover-cyber">
                    <category.icon className="w-6 h-6 text-primary animate-float" />
                  </div>
                  <h3 className="text-lg font-semibold hover-neon cursor-default">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="hover-scale hover-glow animate-scale-in transition-all duration-300"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interactive Developer Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Animated Tech Stack */}
          <Card className="hover-cyber animate-slide-in-left relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-neural opacity-5 animate-neural"></div>
            <CardContent className="p-6 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary animate-wiggle" />
                </div>
                <h3 className="text-lg font-semibold">Interactive Tech Stack</h3>
              </div>
              <AnimatedTechStack />
            </CardContent>
          </Card>

          {/* Live Terminal */}
          <Card className="hover-glow animate-slide-in-right">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-accent animate-spin-slow" />
                </div>
                <h3 className="text-lg font-semibold">Live Development Terminal</h3>
              </div>
              <CodeTerminal />
            </CardContent>
          </Card>
        </div>

        {/* API & Database Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* API Endpoints */}
          <Card className="hover-lift animate-slide-in-left stagger-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-secondary animate-pulse-slow" />
                </div>
                <h3 className="text-lg font-semibold">API Development Expertise</h3>
              </div>
              <APIEndpoints />
            </CardContent>
          </Card>

          {/* Database Schema */}
          <Card className="hover-glow animate-slide-in-right stagger-2">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-accent animate-float" />
                </div>
                <h3 className="text-lg font-semibold">Database Architecture</h3>
              </div>
              <DatabaseSchema />
            </CardContent>
          </Card>
        </div>

        {/* Additional Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="hover-lift animate-slide-in-left">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Operating Systems</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {operatingSystems.map((os, index) => (
                  <Badge key={os} variant="outline" className="hover-scale animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {os}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-lift animate-slide-in-right">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Interpersonal Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {interpersonalSkills.map((skill, index) => (
                  <Badge key={skill} variant="outline" className="hover-scale animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Highlights */}
        <Card className="mt-8 hover-glow animate-fade-in stagger-3">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Specialized Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">API Development</h4>
                <p className="text-sm text-muted-foreground">Banking, GST, Payment gateway integrations</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">System Architecture</h4>
                <p className="text-sm text-muted-foreground">Scheduler systems, ERP modules, automation</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Security Integration</h4>
                <p className="text-sm text-muted-foreground">JWT, OAuth2, fingerprint authentication</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;