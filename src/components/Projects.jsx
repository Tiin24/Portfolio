import React from "react";
import { data } from "../utils/projects";

const Project = () => {
  return (
    <div className="grid grid-cols-1 gap-9 md:grid-cols-2 xl:grid-cols-4">
      {data.map(function (data) {
        return (
          <div className="max-w-sm rounded overflow-hidden border-x-amber-700 shadow-md shadow-orange-600" key={data.id}>
            <div className="w-full h-40">
              <a href={data.link} target="_blank" rel="noreferrer">
                <img
                  src={data.img}
                  className="w-full h-full"
                  alt={data.title}
                />
              </a>
            </div>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">{data.title}</div>
              <p class="text-gray-700 text-base">{data.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
