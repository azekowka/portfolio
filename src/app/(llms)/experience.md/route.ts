import { experiencesConfig } from "@/features/profile/data/experiences";

const content = `# Experience

${experiencesConfig
  .map(
    (item) =>
      `## ${item.title} | ${item.company.name}

Duration: ${item.start} - ${item.end || "Present"}

${item.description.map((line) => `- ${line}`).join("\n")}
`,
  )
  .join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
