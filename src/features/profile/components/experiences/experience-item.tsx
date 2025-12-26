import Image from "next/image";
import React from "react";
import { Briefcase } from "lucide-react";

import type { Experience } from "@/types/nav";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center select-none">
          {experience.company.image ? (
            <Image
              src={experience.company.image}
              alt={`${experience.company.name} logo`}
              width={24}
              height={24}
              quality={100}
              className="rounded-full"
              unoptimized
              aria-hidden
              style={{ height: "auto" }}
            />
          ) : (
            <Briefcase className="w-6 h-6" />
          )}
        </div>
        <a
          href={experience.company.url}
          target="_blank"
          className="hover:underline font-heading text-lg"
        >
          {experience.company.name}
        </a>
        <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
          {experience.employmentType}
        </span>
        <span className="text-xs px-2 py-1 bg-secondary rounded cursor-default">
          {experience.location.name}
        </span>
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        <div className="relative pl-9">
          <div className="absolute left-0 top-1 flex size-6 -translate-x-1/2 items-center justify-center rounded-full bg-background">
            <span className="flex size-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          </div>

          <div className="flex flex-col gap-y-2">
            <h4 className="text-base font-semibold">{experience.title}</h4>

            <time className="text-sm text-muted-foreground">
              {experience.start} - {experience.end}
            </time>
          </div>

          <div className="mt-2.5">
            <ul className="list-disc pl-5 text-sm text-muted-foreground">
              {experience.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
