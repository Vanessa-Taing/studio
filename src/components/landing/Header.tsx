import Link from 'next/link';
import { Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="/" className="flex items-center justify-center" prefetch={false}>
        <Cloud className="h-6 w-6 text-primary" />
        <span className="ml-2 text-xl font-semibold font-headline">Stratosphere Cloud</span>
      </Link>
      <nav className="ml-auto">
        <Button asChild>
          <Link href="#consultation-form">Request a Consultation</Link>
        </Button>
      </nav>
    </header>
  );
}
