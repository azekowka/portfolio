"use client";

import React, { useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ProjectCard from "@/components/project/project-card";

import { projects } from "#site/content";


const schema = z.object({
  query: z.string(),
});

export default function Home() {

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      query: "",
    },
  });

  const { query } = form.watch();



  const sortedFeaturedProjects = useMemo(() => {
    return [...projects].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);



  const filteredProjects = useMemo(() => {
    const lowercaseQuery = query.toLowerCase();
    const projectList = sortedFeaturedProjects;

    // If query is empty, return all projects
    if (!query.trim()) {
      return projectList;
    }

    return projectList.filter((project) => {
      const title = project.title;
      const description = project.description || "";
      return (
        title.toLowerCase().includes(lowercaseQuery) ||
        description.toLowerCase().includes(lowercaseQuery)
      );
    });
  }, [query, sortedFeaturedProjects]);

  const renderProjects = useCallback(() => {
    return filteredProjects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ));
  }, [filteredProjects]);

  return (
    <section className="w-full space-y-6 mt-5">
      <Form {...form}>
        <form className="w-full flex items-center nav-container sticky top-14 z-20">
          <FormField
            control={form.control}
            name="query"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="rounded-lg current focus-visible:ring-0 bg-background backdrop-blur-md"
                    placeholder="search projects"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        </form>
      </Form>
      {renderProjects()}
    </section>
  );
}
