import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
  {
    id: "portfolio-1",
    title: "Corporate Website Redesign",
    category: "Web Design",
    tags: ["UI/UX", "Next.js", "Headless CMS"]
  },
  {
    id: "portfolio-2",
    title: "E-commerce Platform",
    category: "eCommerce",
    tags: ["Shopify", "React", "Optimization"]
  },
  {
    id: "portfolio-3",
    title: "SaaS Application UI",
    category: "UI/UX",
    tags: ["Figma", "Design System", "Prototyping"]
  },
  {
    id: "portfolio-4",
    title: "WordPress Blog & SEO",
    category: "WordPress",
    tags: ["SEO", "Content Strategy", "Performance"]
  },
];

const getImageUrl = (id: string) => {
  return PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';
}

const getImageHint = (id: string) => {
    return PlaceHolderImages.find(img => img.id === id)?.imageHint || '';
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            My Recent Work
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Here's a selection of projects I've recently worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {portfolioItems.map((item) => (
            <Link href="#" key={item.id} className="group">
                <Card className="overflow-hidden h-full">
                    <div className="relative overflow-hidden">
                        <Image
                            src={getImageUrl(item.id)}
                            alt={item.title}
                            data-ai-hint={getImageHint(item.id)}
                            width={500}
                            height={350}
                            className="object-cover w-full aspect-[5/3.5] transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <CardContent className="p-4">
                        <h3 className="text-lg font-semibold group-hover:text-primary">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {item.tags.map(tag => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
