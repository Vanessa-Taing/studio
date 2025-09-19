"use client";

import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    quote: "Stratosphere Cloud has been a game-changer for our infrastructure. The scalability and performance are unmatched, allowing us to serve our customers better than ever before.",
    name: "Jane Doe",
    title: "CTO, QuantumLeap Inc.",
    logoId: "quantum-logo"
  },
  {
    quote: "The migration process was seamless, and the support team was incredibly responsive. Stratosphere's robust security features give us peace of mind. Highly recommended for any enterprise.",
    name: "John Smith",
    title: "CEO, Stellar Solutions",
    logoId: "stellar-logo"
  },
  {
    quote: "We've seen a 40% reduction in our operational costs since moving to Stratosphere Cloud. Their predictable pricing and powerful analytics have been instrumental in our growth.",
    name: "Emily White",
    title: "Head of Engineering, Nexus Corp",
    logoId: "nexus-logo"
  },
];

const getLogoUrl = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
}
const getLogoHint = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageHint || '';
}

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            See how leading enterprise companies are innovating with Stratosphere Cloud.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-5xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="flex flex-col items-start justify-between flex-1 p-6">
                        <blockquote className="text-lg font-semibold leading-snug">
                          “{testimonial.quote}”
                        </blockquote>
                        <div className="mt-6 w-full">
                            <div className="font-semibold">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                            <div className="mt-4 border-t pt-4">
                                <Image 
                                    src={getLogoUrl(testimonial.logoId)} 
                                    alt={`${testimonial.title} Logo`}
                                    data-ai-hint={getLogoHint(testimonial.logoId)}
                                    width={140}
                                    height={60}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}
