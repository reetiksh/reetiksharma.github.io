import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Download, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sharmars.reetik@gmail.com",
      href: "mailto:sharmars.reetik@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7814910935",
      href: "tel:+917814910935"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ludhiana, Punjab, India",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/reetik-sharma",
      href: "https://linkedin.com/in/reetik-sharma"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Let's Connect</h2>
          <p className="text-xl text-muted-foreground animate-fade-in stagger-1">
            Ready to collaborate on innovative software solutions? Let's discuss your next project.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="hover-lift animate-slide-in-left">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <div key={contact.label} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <contact.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{contact.label}</div>
                        {contact.href !== "#" ? (
                          <a 
                            href={contact.href}
                            className="font-medium hover:text-primary transition-colors"
                            target={contact.href.startsWith('http') ? '_blank' : undefined}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <div className="font-medium">{contact.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="hover-lift animate-slide-in-right">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                <p className="text-muted-foreground mb-6">
                  I'm passionate about creating robust software solutions that solve real-world problems. 
                  Whether you're looking for enterprise applications, API integrations, or full-stack development, 
                  I'd love to discuss how we can bring your vision to life.
                </p>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full hover-lift group animate-bounce-in stagger-1">
                    <MessageCircle className="mr-2 w-4 h-4 group-hover:animate-wiggle" />
                    Start a Conversation
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full hover-scale animate-bounce-in stagger-2">
                    <Download className="mr-2 w-4 h-4" />
                    Download Resume
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-border">
                  <div className="text-center animate-scale-in stagger-3">
                    <div className="text-2xl font-bold text-primary">3.5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center animate-scale-in stagger-4">
                    <div className="text-2xl font-bold text-primary">12+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Professional Summary */}
          <Card className="mt-8 hover-glow animate-fade-in stagger-3">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Why Choose Me?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="animate-scale-in stagger-1">
                  <h4 className="font-semibold text-primary mb-2">Enterprise Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Led development of large-scale enterprise solutions at EY and other leading organizations
                  </p>
                </div>
                <div className="animate-scale-in stagger-2">
                  <h4 className="font-semibold text-primary mb-2">Full-Stack Expertise</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive skills across Java, Spring Boot, React, Angular, and modern cloud technologies
                  </p>
                </div>
                <div className="animate-scale-in stagger-3">
                  <h4 className="font-semibold text-primary mb-2">Proven Results</h4>
                  <p className="text-sm text-muted-foreground">
                    Track record of 25% performance improvements and 30% efficiency gains in delivered projects
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;