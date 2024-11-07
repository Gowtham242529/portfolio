import { Timeline } from "@/components/ui/timeline";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Lens } from "@/components/ui/lens";
import { useState } from "react";
import { experienceData } from "@/assets/Data";
import IconsBundle from "@/components/TechnologyIcons/SocialIcons";

function TechnologyIcons({ technologies }) {
  return (
    <div className="flex flex-wrap items-center space-x-2 pt-1 text-xs">
      <span className="mr-2">Technologies used:</span>
      {technologies.map((tech, index) => (
        <IconsBundle
          key={index}
          kind={tech.name.toLowerCase()}
          size={4}
          iconType="link"
          href={tech.href}
        />
      ))}
    </div>
  );
}

function createTimelineItems(experiences) {
  return experiences.map((experience) => ({
    title: experience.year,
    content: (
      <div>
        <div className="mb-1 text-base font-semibold leading-none text-card-foreground dark:text-card-foreground">
          {experience.title}
        </div>
        <div className="pt-1 text-xs text-card-foreground dark:text-card-foreground">
          {experience.roleType}
        </div>
        {experience.endDate ? (
          <div className="pt-1 text-xs text-card-foreground dark:text-card-foreground">
            {experience.startDate} - {experience.endDate}
          </div>
        ) : (
          <div className="pt-1 text-xs text-card-foreground dark:text-card-foreground">
            {experience.startDate} - {" Present"}
          </div>
        )}
        <p className="text-sm text-muted-foreground text-justify">
          {experience.description}
        </p>
        {experienceData && (
          <TechnologyIcons technologies={experience.techStack} />
        )}
      </div>
    ),
  }));
}

const Experience = () => {
  const [hovering, setHovering] = useState(false);
  return (
    <div className="my-10 w-full">
      <h3 className="text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
        Experience
      </h3>
      <div className="mt-5">
        <Tabs
          defaultValue={experienceData[0]?.name}
          className="flex flex-col md:flex-row md:space-x-4"
          orientation="vertical"
        >
          <TabsList className={`flex h-max w-full flex-col space-y-2  md:w-64`}>
            {experienceData.map((company) => (
              <TabsTrigger
                key={`trigger-${company.name}`}
                className="flex w-full text-left "
                value={company.name}
              >
                <div className="flex w-full items-center justify-between">
                  <span>{company.name}</span>
                  <span
                    className={`mx-1 inline-block h-3 w-3 rounded-full  ${
                      company.active && "bg-green-300"
                    }`}
                  />
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          <Separator
            orientation="vertical"
            className="mx-[15px] hidden data-[orientation=vertical]:h-56 data-[orientation=vertical]:w-px md:flex"
          />
          {experienceData.map((company) => (
            <TabsContent
              key={company.name}
              value={company.name}
              className="mt-4 w-full md:mt-0"
            >
              <Card
                key={`card-${company.name}`}
                className="border-none shadow-sm outline-none ring-0"
              >
                <CardHeader>
                  <CardTitle>
                    <HoverCard>
                      <HoverCardTrigger asChild>
                        <div className="flex flex-col w-80">
                          <Button
                            variant="link"
                            className="px-0 mr-auto text-2xl"
                          >
                            {company.name}
                          </Button>
                          <span className="text-sm inline-block">
                            ( hover me )
                          </span>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80">
                        <div className="flex justify-between space-x-4">
                          <Avatar>
                            <AvatarImage src={company.imgSrc} />
                            <AvatarFallback>{company.fallBack}</AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold">
                              @{company.name}
                            </h4>
                            <h4 className="text-sm font-semibold">
                              {company.location}
                            </h4>
                            <p className="text-sm">{company.description}</p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  </CardTitle>
                  <CardDescription>{company.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Lens hovering={hovering} setHovering={setHovering}>
                    <Timeline data={createTimelineItems(company.items)} />
                  </Lens>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Experience;
