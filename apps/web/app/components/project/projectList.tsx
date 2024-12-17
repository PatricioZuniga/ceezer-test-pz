"use client";

import React from "react";
import { RouterOutputs } from "@web/app/utils/trpc";
import ProjectItem from "@web/app/components/project/projectItem";

const ProjectList = ({
  projects = [],
}: {
  projects: RouterOutputs["projects"];
}) => (
  <div className="flex flex-wrap items-center justify-center py-10 gap-5 max-w-screen-xl">
    {projects.map((project) => (
      <ProjectItem key={project.id} project={project} />
    ))}
  </div>
);

export default ProjectList;
