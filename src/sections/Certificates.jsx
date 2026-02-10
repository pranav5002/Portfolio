import { ChevronLeft, ChevronRight, Award, ExternalLink, Calendar } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Modern Front-End Web Development",
    issuer: "Udemy",
    description: "Mastered the core fundamentals of web development, including HTML5, CSS3, and JavaScript (ES6+), with a focus on building responsive and accessible user interfaces.",
    link: "https://drive.google.com/file/d/11ibusrZyeBh8PBg4ZLGLM6rTH6eGBem2/view?usp=sharing",
  },
  {
    title: "Full Stack Development (MERN)",
    issuer: "Pregrad",
    description: "Gained comprehensive knowledge of the MERN stack architecture, building end-to-end applications with MongoDB, Express.js, React.js, and Node.js, emphasizing RESTful API integration.",
    link: "https://drive.google.com/file/d/11bcEphEKoAGoZsdjIxD-J7xygvxUKhRc/view?usp=sharing",
  },
  {
    title: "Software Engineering Job Simulation",
    issuer: "JP Morgan Chase & Co.",
    description: "Engaged in a realistic software engineering workflow, debugging proprietary codebases, optimizing data visualization feeds, and collaborating on agile tasks using Python and TypeScript.",
    link: "https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_694622f614fe972937afb371_1767110200705_completion_certificate.pdf",
  },
  {
    title: "Front-End Software Engineering Job Simulation",
    issuer: "Skyscanner",
    description: "Developed a travel application feature using React and Skyscanner's 'Backpack' design system, focusing on component reusability and seamless API data integration.",
    link: "https://www.theforage.com/completion-certificates/skoQmxqhtgWmKv2pm/km4rw7dihDr3etqom_skoQmxqhtgWmKv2pm_694622f614fe972937afb371_1768413951532_completion_certificate.pdf",
  },
  {
    title: "Node.js Bootcamp",
    issuer: "LetsUpgrade",
    description: "Acquired fundamental backend skills, learning to build scalable server-side applications, manage packages with NPM, and handle asynchronous operations in Node.js.",
    link: "https://drive.google.com/file/d/1jA8eMkZVMXdf3Rv3uysWXPYKxuVtNerL/view?usp=sharing",
  },
  {
    title: "Full Stack Web Development - Skill Up",
    issuer: "GeeksforGeeks",
    description: "Strengthened full-stack development foundations through practical coding challenges, covering both client-side interfacing and server-side logic implementation.",
    link: "https://media.geeksforgeeks.org/courses/certificates/72fd6dd5a9f319cc0126d80fa2cb846d.pdf",
  },
  {
    title: "AI Tools Workshop",
    issuer: "be10x",
    description: "Explored the integration of Generative AI tools into developer workflows to enhance productivity, automate repetitive tasks, and accelerate code generation.",
    link: "https://certx.in/certificate/0270772f-3809-4400-b29b-1e1c61cd09971033418",
  },
];

export const Certificates = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % certificates.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div
        className="absolute top-1/2 left-1/2
        w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in"
          >
            Validating My Skills
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground"
          >
            Certifications &{" "}
            <span className="font-serif italic font-normal text-white">
              Achievements
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Continuous learning and professional development to stay ahead in modern tech.
          </p>
        </div>

        {/* Certificate Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Certificate Card */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200 min-h-[400px] flex flex-col justify-between">
              
              {/* Icon Badge */}
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>

              <div>
                {/* Header: Title & Date */}
                <div className="pt-4 mb-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {certificates[activeIdx].title}
                    </h3>
                    {/* <span className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground bg-surface px-3 py-1 rounded-full border border-white/5 w-fit">
                      <Calendar className="w-3 h-3" /> {certificates[activeIdx].date}
                    </span> */}
                  </div>
                  <p className="text-lg text-primary font-medium">
                    {certificates[activeIdx].issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  "{certificates[activeIdx].description}"
                </p>
              </div>

              {/* Footer: Tags & Link */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10 pt-6">
                {/* <div className="flex flex-wrap gap-2">
                  {certificates[activeIdx].tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
                
                <a
                  href={certificates[activeIdx].link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors group"
                >
                  View Credential 
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all active:scale-95"
                onClick={previous}
                aria-label="Previous certificate"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex gap-2">
                {certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to certificate ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all active:scale-95"
                aria-label="Next certificate"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};