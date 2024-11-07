import React from "react";
import IconsBundle from "@/components/TechnologyIcons/SocialIcons";
import { Separator } from "@/components/ui/separator";

export default function AuthorLayout({ data }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    linkedin,
    github,
    spotify,
    instagram,
    title,
    description,
  } = data;

  function decodeHtmlEntities(text) {
    const doc = new DOMParser().parseFromString(text, "text/html");
    return doc.documentElement.textContent || doc.documentElement.innerText;
  }

  return (
    <>
      <div className="">
        <div className="space-y-2 pb-8 pt-16 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <Separator />

        <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <img
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full object-center"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 text-center tracking-tight">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <IconsBundle kind="mail" href={`mailto:${email}`} />
              <IconsBundle kind="github" href={github} />
              <IconsBundle kind="linkedin" href={linkedin} />
              <IconsBundle kind="spotify" href={spotify} />
              <IconsBundle kind="instagram" href={instagram} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
              <h1 className="text-center md:text-left">
                {decodeHtmlEntities(title)}
              </h1>
              {description.map((item, index) => {
                return (
                  <p className="text-justify" key={index}>
                    {decodeHtmlEntities(item)}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
