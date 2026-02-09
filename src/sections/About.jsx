import { Code2, MonitorSmartphone, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean & Maintainable Code",
    description:
      "I write modular, scalable, and well-documented code that is easy to read and maintain. I believe software should be built to last, not just to work.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "I prioritize speed and efficiency, optimizing algorithms and reducing load times to ensure applications run smoothly across all devices and networks.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect rendering on every device, guaranteeing accessibility for all users.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "Thriving in team environments through open communication and shared goals.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8 ">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase ">
                About Me
              </span>
            </div>
            <h2 className="tet-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-secondary-foreground">
              Crafting experiences,
              <span className="font-serif italic font-normal text-white">
                {" "}
                One pixel at a time.
              </span>
            </h2>
            <div className="space-y-4 text-muted-foreground animate-fade-in animate-delay-200">
              <p>
                Hello! I am a Full Stack Web Developer with a focus on building
                responsive and scalable applications. My journey into
                development started with a curiosity about how the web works,
                which quickly turned into a dedicated pursuit of the MERN Stack.
                I specialize in creating dynamic user interfaces using React.js
                and robust backend systems with Node.js and Express.
              </p>
              <p>
                I believe that great software is the result of clean code and
                collaborative problem-solving. I have honed my skills by
                tackling complex technical challenges and continuously expanding
                my knowledge through virtual engineering programs. My goal is
                always to write maintainable code that is not only functional
                but also intuitive for the end-user.
              </p>
              <p>
                Currently, I am looking for opportunities to bring my technical
                skills and creative mindset to a dynamic engineering team. I am
                ready to contribute to impactful projects that push the
                boundaries of modern web development and deliver seamless
                digital experiences.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lf font-medium italic text-foreground">
                "My mission is to continuously evolve with the ever-changing web
                landscape. I am dedicated to mastering modern technologies and
                best practices to build software that is not just current, but
                future-ready."
              </p>
            </div>
          </div>

          {/* right column */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
