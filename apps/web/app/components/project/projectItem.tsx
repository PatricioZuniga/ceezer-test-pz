"use client";

import React from "react";
import { RouterOutputs } from "@web/app/utils/trpc";

type ProjectItem = RouterOutputs["projects"][0];

const ProjectItem = ({ project }: { project: ProjectItem }) => (
  <div className="max-w-sm bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 w-96 h-96">
    <h2 className="mb-2 text-2xl font-bold text-white p-3 text-center">
      {project.name}
      <img
        src={`https://flagsapi.com/${project.country.code}/flat/24.png`}
        className="inline-block pl-2"
        title={project.country.name}
        alt={project.country.name}
      ></img>
    </h2>
    <img src={project.image} alt={project.name} className="max-h-48 w-full" />
    <div className="text-gray-400 p-3 h-20 overflow-y-hidden hover:overflow-y-auto">{project.description}</div>
    <div className="pt-4 px-3 text-sm text-right">
      €{project.price_per_ton}/ton •
      by {project.supplier.name}
    </div>
  </div>
);

export default ProjectItem;
