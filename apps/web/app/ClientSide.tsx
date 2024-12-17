"use client";

import { trpc } from "./utils/trpc";

export default function ClientSide() {
  const projects = trpc.projects.useQuery();

  return (
    <div>
      {projects.data?.map((project) => (
        <div key={project.id}>{JSON.stringify(project)}</div>
      ))}
    </div>
  );
}
