import { generateProductShowcase } from '@/ai/flows/generate-product-showcase';
import MarkdownRenderer from './MarkdownRenderer';
import { Skeleton } from '../ui/skeleton';
import { Suspense } from 'react';

async function ShowcaseContent() {
  try {
    const { showcaseContent } = await generateProductShowcase({
      userSegment: 'enterprise',
    });
    return <MarkdownRenderer content={showcaseContent} />;
  } catch (error) {
    console.error("Failed to generate product showcase:", error);
    return <p className="text-destructive">Could not load product information at this time. Please try again later.</p>;
  }
}

function ShowcaseSkeleton() {
    return (
        <div className="space-y-8">
            <Skeleton className="h-10 w-1/2" />
            <div className="space-y-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
                <Skeleton className="h-6 w-3/4" />
            </div>
            <Skeleton className="h-8 w-1/3" />
             <div className="space-y-4 pl-4">
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-5/6" />
            </div>
        </div>
    )
}

export default function ProductShowcase() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <Suspense fallback={<ShowcaseSkeleton />}>
          <ShowcaseContent />
        </Suspense>
      </div>
    </section>
  );
}
