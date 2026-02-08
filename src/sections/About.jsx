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
      <div>
        <div>
          {/* left column */}
          <div>
            <span>About Me</span>
          </div>
          <h2>Building the future,</h2>
        </div>
      </div>
    </section>
  );
};
