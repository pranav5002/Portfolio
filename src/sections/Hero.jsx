import { Button } from "@/components/Button";
import {
  ArrowRight,
  Download,
  ChevronDown,
  Github,
  Linkedin,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Redux",
  "Node.js",
  "Express.js",
  "MongoDb",
  "REST Api",
  "Tailwind CSS",
  "Bootstrap",
  "MySql",
  "C Language",
  "Pyhton",
  "Git",
  "Version Control",
  "Figma",
  "Netlify",
  "Render",
  "Thunder Client",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background  */}
      <div className="absolute insert-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero Image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute insert-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* left column -text column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Creative Full Stack Web Developer
              </span>
            </div>

            {/* headline */}
            <div className="sapce-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in animation-delay-100">
                Transforming
                <span className="text-primary glow-text"> ideas</span>
                <br />
                into robust
                <br />
                <span className="font-serif italic font-normal text-white">
                  Web applications.
                </span>
              </h1>
              <br />
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Pranav Singhal - a developer dedicated to building
                seamless web solutions. With expertise in React, Node.js, and
                MongoDB, I focus on writing clean, efficient code to create
                applications that are as intuitive as they are powerful.
              </p>
            </div>
            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5 " />
                </Button>
              </a>
              {/* <a href="">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a> */}
            </div>

            {/* social links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 ">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/pranav5002" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/pranav-singhal-/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* right column  */}
        </div>

        {/* Skiils */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-md text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="realtive overflow-hidden ">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 px-8 py-4 ">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
