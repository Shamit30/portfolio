import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePic from "@/assets/profile-pic.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Projects", id: "projects" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },  
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-background/70 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleScroll("hero")}
        >
          <img
            src={profilePic}
            alt="Shamit Dholakiya"
            className="h-10 w-10 rounded-full object-cover border-2 border-primary"
          />
        </div>

        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex">
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2"
            onClick={() =>
              window.open("https://drive.google.com/file/d/1CTwLzASmFqsZQ-ewAJ3jWBoRKRg2PvaR/view?usp=sharing", "_blank")
            }
          >
            <Download className="h-4 w-4" />
            Resume
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/90 backdrop-blur-md shadow-lg py-4 space-y-4 flex flex-col items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-foreground hover:text-primary transition-colors text-lg font-medium"
            >
              {item.label}
            </button>
          ))}
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold flex items-center gap-2 mt-2"
            onClick={() =>
              window.open("https://your-resume-link.com", "_blank")
            }
          >
            <Download className="h-4 w-4" />
            Resume
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
