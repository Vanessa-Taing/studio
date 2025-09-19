import { Github, Twitter, Linkedin, Code } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background w-full border-t">
      <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold font-headline">Modern Web Designs</span>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm text-muted-foreground">
            <Link href="#about" className="hover:text-primary">About</Link>
            <Link href="#services" className="hover:text-primary">Services</Link>
            <Link href="#portfolio" className="hover:text-primary">Portfolio</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
        </div>
        <div className="flex gap-4">
          <Link href="#" prefetch={false} className="text-muted-foreground hover:text-primary" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" prefetch={false} className="text-muted-foreground hover:text-primary" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" prefetch={false} className="text-muted-foreground hover:text-primary" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
        
      </div>
       <div className="container mx-auto px-4 md:px-6 pb-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Modern Web Designs. All rights reserved.</p>
        </div>
    </footer>
  );
}
