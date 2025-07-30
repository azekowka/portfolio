import { siteConfig } from "@/config/site.config";
import { Metadata } from "next";
import { HackathonCard } from "@/components/hackathon-card";
import { hackathonsConfig } from "@/config/hackathons.config";

export const metadata: Metadata = {
  title: `Competitions & Hackathons | ${siteConfig.name} | ${siteConfig.creator.name}`,
  description: `My participation in competitions and hackathons | Hey, I'm ${siteConfig.creator.name} and this showcases my competitive programming and hackathon experiences.`,
  keywords: [...siteConfig.keywords, "Competitions", "Hackathons"],
  openGraph: {
    title: `Competitions & Hackathons | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: `My participation in competitions and hackathons | Hey, I'm ${siteConfig.creator.name} and this showcases my competitive programming and hackathon experiences.`,
    type: "website",
    url: `${siteConfig.siteUrl}/hackathons`,
    images: [
      {
        url: `${siteConfig.siteUrl}/til-og.png`,
        width: 1800,
        height: 1000,
        alt: `Competitions & Hackathons | ${siteConfig.name} | ${siteConfig.creator.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.creator.url,
    title: `Competitions & Hackathons | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: `My participation in competitions and hackathons | Hey, I'm ${siteConfig.creator.name} and this showcases my competitive programming and hackathon experiences.`,
    images: {
      url: `${siteConfig.siteUrl}/til-og.png`,
      width: 1800,
      height: 1000,
      alt: `Competitions & Hackathons | ${siteConfig.name} | ${siteConfig.creator.name}`,
    },
  },
};

export default function Hackathons() {
  return (
    <section id="hackathons">
      <div className="space-y-7 w-full py-7">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              Competitions & Hackathons
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Build. Ship. Earn.
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              24-hour sprints full of team work and working under pressure
            </p>
          </div>
        </div>
        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
          {hackathonsConfig.map((hackathon, id) => (
            <HackathonCard
              key={hackathon.title + hackathon.dates}
              title={hackathon.title}
              description={hackathon.description}
              dates={hackathon.dates}
              location={hackathon.location}
              image={hackathon.image}
              links={hackathon.links}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
