import { Award, Code, Users } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Why Choose Me?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a passionate web designer and developer with a knack for creating beautiful, functional, and user-centric digital experiences. With a strong background in both design and code, I build websites that not only look great but also perform flawlessly.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <Award className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Years of Experience</h3>
                <p className="text-muted-foreground">
                  With over 5 years in the industry, I have a proven track record of delivering high-quality websites for clients across various sectors.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Code className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Modern Technologies</h3>
                <p className="text-muted-foreground">
                  I stay up-to-date with the latest web technologies, including React, Next.js, and headless CMS, to build fast and scalable websites.
                </p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <Users className="h-8 w-8 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-xl font-bold">Client-Focused Approach</h3>
                <p className="text-muted-foreground">
                  I work closely with my clients to understand their needs and deliver a product that aligns with their business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
