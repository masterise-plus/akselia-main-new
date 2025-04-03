import React from "react";
import { Button } from "./ui/button"; // Updated path
import { Box } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 py-2">
      <div className="max-w-7xl mx-auto bg-black/80 backdrop-blur-md rounded-xl px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Box className="h-6 w-6 text-white" />
            <span className="text-white font-bold text-xl">CURSOR</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#pricing">PRICING</NavLink>
            <NavLink href="#features">FEATURES</NavLink>
            <NavLink href="#enterprise">ENTERPRISE</NavLink>
            <NavLink href="#blog">BLOG</NavLink>
            <NavLink href="#forum">FORUM</NavLink>
            <NavLink href="#careers">CAREERS</NavLink>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-white hover:bg-white/10">
              SIGN IN
            </Button>
            <Button variant="outline" className="bg-white text-black hover:bg-white/90 border-white">
              <span className="mr-2">⬇</span> DOWNLOAD
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-white/80 hover:text-white text-sm font-medium transition-colors"
    >
      {children}
    </a>
  );
};

export default Navbar;
