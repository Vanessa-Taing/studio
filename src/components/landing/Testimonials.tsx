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
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const testimonials = [
  {
    quote: "The new website is fantastic! It's clean, modern, and perfectly captures our brand. The team was a pleasure to work with.",
    name: "Sarah Johnson",
    title: "CEO, Innovate Co.",
    avatarId: "avatar-sarah"
  },
  {
    quote: "I'm so impressed with the final result. The design is beautiful and the user experience is seamless. Highly recommended!",
    name: "Michael Chen",
    title: "Founder, Startup Hub",
    avatarId: "avatar-michael"
  },
  {
    quote: "Working with them was a game-changer. They understood our vision and delivered a website that exceeded our expectations.",
    name: "Jessica Rodriguez",
    title: "Marketing Director, Creative Solutions",
    avatarId: "avatar-jessica"
  },
];

const getAvatarUrl = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">What Clients Are Saying</h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Real stories from satisfied clients who have seen real results.
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
                        <blockquote className="text-lg leading-snug text-foreground/80">
                          “{testimonial.quote}”
                        </blockquote>
                        <div className="mt-6 flex items-center gap-4">
                            <Avatar>
                                <AvatarImage src={getAvatarUrl(testimonial.avatarId)} alt={testimonial.name} />
                                <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-semibold">{testimonial.name}</div>
                                <div className="text-sm text-muted-foreground">{testimonial.title}</div>
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
