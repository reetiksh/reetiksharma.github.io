import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, MapPin, Trophy, GraduationCap } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Expert Training",
      organization: "CyberOps Infosec",
      location: "Chandigarh",
      period: "May 2020 - Sep 2020",
      type: "Security Training",
      icon: Award
    },
    {
      title: "Network Associate Program",
      organization: "Networkers Home Pvt Ltd",
      location: "Bangalore", 
      period: "May 2019 - Jul 2019",
      type: "Networking",
      icon: Award
    },
    {
      title: "Rendezvous",
      organization: "IIT Delhi",
      location: "Delhi",
      period: "Dec 2017",
      type: "Technical Event",
      icon: Trophy
    },
    {
      title: "Hash Code",
      organization: "Google",
      location: "Chandigarh",
      period: "May 2020",
      type: "Programming Competition",
      icon: Trophy
    },
    {
      title: "Hackathon",
      organization: "Chandigarh Police",
      location: "Chandigarh", 
      period: "Dec 2019",
      type: "Hackathon",
      icon: Trophy
    }
  ];

  const certificationTypes = {
    "Security Training": "primary",
    "Networking": "secondary", 
    "Technical Event": "outline",
    "Programming Competition": "destructive",
    "Hackathon": "default"
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Certifications & Achievements</h2>
          <p className="text-xl text-muted-foreground animate-fade-in stagger-1">
            Professional certifications and competitive programming achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={`${cert.title}-${cert.organization}`} className="hover-lift group animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:animate-wiggle">
                    <cert.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Badge 
                      variant={certificationTypes[cert.type] as any} 
                      className="mb-2 text-xs"
                    >
                      {cert.type}
                    </Badge>
                    <h3 className="font-bold mb-2">{cert.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Award className="w-3 h-3" />
                        <span>{cert.organization}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span>{cert.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{cert.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certification Categories */}
        <Card className="mt-12 hover-glow animate-fade-in stagger-3">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Certification Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="animate-scale-in stagger-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Security & Networking</h4>
                <p className="text-sm text-muted-foreground">
                  Cybersecurity operations and network infrastructure expertise
                </p>
              </div>
              <div className="animate-scale-in stagger-2">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Competitive Programming</h4>
                <p className="text-sm text-muted-foreground">
                  Google Hash Code and various hackathon participations
                </p>
              </div>
              <div className="animate-scale-in stagger-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground">
                  Regular participation in technical events and skill development programs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CertificationsSection;