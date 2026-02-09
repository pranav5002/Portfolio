import { ArrowUpRight, Github } from "lucide-react";
import {AnimatedBorderButton} from "../components/AnimatedBorderButton"

const projects = [
  {
    title: "BookStore",
    description:
      "A robust full-stack e-commerce application designed for browsing and managing a digital book inventory. The application features a dynamic frontend built with React for seamless user interaction and a scalable Node.js/Express backend serving a RESTful API.",
    image: "/public/projects/bookstore.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDb",
      "Tailwind CSS",
      "REST Api",
    ],
    link: "https://book-store-05.netlify.app/",
    github: "https://github.com/pranav5002/BookStore",
  },
  {
    title: "Foodify",
    description:
      "A modern, responsive frontend application designed to simulate a seamless food ordering experience. I engineered a dynamic user interface that allows users to browse restaurant menus, filter cuisines by category, and manage their shopping cart in real-time.",
    image: "/public/projects/foodify.png",
    tags: ["React.js", "Redux", "Tailwind CSS"],
    link: "https://foodify-01.netlify.app/",
    github: "https://github.com/pranav5002/Foodify",
  },
  {
    title: "ShopMe",
    description:
      "A high-performance e-commerce interface built with React and Vite. Features dynamic product browsing, seamless cart management, and a fully responsive design for optimal speed and user experience.",
    image: "/public/projects/shopme.png",
    tags: ["React.js", "Tailwind CSS"],
    link: "https://shopme-01.netlify.app/",
    github: "https://github.com/pranav5002/ShopMe",
  },
  {
    title: "WiSchool",
    description:
      "A modern, responsive frontend template designed for educational institutions and online learning platforms. WiSchool features a clean, professional user interface that showcases courses, instructor profiles, and student testimonials.",
    image: "/public/projects/wischool.png",
    tags: ["React.js", "CSS"],
    link: "https://template-wischool-01.netlify.app/",
    github: "https://github.com/pranav5002/wiSchool/tree/main",
  },
  {
    title: "Amazon-Clone",
    description:
      "A static replica of the Amazon homepage built with HTML5 and CSS3. Features a pixel-perfect recreation of the navigation bar, hero section, and responsive product grids using modern Flexbox techniques.1",
    image: "/public/projects/amazon.png",
    tags: ["HTML", "CSS"],
    link: "https://amazon-clone-0111.netlify.app/",
    github: "https://github.com/pranav5002/amazon-clone",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-smfont-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              make an impact.{" "}
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent web development work.
          </p>
        </div>

        {/* projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all projects */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5 "/>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
