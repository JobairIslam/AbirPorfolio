import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  LinkedinIcon, 
  InstagramIcon, 
  TwitterIcon, 
  YoutubeIcon,
  FacebookIcon
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <LinkedinIcon className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/ibrahim-abir-527537269/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { icon: <InstagramIcon className="h-5 w-5" />, label: "Instagram", href: "https://www.instagram.com/ibrahimabir_?igsh=MTUxbm1leHExbTVvMQ%3D%3D" },
    // { icon: <TwitterIcon className="h-5 w-5" />, label: "Twitter", href: "#" },
    // { icon: <YoutubeIcon className="h-5 w-5" />, label: "YouTube", href: "#" },
    { icon: <FacebookIcon className="h-5 w-5" />, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61560913217868" },
  ];


  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold text-xl font-heading font-bold bg-gradient-to-br from-[#3b82f6] bg-clip-text text-transparent mb-4">Ibrahim A.</h3>
            <p className="text-muted-foreground mb-4">
              Social Media Manager & Content Strategy Specialist helping businesses
              grow their online presence through effective digital marketing strategies.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full"
                >
                  <Link 
                    href={link.href} 
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 text-center text-sm text-muted-foreground">
          © {currentYear} Ibrahim A. | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;