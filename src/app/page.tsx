import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Services from '@/components/landing/Services';
import Portfolio from '@/components/landing/Portfolio';
import Testimonials from '@/components/landing/Testimonials';
import ConsultationForm from '@/components/landing/ConsultationForm';
import Footer from '@/components/landing/Footer';
import About from '@/components/landing/About';
import { Card } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Ready to Start a Project?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Fill out the form below to request a free quote. Let's build something amazing together.
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
