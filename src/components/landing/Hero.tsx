import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Powering the Enterprise with Limitless Cloud Infrastructure
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Scalable, secure, and intelligent solutions designed to accelerate your business transformation at any scale. Experience unparalleled performance and reliability with Stratosphere Cloud.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="#consultation-form">Request a Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#products">Explore Products</Link>
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="https://picsum.photos/seed/hero-abstract/650/650"
              alt="Abstract cloud infrastructure"
              data-ai-hint="abstract technology"
              width={650}
              height={650}
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
