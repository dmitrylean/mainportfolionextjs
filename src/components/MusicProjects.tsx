"use client";

import React from "react";
import "./MusicProjects.css";
import Links from "./Links";
import projects from "../data/musicprojects.json";
import Image from "next/image";

interface Project {
  id?: string | number;
  cover: string;
  imagetitle?: string;
  title: string;
  description: string;
  links?: {
    spotify?: string;
    itunes?: string;
    youtube?: string;
  };
}

const MusicProjects: React.FC = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-content">
          {(projects as Project[]).map((project, index) => (
            <div className="project-block" key={project.id || index}>
              <div className="projects-image">
                <Image
                  src={project.cover}
                  width={250}
                  height={250}
                  alt={project.imagetitle || project.title}
                />
              </div>

              <div className="projects-list">
                <div className="projects-item">
                  <div className="projects-text">
                    <h3>{project.title}</h3>
                    <Links links={project.links} />
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicProjects;
