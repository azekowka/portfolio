import { siteConfig } from "@/config/site.config";
import { Metadata } from "next";

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

export default function TIL() {
  return (
    <div className="mt-10 max-w-2xl">
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Competitions & Hackathons</h2>
        <p className="text-muted-foreground">
          This section will showcase my participation in competitive programming contests and hackathons.
        </p>
      </div>
    </div>
  );
}
