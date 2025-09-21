import { siteConfig } from "@/config/site.config";
import { Metadata } from "next";
import Image from "next/image";

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
    <div className="mt-10 space-y-8">
      <div className="pb-12">
        <h1 className="text-3xl font-bold mb-6">Github</h1>
        <p className="text-muted-foreground mb-8">
          My open source contributions and coding activity on GitHub.
        </p>
        
        {/* GitHub Contribution Graph */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contribution Activity (1100)</h2>
          <div className="border rounded-lg p-4 bg-card">
            <Image
              src="https://ghchart.rshah.org/azekowka"
              alt="GitHub Contribution Chart"
              width={800}
              height={200}
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* GitHub Snake Animation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contribution Snake</h2>
          <div className="flex justify-center bg-card border rounded-lg p-4">
            <Image
              src="https://raw.githubusercontent.com/azekowka/azekowka/output/github-snake-dark.svg"
              alt="GitHub Snake Animation"
              width={1200}
              height={400}
              className="w-full max-w-4xl"
            />
          </div>
        </div>
        
        {/*
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="text-lg font-semibold mb-3">GitHub Stats</h3>
            <img
              src="https://github-readme-stats.vercel.app/api?username=azekowka&show_icons=true&theme=dark&hide_border=true"
              alt="GitHub Stats"
              className="w-full"
            />
          </div>
          
          <div className="border rounded-lg p-4 bg-card">
            <h3 className="text-lg font-semibold mb-3">Most Used Languages</h3>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=azekowka&layout=compact&theme=dark&hide_border=true"
              alt="Top Languages"
              className="w-full"
            />
          </div>
          */}
        </div>
      </div>
  );
}
