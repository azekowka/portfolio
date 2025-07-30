import { siteConfig } from "@/config/site.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Github | ${siteConfig.name} | ${siteConfig.creator.name}`,
  description: `My Github repositories and contributions | Hey, I'm ${siteConfig.creator.name} and this showcases my open source work and code repositories.`,
  keywords: [...siteConfig.keywords, "Github", "Open Source", "Repositories"],
  openGraph: {
    title: `Github | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: `My Github repositories and contributions | Hey, I'm ${siteConfig.creator.name} and this showcases my open source work and code repositories.`,
    type: "website",
    url: `${siteConfig.siteUrl}/github`,
    images: [
      {
        url: `${siteConfig.siteUrl}/designs-og.png`,
        width: 1800,
        height: 1000,
        alt: `Github | ${siteConfig.name} | ${siteConfig.creator.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: siteConfig.creator.url,
    title: `Github | ${siteConfig.name} | ${siteConfig.creator.name}`,
    description: `My Github repositories and contributions | Hey, I'm ${siteConfig.creator.name} and this showcases my open source work and code repositories.`,
    images: {
      url: `${siteConfig.siteUrl}/designs-og.png`,
      width: 1800,
      height: 1000,
      alt: `Github | ${siteConfig.name} | ${siteConfig.creator.name}`,
    },
  },
};

export default function Github() {

  return (
    <div className="mt-10 ">
          <div className="pb-12 ">
              <h1 className="text-3xl font-bold mb-6">Github</h1>
        </div>
    </div>
  );
}
