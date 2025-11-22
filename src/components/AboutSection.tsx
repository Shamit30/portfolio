import { Card } from "@/components/ui/card";
import { Code, Cloud, Database, Server } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            About <span className="text-primary">Me</span>
          </h2>

          <Card className="p-8 md:p-10 bg-card border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-xl">
            <div className="space-y-6">
              <div>
                <p className="text-lg md:text-xl leading-relaxed text-foreground font-medium">
                  I design and build full‑stack applications and production services — focusing on clear abstractions, observability, and scalable architectures. My work spans frontend interfaces, backend APIs, data systems, and cloud-native deployments.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Core Capabilities</h3>
                  <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-start gap-3">
                      <Server className="text-primary mt-1" />
                      <div>
                        <strong>Backend & APIs</strong>
                        <div className="text-sm">FastAPI, Node.js, Express, , async microservices</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Code className="text-primary mt-1" />
                      <div>
                        <strong>Frontend</strong>
                        <div className="text-sm">React, TypeScript, component-driven design, accessibility</div>
                      </div>
                    </li>
                    
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Systems & Cloud</h3>
                  <ul className="space-y-3 text-foreground/90">
                    <li className="flex items-start gap-3">
                      <Database className="text-primary mt-1" />
                      <div>
                        <strong>Data</strong>
                        <div className="text-sm">PostgreSQL/PostGIS, Redis, Elasticsearch — reliable, indexed, and sharded designs</div>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Cloud className="text-primary mt-1" />
                      <div>
                        <strong>Cloud & Ops</strong>
                        <div className="text-sm">AWS, Docker, Kubernetes, CI/CD, monitoring and autoscaling</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;