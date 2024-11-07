import React from 'react';
import IconsBundle from '@/components/TechnologyIcons/SocialIcons';

export function GithubRepo({ repo }) {
  const mainLanguage = repo.languages[0];

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1.5">
          <span
            className="inline-block h-5 w-5 rounded-full"
            style={{ backgroundColor: repo.color }}
          />
          <span>{mainLanguage}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {repo.homepageUrl && (
          <>
            <a
              href={repo.homepageUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center"
              data-umami-event="project-demo"
            >
              <IconsBundle kind="externalLink" iconType="icon" size={5} strokeWidth={1} />
            </a>
            <span className="text-gray-400 dark:text-gray-500">|</span>
          </>
        )}
        <a
          href={repo.url}
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-1"
          data-umami-event="project-repo"
        >
          <IconsBundle kind="github" iconType="icon" size={5} strokeWidth={1} />
        </a>
      </div>
    </div>
  );
}

export default GithubRepo;