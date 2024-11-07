import React from "react";
// import { Card } from "@/components/ui/card";
import { GithubRepo } from "./GithubRepo";
import { LinkPreview } from "@/components/ui/linkPreviewForProjectCards";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function ProjectCard({ project }) {
  const { title, description, imgSrc, url, repo, builtWith } = project;
  const href = url;

  return (
    <>
      <CardContainer className="md m-2 max-w-[544px] h-full border-0 p-2 shadow-lg">
        <CardBody className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-transparent">
          <CardItem translateZ={50}>
            <img
              alt={title}
              src={imgSrc}
              className="h-36 object-cover object-center lg:h-60"
              width={1088}
              height={612}
            />
          </CardItem>
          <div className="flex grow flex-col justify-between space-y-6 p-4 md:p-6">
            <div className="space-y-3">
              <CardItem translateZ={60}>
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  {href ? (
                    <a
                      href={href}
                      aria-label={`Link to ${title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span data-umami-event="project-title-link">{title}</span>
                    </a>
                  ) : (
                    title
                  )}
                </h2>
              </CardItem>
              <CardItem translateZ={100}>
                <div className="max-w-none space-y-2 text-justify text-gray-500 dark:text-gray-400">
                  <p>{description}</p>
                </div>
              </CardItem>
            </div>
            <div>
              <div className="my-2 flex flex-wrap space-x-1.5">
                <span className="shrink-0">Built With:</span>
                {builtWith?.map((tool, index) => (
                  <LinkPreview
                    url={tool.url}
                    key={index}
                    className="font-semibold text-gray-600 dark:text-gray-300"
                  >
                    {tool.name}
                    {index !== builtWith.length - 1 && ","}
                  </LinkPreview>
                ))}
              </div>
              {repo ? (
                <GithubRepo repo={repo} />
              ) : (
                url && (
                  <a
                    href={url}
                    className="hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium leading-6 text-primary-500"
                    aria-label={`Link to ${title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span data-umami-event="project-learn-more">
                      Learn More &rarr;
                    </span>
                  </a>
                )
              )}
            </div>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}

export default ProjectCard;
