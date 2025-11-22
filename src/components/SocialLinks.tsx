import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    icon: <Github className="h-6 w-6" />,
    href: "https://github.com/Shamit30",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    href: "https://linkedin.com/in/shamit30",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    href: "mailto:dholakiashamit@gmail.com",
    label: "Email",
  },
];

const SocialLinks = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors text-primary"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
