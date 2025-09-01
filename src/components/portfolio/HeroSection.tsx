import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, MapPin, Mail, Phone, Linkedin, Code, Database, Cpu } from "lucide-react";
import { FloatingCodeSnippets, ParticleField, MatrixRain, CircuitLines, DataStream } from "@/components/ui/floating-elements";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full animate-float stagger-3"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-secondary/30 rounded-full animate-pulse-slow"></div>
        
        {/* Developer-focused animated elements */}
        <FloatingCodeSnippets />
        <ParticleField />
        <MatrixRain />
        <CircuitLines />
        <DataStream />
        
        {/* Tech icons floating */}
        <div className="absolute top-20 right-20 animate-float stagger-2">
          <Code className="w-8 h-8 text-primary/30 animate-spin-slow" />
        </div>
        <div className="absolute bottom-32 left-16 animate-float stagger-4">
          <Database className="w-6 h-6 text-accent/40 animate-pulse-slow" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float stagger-1">
          <Cpu className="w-10 h-10 text-secondary/50 animate-wiggle" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 animate-bounce-in hover-glow">
            <MapPin className="w-4 h-4 mr-2" />
            Ludhiana, Punjab, India
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient animate-slide-up stagger-1 hover-neon cursor-default">
            <span className="inline-block animate-bounce-in stagger-1">R</span>
            <span className="inline-block animate-bounce-in stagger-2">E</span>
            <span className="inline-block animate-bounce-in stagger-3">E</span>
            <span className="inline-block animate-bounce-in stagger-4">T</span>
            <span className="inline-block animate-bounce-in stagger-5">I</span>
            <span className="inline-block animate-bounce-in stagger-6">K</span>
            <span className="mx-4"></span>
            <span className="inline-block animate-bounce-in stagger-7">S</span>
            <span className="inline-block animate-bounce-in stagger-8">H</span>
            <span className="inline-block animate-bounce-in stagger-9">A</span>
            <span className="inline-block animate-bounce-in stagger-10">R</span>
            <span className="inline-block animate-bounce-in stagger-1">M</span>
            <span className="inline-block animate-bounce-in stagger-2">A</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-primary animate-fade-in stagger-2 hover-cyber">
            <span className="animate-code-type overflow-hidden whitespace-nowrap border-r-2 border-primary">
              Software Engineer | Java Full Stack Developer
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in stagger-3">
            Dynamic and result-driven Software Engineer with over <span className="text-primary font-semibold">3.5+ Years</span> of experience in developing robust Software Solutions with backend system development and full-stack web applications. Proven expertise in Java, API development, successfully delivering projects for large-scale systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in stagger-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>sharmars.reetik@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91-7814910935</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/reetik-sharma</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up stagger-5">
            <Button size="lg" className="hover-lift hover-glow group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-code opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <Download className="mr-2 w-4 h-4 animate-bounce-in group-hover:animate-spin-slow" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="hover-scale hover-cyber group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-neural opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 group-hover:animate-bounce transition-all duration-300" />
            </Button>
          </div>
          
          {/* Animated developer stats */}
          <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-in stagger-6">
            <div className="text-center hover-scale">
              <div className="text-3xl font-bold text-primary animate-neural">3.5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center hover-scale">
              <div className="text-3xl font-bold text-accent animate-neural stagger-1">12+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center hover-scale">
              <div className="text-3xl font-bold text-secondary animate-neural stagger-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;