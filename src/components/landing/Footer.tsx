import { Github, Twitter, Linkedin } from 'lucide-react';
import { Cloud } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary w-full">
      <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
            <Cloud className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold font-headline">Stratosphere Cloud</span>
        </div>
        <p className="text-sm text-muted-foreground text-center lg:text-left">
          © {new Date().getFullYear()} Stratosphere Cloud. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href="#" prefetch={false} className="text-muted-foreground hover:text-foreground" aria-label="Twitter">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" prefetch={false} className="text-muted-foreground hover:text-foreground" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" prefetch={false} className="text-muted-foreground hover:text-foreground" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
