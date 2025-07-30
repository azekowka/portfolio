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
              <h1 className="text-3xl font-bold mb-6">Github Repositories</h1>
              <p className="text-lg mb-8">My open source work and code repositories.</p>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">Repository 1</h3>
                  <p className="text-gray-600">Description of repository</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="text-xl font-semibold mb-2">Repository 2</h3>
                  <p className="text-gray-600">Description of repository</p>
                </div>
              </div>
        </div>
    </div>
  );
}
