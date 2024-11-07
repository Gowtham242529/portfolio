import React, { useEffect, useRef, useState } from "react";
import Hero from "@/components/Home/Hero";
import { Separator } from "@/components/ui/separator";
import SectionContainer from "@/components/SectionContainer";
import Technologies from "@/components/Home/Technologies";
import Experience from "@/components/Home/Experience";
import GithubCal from "@/components/Home/GitHubCal";
import Footer from "@/components/Footer";
import { LuLoader2 } from "react-icons/lu";
import { Suspense } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { IconToolsKitchen2, IconCode, IconZzz } from "@tabler/icons-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import TechnologiesText from "@/components/Home/TechnologiesText";
import ExperienceText from "@/components/Home/ExperienceText";
import FooterText from "@/components/FooterText";
import NavBar from "@/components/NavBar";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Home = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);
  const bannerRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  let dots;
  const arrayColors =
    theme == "dark"
      ? [
          "#eee",
          "#545454",
          "#596d91",
          "#bb5a68",
          "#696541",
          "#7ED321",
          "#FF3366",
        ]
      : [
          "#4A90E2",
          "#50E3C2",
          "#F5A623",
          "#BD10E0",
          "#FF6F61",
          "#7ED321",
          "#FF3366",
        ];

  useGSAP(() => {
    const t1 = gsap.timeline();

    t1.from("#loader h3", {
      opacity: 0,
      y: 200,
      stagger: 0.5,
      duration: 1,
      ease: "power3.out",
    });
    t1.to("#loader h3", {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    t1.to("#loader", {
      opacity: 0,
    });
    t1.to("#loader", {
      display: "none",
    });
  });

  useEffect(() => {
    const cursorChanges = () => {
      const cursorDot = cursorDotRef.current;
      const cursorRing = cursorRingRef.current;

      let lastMouseEvent = { clientX: 0, clientY: 0 };

      const updateCursorPosition = (e) => {
        lastMouseEvent = e;

        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;

        cursorRing.animate(
          {
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
          },
          { duration: 1000, fill: "both" }
        );
      };

      document.addEventListener("mousemove", updateCursorPosition);

      document.addEventListener("scroll", () => {
        const mouseEvent = new MouseEvent("mousemove", {
          clientX: lastMouseEvent.clientX,
          clientY: lastMouseEvent.clientY,
        });
        updateCursorPosition(mouseEvent);
      });
    };

    const canvas = canvasRef.current;
    const banner = bannerRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = banner.offsetWidth;
      canvas.height = banner.offsetHeight;
    };

    const generateDots = () => {
      dots = [];
      for (let index = 0; index < 300; index++) {
        dots.push({
          x: Math.floor(Math.random() * canvas.width),
          y: Math.floor(Math.random() * canvas.height),
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * arrayColors.length)],
        });
      }
    };

    const drawDots = async (currentDots) => {
      await currentDots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots(dots);

      const mouse = {
        x: event.pageX,
        y: event.pageY,
      };

      dots.forEach((dot) => {
        let distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 200) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleMouseOut = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots(dots);
    };

    const init = () => {
      resizeCanvas();
      generateDots();
      drawDots(dots);
    };

    // Event Listeners
    banner.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", init);
    banner.addEventListener("mouseout", handleMouseOut);

    // // Initial setup
    init();
    cursorChanges();
  }, []);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div id="homeScope">
      <div
        id="loader"
        className="flex justify-center items-center bg-background w-screen h-screen fixed z-[99] gap-8 text-xl md:text-4xl"
      >
        <h3>I</h3>
        <h3 className="flex items-center gap-2">
          Eat{" "}
          <IconToolsKitchen2 className="h-full w-full text-foreground dark:text-foreground" />
        </h3>
        <h3 className="flex items-center gap-2">
          Code{" "}
          <IconCode className="h-full w-full text-foreground dark:text-foreground" />
        </h3>
        <h3 className="flex items-center gap-2">
          Sleep{" "}
          <IconZzz className="h-full w-full text-foreground dark:text-foreground" />
        </h3>
      </div>
      <div
        id="main"
        ref={bannerRef}
        className="bg-background dark:bg-background cursor-none relative"
      >
        <canvas
          id="dotCanvas"
          className="absolute left-0 top-0 w-full h-full bg-transparent pointer-events-none z-50 transition-all duration-1000 ease-in-out"
          ref={canvasRef}
        ></canvas>
        <div
          ref={cursorDotRef}
          id="cursor-dot"
          className="w-10 h-10 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none fixed z-50 rounded-full mix-blend-difference bg-primary dark:bg-primary"
        ></div>
        <div
          ref={cursorRingRef}
          id="cursor-ring"
          className="w-16 h-16 top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none fixed rounded-full border border-foreground z-50"
        ></div>
        <NavBar />
        <SectionContainer classNameDisable={true} direction="right">
          <Suspense
            fallback={
              <LuLoader2 className="mx-auto my-10 h-4 w-4 animate-spin" />
            }
          >
            <Hero />
          </Suspense>
        </SectionContainer>
        <SectionContainer direction="right">
          <Separator />
        </SectionContainer>
        <SectionContainer disabled={true}>
          <TechnologiesText
            text={"Dedicated to transforming ideas into impactful solutions."}
          />
        </SectionContainer>
        <SectionContainer direction="left">
          <Separator />
          <Suspense
            fallback={
              <LuLoader2 className="mx-auto my-10 h-4 w-4 animate-spin" />
            }
          >
            <Technologies />
          </Suspense>
          <Separator />
        </SectionContainer>
        <SectionContainer disabled={true}>
          <ExperienceText baseVelocity={-1.5}>
            I Build efficient web applications with MERN stack.
          </ExperienceText>
        </SectionContainer>
        <SectionContainer direction="right">
          <Separator />
          <Experience />
        </SectionContainer>
        <SectionContainer direction="left">
          <Separator />
          <GithubCal />
          <Separator />
        </SectionContainer>
        <SectionContainer disabled={true}>
          <FooterText/>
        </SectionContainer>
        <SectionContainer>
          <Separator />
          <Footer />
        </SectionContainer>
      </div>
    </div>
  );
};

export default Home;
