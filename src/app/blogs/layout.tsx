import type { Metadata } from "next/types";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <section>{children}</section>
    </main>
  );
}
