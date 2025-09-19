import Link from 'next/link';
import { Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Code className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-semibold font-headline">Modern Web Designs</span>
      </Link>
      <nav className="ml-auto items-center gap-4 hidden md:flex">
         <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
         <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
         <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</Link>
         <Button asChild>
          <Link href="#contact">Get a Free Quote</Link>
        </Button>
      </nav>
      {/* Mobile nav could be added here */}
    </header>
  );
}
