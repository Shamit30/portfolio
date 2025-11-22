import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Card className="p-10 bg-card border-2 border-border shadow-lg text-center">
            <div className="flex flex-col items-center gap-4">
              <Mail className="h-8 w-8 text-primary" />
              <a
                href="mailto:dholakiashamit@gmail.com"
                className="text-xl md:text-2xl font-semibold text-foreground hover:text-primary transition"
              >
                dholakiashamit@gmail.com
              </a>

            </div>
          </Card>

          <div className="mt-6 text-center text-muted-foreground">
            <p>Open to collaborations, contract work, and full‑time opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;