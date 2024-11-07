import { siteMetadata } from "@/assets/Data";
import IconsBundle from "@/components/TechnologyIcons/SocialIcons";
import SectionContainer from "@/components/SectionContainer";
import GSAP from "@/assets/gsap.png";
import { LinkPreview } from "./ui/link-preview";

export default function Footer() {
  return (
    <footer>
      <SectionContainer>
        <div className="mb-0 flex flex-col justify-start space-x-0 space-y-3 py-10">
          <div className="flex flex-col items-center space-y-3 text-sm sm:flex-row sm:justify-between sm:text-base">
            <LinkPreview url={siteMetadata.spotify}>
              <div className="flex items-center justify-center space-x-2 text-sm sm:justify-start sm:text-base">
                <svg className="mt-[-2px] h-4 w-4" viewBox="0 0 168 168">
                  <path
                    fill="#1ED760"
                    d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                  />
                </svg>
                <div className="inline-flex space-x-1">
                  <p className="font-medium ">My Playlist</p>
                  <span className="">{" – "}</span>
                  <p className="">Spotify</p>
                </div>
              </div>
            </LinkPreview>
            <ul className="flex cursor-pointer items-center space-x-5">
              <li>
                <IconsBundle
                  kind="linkedin"
                  href={siteMetadata.linkedin}
                  size={5}
                />
              </li>
              <li>
                <IconsBundle
                  kind="github"
                  href={siteMetadata.github}
                  size={5}
                />
              </li>
              <li>
                <IconsBundle
                  kind="mail"
                  href={`mailto:${siteMetadata.email}`}
                  size={5}
                />
              </li>
              <li>
                <IconsBundle
                  kind="spotify"
                  href={siteMetadata.spotify}
                  size={5}
                />
              </li>
              <li>
                <IconsBundle
                  kind="instagram"
                  href={siteMetadata.instagram}
                  size={5}
                />
              </li>
              {/* <li>
                <IconsBundle kind="buymeacoffee" href={siteMetadata.buymeacoffee} size={5} />
              </li> */}
              {/* <li>
              <IconsBundle kind="twitter" href={siteMetadata.twitter} size={6} />
            </li> */}
              {/* <li>
              <IconsBundle kind="x" href={siteMetadata.x} size={5} />
            </li> */}
              {/* <li>
              <IconsBundle kind="threads" href={siteMetadata.threads} size={6} />
            </li> */}
              {/* <li>
              <IconsBundle kind="youtube" href={siteMetadata.youtube} size={6} />
            </li> */}
              {/* <li>
              <IconsBundle kind="facebook" href={siteMetadata.facebook} size={6} />
            </li> */}
            </ul>
          </div>

          <div className="flex flex-col items-center space-y-3 text-xs sm:flex-row sm:justify-between sm:text-sm">
            <ul className="flex space-x-2">
              <li>{`© ${new Date().getFullYear()}`}</li>
              <li>{` • `}</li>
              <li>
                <a href="/">{siteMetadata.title}</a>
              </li>
              <li>{` • `}</li>
              <li>
                <IconsBundle
                  kind="githubFork"
                  href={siteMetadata.siteRepo}
                  size={5}
                />
              </li>
            </ul>
            <ul className="flex space-x-2">
              <li>{`Powered by`}</li>
              <li>{` • `}</li>
              <li>
                <IconsBundle
                  kind="vite"
                  href={"https://vite.dev/"}
                  size={5}
                  hover={false}
                />
              </li>
              <li>
                <IconsBundle
                  kind="tailwind"
                  href={`https://tailwindcss.com/`}
                  size={5}
                  hover={false}
                />
              </li>
              <li>
                <IconsBundle
                  kind="shadcn"
                  href={`https://ui.shadcn.com/`}
                  size={5}
                  hover={false}
                />
              </li>
              <li>
                <a href="https://magicui.design/">
                  <img
                    src="https://magicui.design/icon.png"
                    alt=""
                    className="h-5 w-5"
                  />
                </a>
              </li>
              <li>
                <a href="https://ui.aceternity.com/">
                  <img
                    src="https://ui.aceternity.com/_next/image?url=%2Flogo-dark.png&w=64&q=75"
                    alt=""
                    className="h-5 w-5"
                  />
                </a>
              </li>
              <li>
                <IconsBundle
                  kind="framermotion"
                  href={"https://www.framer.com/motion/"}
                  size={5}
                  hover={false}
                />
              </li>
              <li>
                <a href="https://gsap.com/">
                  <img src={GSAP} alt="" className="h-5 w-5" />
                </a>
              </li>
              {/* <li>
                <IconsBundle
                  kind="umami"
                  href={`https://umami.is/`}
                  size={5}
                  hover={false}
                />
              </li> */}
              {/* <li>
              <IconsBundle kind="markdown" href={`mailto:${"siteMetadata.linkedin"}`} size={5}  hover={false}/>
            </li> */}
            </ul>
          </div>
        </div>
      </SectionContainer>
    </footer>
  );
}
