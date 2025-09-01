import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, Building2 } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Expert Training",
      organization: "CyberOps Infosec",
      location: "Chandigarh",
      date: "May 2020 - Sep 2020",
      type: "Professional Training",
      description: "Comprehensive cybersecurity training covering network security, threat analysis, and incident response."
    },
    {
      title: "Network Associate Program",
      organization: "Networkers Home Pvt Ltd",
      location: "Bangalore", 
      date: "May 2019 - Jul 2019",
      type: "Certification",
      description: "Advanced networking concepts, protocols, and infrastructure management."
    },
    {
      title: "Rendezvous",
      organization: "IIT Delhi",
      location: "Delhi",
      date: "Dec 2017",
      type: "Conference",
      description: "Annual technical and cultural festival participation at IIT Delhi."
    },
    {
      title: "Hash Code",
      organization: "Google",
      location: "Chandigarh",
      date: "May 2020",
      type: "Competition",
      description: "Google's team programming competition focused on engineering challenges."
    },
    {
      title: "Hackathon",
      organization: "Chandigarh Police",
      location: "Chandigarh", 
      date: "Dec 2019",
      type: "Competition",
      description: "Innovative solutions development for law enforcement challenges."
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Professional Training":
        return "bg-primary/10 text-primary";
      case "Certification":
        return "bg-secondary/10 text-secondary-foreground";
      case "Conference":
        return "bg-accent/10 text-accent-foreground";
      case "Competition":
        return "bg-muted/10 text-muted-foreground";
      default:
        return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Certificates & Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications, training programs, and competitive achievements that showcase my commitment to continuous learning and excellence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Award className="h-6 w-6 text-primary" />
                  <Badge variant="secondary" className={getTypeColor(cert.type)}>
                    {cert.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl leading-tight">{cert.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm">
                  <Building2 className="h-4 w-4" />
                  {cert.organization}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    📍 {cert.location}
                  </div>
                  <p className="text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-lg p-8 border">
            <h2 className="text-2xl font-semibold mb-4">Continuous Learning</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I believe in the importance of staying updated with the latest technologies and industry trends. 
              These certifications and achievements represent my dedication to professional growth and excellence 
              in software development and technology.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Certificates;