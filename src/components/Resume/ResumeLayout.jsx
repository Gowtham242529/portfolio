import React from "react";
import { Separator } from "@/components/ui/separator";
import { HashLink } from "react-router-hash-link";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import IconsBundle from "@/components/TechnologyIcons/SocialIcons";
import { LinkPreview } from "../ui/link-preview";

export default function ResumeLayout({ data }) {
  const {
    areasOfExpertise,
    professionalExperience,
    education,
    projects,
    personalInfo,
    navLinks,
    navNames,
  } = data;

  const renderDescription = (itemName, des) => {
    const textContent = (
      <p className="text-justify pb-4" key={des.name}>
        <span className="font-bold">{des.name && des?.name + ":"}</span>{" "}
        {des.data}
      </p>
    );

    if (itemName === "Contact") {
      if (des.name === "Phone") {
        return textContent;
      } else if (des.name === "Email") {
        return (
          <p className="text-justify pb-4" key={des.name}>
            <span className="font-bold">{des.name && des?.name + ":"}</span>{" "}
            <a href={`mailto:${des.data}`} className="sm:text-base text-[10px]">{des.data}</a>
          </p>
        );
      } else {
        return (
          <p className="text-justify pb-4" key={des.name}>
            <span className="font-bold">{des.name && des?.name + ":"}</span>{" "}
            <a href={des.data} className="sm:text-base text-[10px]">{des.data}</a>
          </p>
        );
      }
    } else {
      return textContent;
    }
  };

  return (
    <>
      <div className="">
        <div className="space-y-2 pb-8 pt-16 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 md:text-lg md:leading-7">
            My professional career, experiences, and skills.
          </p>
        </div>
        <Separator />

        <Card className="space-y-2 my-10 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="xl:flex justify-between hidden">
            <div className="space-x-2 py-8 px-4 pl-8">
              {navNames.map((name, i) => {
                return (
                  <HashLink
                    to={`/resume/#${navLinks[i]}`}
                    className="pb-3 text-lg block font-medium leading-8 text-left"
                    key={i}
                  >
                    {name}
                  </HashLink>
                );
              })}
            </div>
            <Separator
              orientation="vertical"
              className="data-[orientation=vertical]:h-full"
            />
          </div>
          <div className="py-8 px-8 xl:col-span-2 xl:pl-0 pl-4">
            {personalInfo.map((item) => (
              <React.Fragment key={item.name}>
                <h1
                  id={item.navLink}
                  className="pb-3 pt-8 text-3xl block font-bold leading-8 text-left"
                >
                  {item.name}
                </h1>
                {item.data.map((des) => renderDescription(item.name, des))}
              </React.Fragment>
            ))}
            <h1
              id={areasOfExpertise.navLink}
              className="pb-3 pt-8 text-3xl block font-bold leading-8 text-left"
            >
              {areasOfExpertise.name}
            </h1>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold text-primary">
                    Category
                  </TableHead>
                  <TableHead className="font-bold text-primary">
                    Technologies
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {areasOfExpertise.data.map((d) => (
                  <TableRow key={d.name}>
                    <TableCell className="font-medium">{d.name}</TableCell>
                    <TableCell>{d.data}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <h1
              id={professionalExperience.navLink}
              className="pb-3 pt-8 text-3xl block font-bold leading-8 text-left"
            >
              {professionalExperience.name}
            </h1>
            {professionalExperience.data.map((d) => (
              <React.Fragment key={d.company}>
                <h2
                  className="text-xl font-bold pb-2 leading-6 text-left"
                  id={d.navLink}
                >
                  {d.company}
                </h2>
                <p className="text-justify flex justify-between">
                  <span>{d.location}</span>
                  <span>{d.year}</span>
                </p>
                <p className="text-justify pb-4">
                  {d.title} ({d.roleType})
                </p>
                <p className="text-justify pb-4">{d.description}</p>
                <div className="flex items-center flex-wrap gap-2 space-x-3 pb-4">
                  <p className="text-justify">Tech Stack:</p>
                  {d.techStack.map((icon) => (
                    <IconsBundle kind={icon.name} href={icon.href} />
                  ))}
                </div>
              </React.Fragment>
            ))}
            <h1
              id={education.navLink}
              className="pb-3 pt-8 text-3xl block font-bold leading-8 text-left"
            >
              {education.name}
            </h1>
            {education.data.map((d) => (
              <React.Fragment key={d.degree}>
                <h2 className="text-xl font-bold pb-2 flex justify-between leading-6 text-left">
                  <span>{d.degree}</span>
                  <span className="text-sm font-medium">- {d.year}</span>
                </h2>
                <p className="text-justify flex justify-between">
                  <span>{d.institution}</span>
                  <span>- {d.location}</span>
                </p>
                <p className="text-justify pb-4">{d.description}</p>
              </React.Fragment>
            ))}
            <h1
              id={projects.navLink}
              className="pb-3 pt-8 text-3xl block font-bold leading-8 text-left"
            >
              {projects.name}
            </h1>
            {projects.data.map((d) => (
              <React.Fragment key={d.name}>
                <h2
                  className="text-xl font-bold pb-2 leading-6 text-left"
                  id={d.navLink}
                >
                  {d.name}
                </h2>
                <p className="text-justify pb-4">{d.description}</p>
                <div className="flex flex-wrap text-justify space-x-3 pb-4">
                  <span className="text-justify">Tech Stack:</span>
                    {d.builtWith.map((tool, index) => (
                      <LinkPreview
                        url={tool.url}
                        key={index}
                        className="font-semibold text-gray-600 dark:text-gray-300"
                      >
                        {tool.name}
                        {index !== d.builtWith.length - 1 && ", "}
                      </LinkPreview>
                    ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
