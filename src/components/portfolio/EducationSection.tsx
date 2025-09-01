import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Post-Graduation Diploma: Computer Application",
      institution: "Indira Gandhi National Open University",
      location: "Jaipur",
      period: "Jan 2022 - Jan 2023",
      type: "Post-Graduate Diploma"
    },
    {
      degree: "Bachelor of Engineering: Computer Science Engineering", 
      institution: "Chandigarh University",
      location: "Chandigarh",
      period: "Jan 2017 - Jan 2021",
      type: "Bachelor's Degree"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Education</h2>
          <p className="text-xl text-muted-foreground animate-fade-in stagger-1">
            Academic foundation in Computer Science and Application Development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={edu.degree} className="hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                          {edu.type}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <GraduationCap className="w-4 h-4" />
                            <span>{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Educational Highlights */}
        <Card className="mt-8 hover-glow animate-fade-in stagger-3">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Educational Focus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Computer Science Engineering</h4>
                <p className="text-sm text-muted-foreground">
                  Strong foundation in software engineering principles, algorithms, data structures, and system design
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Computer Application</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced studies in application development, database management, and modern programming paradigms
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EducationSection;