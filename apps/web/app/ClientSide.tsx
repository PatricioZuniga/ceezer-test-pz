"use client";

import { trpc } from "@web/app/utils/trpc";
import ProjectList from "@web/app/components/project/projectList";

export default function ClientSide() {
  const projects = trpc.projects.useQuery();

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="p-6 bg-gray-800 shadow-lg">
        <h1 className="text-4xl font-bold text-center">
          CEEZER Projects
        </h1>
      </header>
      <main className="flex justify-center">
        <ProjectList projects={projects.data ?? []} />
      </main>
    </div>
  );
}
