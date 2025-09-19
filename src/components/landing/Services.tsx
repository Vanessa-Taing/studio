import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brush, Code, Rocket, ShoppingCart, TrendingUp } from "lucide-react";

const services = [
    {
        icon: <Brush className="w-8 h-8 text-primary" />,
        title: "Web Design",
        description: "Creating visually stunning and user-friendly designs that captivate your audience and reflect your brand's identity.",
    },
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "UI/UX",
        description: "Designing intuitive and engaging user interfaces that provide a seamless user experience across all devices.",
    },
    {
        icon: <Rocket className="w-8 h-8 text-primary" />,
        title: "WordPress",
        description: "Building custom WordPress themes and plugins to create flexible and powerful websites that are easy to manage.",
    },
    {
        icon: <ShoppingCart className="w-8 h-8 text-primary" />,
        title: "eCommerce",
        description: "Developing robust e-commerce solutions that drive sales and provide a smooth shopping experience for your customers.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-primary" />,
        title: "SEO-Ready Sites",
        description: "Building websites with search engine optimization in mind to help you rank higher and attract more organic traffic.",
    }
]

export default function Services() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            What I Do
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            I offer a range of services to help you create the perfect website for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {services.map((service) => (
            <Card key={service.title}>
                <CardHeader className="flex flex-row items-center gap-4">
                    {service.icon}
                    <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
