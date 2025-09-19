import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                Beautiful, Modern & Responsive Website Design
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-muted-foreground md:text-xl">
                We create websites that engage and convert, tailored to your business needs. Let's build your online presence together.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="#contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="https://picsum.photos/seed/web-design-hero/600/400"
              alt="Modern website design on a laptop"
              data-ai-hint="website design laptop"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
