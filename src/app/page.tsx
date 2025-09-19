import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import ProductShowcase from '@/components/landing/ProductShowcase';
import Testimonials from '@/components/landing/Testimonials';
import ConsultationForm from '@/components/landing/ConsultationForm';
import Footer from '@/components/landing/Footer';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <Testimonials />
        <section id="consultation-form" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Ready to Elevate Your Business?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Fill out the form below to request a consultation with one of our cloud experts. Let's discuss how Stratosphere Cloud can accelerate your journey to the cloud.
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-lg">
              <Card>
                <ConsultationForm />
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
