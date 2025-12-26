import { hackathonsConfig } from "@/features/profile/components/hackathons/hackathons.config";

const content = `# Hackathons

${hackathonsConfig.map((item) => `## ${item.title}\n\n${item.description}`).join("\n\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
