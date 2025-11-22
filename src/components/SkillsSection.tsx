import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, Cloud, Brain, Blocks } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
      color: "text-blue-400"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "FastAPI", "GraphQL", "REST", "Microservices"],
      color: "text-green-400"
    },
    {
      title: "ML / AI / MLOps",
      icon: Brain,
      skills: ["LangChain", "LangGraph", "RAG", "ChromaDB", "GenAI"],
      color: "text-pink-400"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "Redis", "Elasticsearch", "PostGIS"],
      color: "text-purple-400"
    },
    {
      title: "Cloud / DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "text-orange-400"
    },
    {
      title: "Frontend",
      icon: Blocks,
      skills: ["React", "Next.js"],
      color: "text-cyan-400"
    }    
  ];

  return (
    <section id="skills" className="py-24 relative section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          Technical <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className={`h-6 w-6 ${category.color}`} />
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;