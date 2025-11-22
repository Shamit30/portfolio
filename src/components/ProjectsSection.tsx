import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";

const ProjectsSection = () => {
  const projects = [
    {
      github: "https://github.com/pjpekala/Dearborn-Support-Chat",
      title: "IntelliAgent: Smart Multi-Source RAG AI",
      description:
        "IntelliAgent is an agentic AI assistant that autonomously navigates multiple data sources, retrieves relevant information, and synthesizes context-aware answers in real time. Leveraging the capabilities of Generative AI, it can reason, summarize, and provide actionable insights across structured and unstructured data.",
      problem:
        "Manual retrieval and cross-checking of dispersed knowledge is time-consuming, error-prone, and does not scale efficiently for dynamic queries or structured data updates.",
      built:
        "Developed a graph-based workflow using LangGraph to model decision-making as a directed state graph, enabling dynamic query routing, document relevance grading, iterative question refinement, and real-time structured data updates. Combined with Generative AI (Google Gemini) for natural language understanding and response generation, the agent can autonomously decide the optimal path to answer complex queries.",
      impact:
        "Delivers fast, accurate, and contextually grounded answers by bridging structured and unstructured knowledge. Reduces manual effort, increases efficiency, and demonstrates the potential of agentic AI to autonomously manage information workflows.",
      technologies: [
        "Python",
        "LangChain",
        "LangGraph",
        "Chainlit",
        "Chroma",
        "Google Generative AI (Gemini)",
        "Pandas",
        "OpenPyXL",
      ],
    },
    {
      github: "",
      title: "Real-Time Geospatial Asset Monitoring & Event Streaming Platform",
      description:
        "High-throughput cloud-native IoT analytics system for real-time telemetry, geofencing, and automated incident detection.",
      problem:
        "Organizations needed real-time tracking, anomaly detection, and geospatial intelligence for thousands of distributed IoT assets.",
      built:
        "Engineered a production-grade platform with RF-based geofencing, PostGIS polygon calculations, Kafka/Redis event pipelines, simulation engines, and Mapbox dashboards—all deployed as microservices on Kubernetes.",
      impact:
        "Supported 60+ TPS event ingestion with sub-second latency, improved operational monitoring for 1000+ assets, and reduced manual incident handling time by 25% through automated alerting.",
      technologies: [
        "Python",
        "Node.js",
        "React.js",
        "Kafka",
        "Redis Streams",
        "PostgreSQL/PostGIS",
        "Elasticsearch",
        "Kubernetes",
        "Docker",
        "Mapbox",
        "Microservices",
        "CI/CD",
      ],
    },
    {
      github: "https://github.com/Shamit30/cobas",
      title: "Battery State Classification: Multimodal AI",
      description:
        "A multimodal deep-learning system that fuses acoustic and visual cues to classify the State of Charge (SoC) of lithium-ion batteries.",
      problem:
        "Determining battery charge levels accurately using non-invasive methods was challenging due to noisy acoustic signals and subtle visual cues.",
      built:
        "Developed a MultiModal ResNet model that fuses audio (Mel-spectrogram) and image (RGB) features. Implemented band-pass filtering, spectral subtraction for noise reduction, and automated data extraction from video files.",
      impact:
        "Enabled accurate battery state classification (Full, Half, Empty) with segment-level and video-level predictions. Visualization of feature separation via t-SNE improved model interpretability.",
      technologies: [
        "Python",
        "PyTorch",
        "ResNet",
        "Audio Processing",
        "Image Processing",
        "Mel-Spectrogram",
        "t-SNE Visualization",
        "Deep Learning",
      ],
    },
    {
      github: "",
      title: "AI‑Driven Automotive Support & Resource Management Assistant",
      description:
        "Agentic RAG-based AI assistant for automotive workflows, integrating structured data, live documents, and vector search.",
      problem:
        "Automotive teams struggled with inefficient support operations, manual data lookup, and fragmented resource information.",
      built:
        "Developed a LangChain + LangGraph agent system orchestrating tool execution, retrieval, diagnostics, and reasoning. Built FastAPI microservices, integrated Chroma vector DB, and deployed on GCP Cloud Run with CI/CD automation.",
      impact:
        "Reduced query resolution time by 40%, improved resource allocation accuracy, and enabled natural-language access to complex internal data.",
      technologies: [
        "LangChain",
        "LangGraph",
        "FastAPI",
        "Python",
        "ChromaDB",
        "Docker",
        "GCP Cloud Run",
        "CI/CD",
        "Google Sheets API",
        "Vector Databases",
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 relative section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 md:p-12 bg-card border-2 border-border hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="mb-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">{project.description}</p>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-2xl text-gray-700 hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Problem</h4>
                  <p className="text-foreground/90">{project.problem}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">What I Built</h4>
                  <p className="text-foreground/90">{project.built}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-2">Impact</h4>
                  <p className="text-foreground/90">{project.impact}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary hover:bg-secondary/80 text-secondary-foreground text-sm py-1.5 px-3"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
