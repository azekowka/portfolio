import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Mail, Linkedin, Github } from "lucide-react"

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={DATA.name}
              />
              <BlurFadeText className="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY} text={DATA.description} />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>

          {/* Contact information section */}
          <BlurFade delay={BLUR_FADE_DELAY + 0.2} className="pt-0">
            <div className="flex flex-wrap gap-4">
              <Link
                href={`mailto:${DATA.email}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} />
                <span>{DATA.email}</span>
              </Link>

              <Link
                href={`https://linkedin.com/in/${DATA.linkedin}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} />
                <span>{DATA.linkedin}</span>
              </Link>

              <Link
                href={`https://github.com/${DATA.github}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} />
                <span>{DATA.github}</span>
              </Link>
            </div>
          </BlurFade>
        </div>
      </section>

      {/*<section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>*/}

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills section */}
      <section id="skills" className="mt-16">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold mb-6">My Tech Stack</h2>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Frontend */}
            <BlurFade delay={BLUR_FADE_DELAY * 9.5} className="rounded-lg border bg-card p-4">
              <h3 className="text-lg font-semibold mb-3">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.frontend.map((skill, id) => (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                    <Badge variant="secondary" className="bg-secondary/10 hover:bg-secondary/20">
                      {skill}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </BlurFade>

            {/* Backend */}
            <BlurFade delay={BLUR_FADE_DELAY * 9.7} className="rounded-lg border bg-card p-4">
              <h3 className="text-lg font-semibold mb-3">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.backend.map((skill, id) => (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10.2 + id * 0.05}>
                    <Badge variant="secondary" className="bg-secondary/10 hover:bg-secondary/20">
                      {skill}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </BlurFade>

            {/* AI */}
            <BlurFade delay={BLUR_FADE_DELAY * 9.9} className="rounded-lg border bg-card p-4">
              <h3 className="text-lg font-semibold mb-3">AI</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.ai.map((skill, id) => (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10.4 + id * 0.05}>
                    <Badge variant="secondary" className="bg-secondary/10 hover:bg-secondary/20">
                      {skill}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </BlurFade>

            {/* Tools */}
            <BlurFade delay={BLUR_FADE_DELAY * 10.1} className="rounded-lg border bg-card p-4">
              <h3 className="text-lg font-semibold mb-3">Developer Tools</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.tools.map((skill, id) => (
                  <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10.6 + id * 0.05}>
                    <Badge variant="secondary" className="bg-secondary/10 hover:bg-secondary/20">
                      {skill}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Idea to MVP
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  landings to complex web applications. Here are a few of them. 
                  
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-7 w-full py-7">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Competitions & Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Build. Ship. Earn.
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  troubleshooting...
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

     {/* <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section> */}

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-7">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just direct message me on{" "}
                <Link
                  href={'https://t.me/azekowka'}
                  className="text-blue-500 hover:underline"
                >
                  Telegram
                </Link>
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
