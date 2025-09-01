import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, ExternalLink, Code } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "eMaps - ERP Application",
      company: "Natural Support and Consultancy Services Pvt. Ltd., Jaipur",
      period: "Aug 2021 - Aug 2024",
      description: "Comprehensive ERP application revolutionizing accounting and inventory management processes for businesses.",
      achievements: [
        "Automated key financial workflows, including accounts payable, receivable, general ledger, and financial reporting, ensuring real-time accuracy and compliance",
        "Optimized inventory control through advanced tracking systems, reducing stock discrepancies and improving overall supply chain efficiency",
        "Integrated the ERP system with multiple business functions, enabling seamless data flow between accounting, inventory, sales, and procurement for enhanced decision-making",
        "Led a cross-functional team to customize the ERP solution, aligning it with specific client requirements and industry best practices",
        "Drove a 30% improvement in operational efficiency by automating repetitive tasks, minimizing manual errors, and enhancing data integrity across the organization"
      ],
      technologies: ["Java", "Spring Boot", "MySQL", "REST APIs", "Microservices"]
    },
    {
      title: "CobaSys - Budget & Fund Management ERP",
      company: "Natural Support and Consultancy Services Pvt. Ltd., Jaipur",
      period: "Aug 2021 - Aug 2024",
      description: "Robust ERP application tailored for Budget and Fund Management, empowering organizations to streamline their financial planning and allocation processes.",
      achievements: [
        "Designed and optimized key modules to provide real-time insights into budget performance, fund allocation, and expenditure tracking, significantly enhancing financial transparency and accountability",
        "Automated critical budgeting workflows, reducing manual effort by 50% and improving overall operational efficiency for large-scale financial operations",
        "Integrated advanced reporting tools that delivered comprehensive budget analytics, enabling leadership to make data-driven decisions and forecast financial performance with greater accuracy",
        "Implemented security protocols and user access controls to safeguard sensitive financial data, ensuring compliance with industry standards and reducing the risk of unauthorized access"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Docker"]
    },
    {
      title: "BancMate - Financial Infrastructure",
      company: "Natural Support and Consultancy Services Pvt. Ltd., Jaipur", 
      period: "Aug 2021 - Aug 2024",
      description: "Cutting-edge technology infrastructure delivered to financial institutions, revolutionizing their capabilities to offer advanced and streamlined financial services.",
      achievements: [
        "Empowered financial institutions with scalable and secure solutions, significantly enhancing their ability to provide seamless and efficient banking facilities to customers",
        "Played a pivotal role in transforming traditional financial operations, enabling institutions to leverage modern technology for improved customer experience and operational excellence"
      ],
      technologies: ["Java", "Spring Boot", "Microservices", "AWS", "Security Integration"]
    },
    {
      title: "CBS - Core Banking System",
      company: "Natural Support and Consultancy Services Pvt. Ltd., Jaipur",
      period: "Aug 2021 - Aug 2024", 
      description: "Comprehensive banking services automation including CASA, deposits, advances, trade finance, and remittances.",
      achievements: [
        "Automated a wide range of banking services, including CASA, deposits, advances, trade finance, and remittances, streamlining operations and enhancing service delivery",
        "Deployed the application at central locations, allowing all offices of the financial institution to access the infrastructure and deliver consistent services to customers across multiple branches"
      ],
      technologies: ["Java", "Spring Boot", "Oracle", "Banking APIs", "Distributed Systems"]
    },
    {
      title: "CSS-SNA - Government Scheme Management",
      company: "Natural Support and Consultancy Services Pvt. Ltd., Jaipur",
      period: "Aug 2021 - Aug 2024",
      description: "Centralized sponsored scheme as a single nodal agency under PFMS for direct benefit transfer (DBT) to vendors and beneficiaries of various government schemes.",
      achievements: [
        "Implemented a centralized sponsored scheme as a single nodal agency under PFMS for direct benefit transfer (DBT) to vendors and beneficiaries of various government schemes",
        "Interfaced and interacted with PFMS, bank core banking systems, and other internal bank applications to ensure seamless integration and smooth operation of the scheme"
      ],
      technologies: ["Java", "Spring Boot", "PFMS Integration", "Government APIs", "MySQL"]
    }
  ];

  const additionalProjects = [
    {
      title: "GST Audit & Tender Management Systems",
      description: "Role-based workflows, Go/No-Go decisions, department response tracking, GSTR1 pagination & dashboards"
    },
    {
      title: "API Scheduler",
      description: "Unified execution of APIs (Java, Node, Python) with tracking and error handling"
    },
    {
      title: "Stamp Sale Dashboard", 
      description: "Metrics API, POST/GET APIs for sales, net commission, stock availability, graphs"
    },
    {
      title: "Urban Company-like Platform",
      description: "End-to-end service marketplace (Spring Boot + Thymeleaf)"
    },
    {
      title: "CNC/Special Purpose Machine Design",
      description: "Backend software and UI integration for piston/flange machining (Automation)"
    },
    {
      title: "Packaging Machinery Website",
      description: "Animated, interactive UI with product tiles, brochures, client portfolios"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">Projects</h2>
          <p className="text-xl text-muted-foreground animate-fade-in stagger-1">
            Major enterprise solutions and innovative applications delivered
          </p>
        </div>

        {/* Major Projects */}
        <div className="space-y-8 mb-16">
          {projects.map((project, index) => (
            <Card key={project.title} className="hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <Code className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                          <Building2 className="w-4 h-4" />
                          <span className="text-sm">{project.company}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="hover-scale animate-scale-in"
                        style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center animate-fade-in">Additional Key Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <Card key={project.title} className="hover-lift animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3 text-primary">{project.title}</h4>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;