import {
  NextJs,
  Tailwind,
  TypeScript,
  ShadCn,
  Umami,
  Mongodb,
  Markdown,
  Prisma,
  Bash,
  Django,
  Linux,
  Docker,
  VsCode,
  Azure,
  Arduino,
  AzureDevOps,
  CLang,
  CSS,
  DBeaver,
  FastAPI,
  Flask,
  GoLang,
  GraphQL,
  HTML,
  JavaScript,
  JSON,
  Jira,
  Kaggle,
  Kub,
  NGINX,
  NodeJs,
  Notion,
  Pandas,
  Plotly,
  PlayWright,
  Powershell,
  Postgres,
  Pytest,
  Python,
  React,
  Redis,
  Selenium,
  Streamlit,
  Svelte,
  Swagger,
  Vercel,
  Vite,
  Windows,
  Yarn,
  Yaml,
  AWS,
  Anaconda,
  Git,
  PyTorch,
  BootStrap,
  NodeJS,
  Postman,
  Sanity,
  SvelteKit,
  Numpy,
  Matplotlib,
  Jupyter,
  SciKitLearn,
  Gradio,
  Grafana,
  Celery,
  TestRail,
  LangChain,
  Seaborn,
  PowerBi,
  DataDog,
  HuggingFace,
  Pinecone,
  Rust,
  ThreeJS,
  Node,
  Poetry,
  MySQL,
  PNPM,
  GithubActions,
  FramerMotion,
  RabbitMQ,
  Tableau,
  MeiliSearch,
  Mistral,
  Opensource,
  VLLM,
  Locust,
  Fiber,
  Stripe,
  MSSQL,
} from "./icons";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LuMail } from "react-icons/lu";
import {
  AiFillSpotify,
  AiFillGithub,
  AiFillFacebook,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import {
  RiTwitterXFill,
  RiMastodonFill,
  RiThreadsFill,
  RiOpenaiFill,
} from "react-icons/ri";
import {
  LuExternalLink,
  LuGitFork,
  LuStar,
  LuSearch,
  LuLayoutDashboard,
  LuSettings,
  LuLogOut,
  LuPizza,
  LuCandy,
} from "react-icons/lu";
import { SiBuymeacoffee } from "react-icons/si";
import { MdAdminPanelSettings } from "react-icons/md";
import { RiToolsFill } from "react-icons/ri";
import { BsSearchHeartFill } from "react-icons/bs";

const components = {
  candy: LuCandy,
  buymeacoffee: SiBuymeacoffee,
  pizza: LuPizza,
  dashboard: LuLayoutDashboard,
  logout: LuLogOut,
  admin: MdAdminPanelSettings,
  settings: LuSettings,
  tools: RiToolsFill,
  mail: LuMail,
  spotify: AiFillSpotify,
  github: AiFillGithub,
  facebook: AiFillFacebook,
  youtube: AiFillYoutube,
  linkedin: AiFillLinkedin,
  twitter: AiOutlineTwitter,
  x: RiTwitterXFill,
  mastodon: RiMastodonFill,
  threads: RiThreadsFill,
  instagram: AiFillInstagram,
  githubFork: LuGitFork,
  githubStar: LuStar,
  externalLink: LuExternalLink,
  openai: RiOpenaiFill,
  search: LuSearch,
  searchHeart: BsSearchHeartFill,
  nextjs: NextJs,
  tailwind: Tailwind,
  typescript: TypeScript,
  shadcn: ShadCn,
  umami: Umami,
  mongodb: Mongodb,
  markdown: Markdown,
  prisma: Prisma,
  pinecone: Pinecone,
  bash: Bash,
  django: Django,
  linux: Linux,
  docker: Docker,
  vscode: VsCode,
  azure: Azure,
  arduino: Arduino,
  azuredevops: AzureDevOps,
  clang: CLang,
  css: CSS,
  dbeaver: DBeaver,
  fastapi: FastAPI,
  flask: Flask,
  golang: GoLang,
  graphql: GraphQL,
  html: HTML,
  javascript: JavaScript,
  json: JSON,
  jira: Jira,
  kaggle: Kaggle,
  kub: Kub,
  nginx: NGINX,
  nodejs: NodeJs,
  notion: Notion,
  pandas: Pandas,
  plotly: Plotly,
  playwright: PlayWright,
  powershell: Powershell,
  postgres: Postgres,
  pytest: Pytest,
  python: Python,
  react: React,
  redis: Redis,
  selenium: Selenium,
  streamlit: Streamlit,
  svelte: Svelte,
  swagger: Swagger,
  vercel: Vercel,
  vite: Vite,
  windows: Windows,
  yarn: Yarn,
  yaml: Yaml,
  aws: AWS,
  anaconda: Anaconda,
  git: Git,
  pytorch: PyTorch,
  bootstrap: BootStrap,
  postman: Postman,
  sanity: Sanity,
  sveltekit: SvelteKit,
  numpy: Numpy,
  matplotlib: Matplotlib,
  jupyter: Jupyter,
  scikitlearn: SciKitLearn,
  grafana: Grafana,
  gradio: Gradio,
  celery: Celery,
  testrail: TestRail,
  langchain: LangChain,
  seaborn: Seaborn,
  powerbi: PowerBi,
  datadog: DataDog,
  huggingface: HuggingFace,
  rust: Rust,
  threejs: ThreeJS,
  node: Node,
  poetry: Poetry,
  mysql: MySQL,
  mssql: MSSQL,
  pnpm: PNPM,
  githubactions: GithubActions,
  framermotion: FramerMotion,
  rabbitmq: RabbitMQ,
  tableau: Tableau,
  meilisearch: MeiliSearch,
  mistral: Mistral,
  opensource: Opensource,
  locust: Locust,
  vllm: VLLM,
  fiber: Fiber,
  stripe: Stripe,
};

import { LinkPreview } from "@/components/ui/link-preview";

const IconsBundle = ({
  kind,
  href,
  size = 8,
  iconType = "link",
  variant = "outline",
  className,
  parentClassName,
  hover = true,
  target,
  text,
  strokeWidth,
  showZoomEffect,
}) => {
  const SocialSvg = components[kind];

  if (kind in components === false) {
    return null;
  }

  if (
    (iconType === "link" || iconType === "Link" || iconType === "LinkButton") &&
    !href
  ) {
    return null;
  }

  const combinedClass = cn(
    `${text ? "mr-2" : ""} h-${size} w-${size}`,
    className
  );

  const combinedParentClass = cn(
    "flex items-center justify-center",
    `${hover ? "hover:text-sky-900 dark:hover:text-sky-900" : ""}`,
    parentClassName
  );

  if (iconType === "LinkButton" && href) {
    return (
      <Button
        variant={variant}
        size={!text ? "icon" : "default"}
        className={combinedParentClass}
        asChild
      >
        <LinkPreview url={href} target={target}>
          <span className="sr-only">{kind}</span>
          <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
          {text}
        </LinkPreview>
      </Button>
    );
  }
  if (iconType === "Link" && href) {
    return (
      <LinkPreview url={href} className={combinedParentClass} target={target}>
        <span className="sr-only">{kind}</span>
        <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
        {text}
      </LinkPreview>
    );
  }

  if (iconType === "icon") {
    return (
      <SocialSvg
        className={cn(`h-${size} w-${size}`, className)}
        strokeWidth={strokeWidth}
      />
    );
  }

  if (iconType === "linkButton" && href) {
    return (
      <Button
        variant={variant}
        size={!text ? "icon" : "default"}
        className={parentClassName}
        asChild
      >
        <LinkPreview
          className={cn("text-sm transition", combinedParentClass)}
          target={"_blank"}
          rel="noopener noreferrer"
          href={href}
        >
          <span className="sr-only">{kind}</span>
          <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
          {text}
        </LinkPreview>
      </Button>
    );
  }

  return (
    <>
      <LinkPreview
        className={cn("text-sm transition", combinedParentClass)}
        target={"_blank"}
        rel="noopener noreferrer"
        url={href}
      >
        <span className="sr-only">{kind}</span>
        <SocialSvg className={combinedClass} strokeWidth={strokeWidth} />
        {text}
      </LinkPreview>
    </>
  );
};

export default IconsBundle;
