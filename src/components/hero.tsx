import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler";
import { LanguagesIcon } from "@/components/icons/languages-icon";

import { Button } from "@/components/ui/button";
import { skillsConfig } from "@/config/skills.config";

export default function Hero() {
  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
          >
            <LanguagesIcon size={20} />
            <span className="sr-only">Languages</span>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">
        {portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      <p className="my-6 max-w-2xl text-foreground/80">
        Hey there 👋 I&apos;m Aziz Gabitov - I&apos;m a passionate{" "}
        <a
          href="#"
          className="text-foreground font-semibold hover:underline"
        >
          Software Engineer
        </a>{" "}specializing in full-stack development. I work with modern web technologies, mobile applications, and backend systems.
        I love creating{" "}
        <a
          href="#"
          className="text-foreground font-semibold hover:underline"
        >
          innovative solutions
        </a>{" "}and building user-friendly applications that solve real-world problems. I&apos;m open to{" "}
        <a
          href="#"
          className="text-foreground font-semibold hover:underline"
        >
          part-time, full-time, or project-based
        </a>{" "}opportunities - let&apos;s discuss it!
        <span className="sr-only">bio</span>
      </p>
      <Socials />
      <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        {skillsConfig.map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">
              {skill.category}:
            </span>{" "}
            {skill.technologies.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
}
