import { useState, useEffect, useRef } from "react";
import { Monitor, Settings, FileText, Lock } from "lucide-react";

const serviceIcons = {
  "Web Design": (
    <Monitor
      size={36}
      className="text-primary transition-transform duration-500 group-hover:scale-110"
    />
  ),
  "Admin Panels": (
    <Settings
      size={36}
      className="text-primary transition-transform duration-500 group-hover:scale-110"
    />
  ),
  "Applications & Forms": (
    <FileText
      size={36}
      className="text-primary transition-transform duration-500 group-hover:scale-110"
    />
  ),
  Authentication: (
    <Lock
      size={36}
      className="text-primary transition-transform duration-500 group-hover:scale-110"
    />
  ),
};

export default function Services() {
  const sectionRef = useRef(null);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setShowStars(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Web Design",
      tagline: "Responsive & modern",
      description: "We create stunning websites tailored for your business.",
      features: ["Responsive layouts", "Custom branding", "SEO optimized"],
    },
    {
      title: "Admin Panels",
      tagline: "Control your content",
      description:
        "Easily manage your website and data through powerful admin panels.",
      features: ["User management", "Analytics dashboard", "Role-based access"],
    },
    {
      title: "Applications & Forms",
      tagline: "Dynamic & smart",
      description: "Build dynamic forms and applications for your users.",
      features: ["Form validation", "Custom workflows", "Notifications"],
    },
    {
      title: "Authentication",
      tagline: "Secure & reliable",
      description: "Robust authentication solutions for your platform.",
      features: ["OAuth support", "Two-factor auth", "Session management"],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-10 md:py-16 bg-gradient-to-b from-dark to-dark-light text-center relative overflow-hidden"
    >
      {/* Falling Stars */}
      {showStars &&
        [...Array(60)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const left = Math.random() * 100;
          const delay = Math.random() * 3;
          const duration = 6 + Math.random() * 3;
          return (
            <div
              key={i}
              className="absolute bg-primary-light rounded-full opacity-70 animate-fall"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: "-10px",
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}

      <div className="w-[95%] md:w-[90%] mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-light mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-6 bg-gradient-to-br from-dark-light to-dark shadow-lg rounded-xl hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-102 duration-500 cursor-pointer"
            >
              <div className="mb-4 flex justify-center">
                {serviceIcons[s.title]}
              </div>

              <h3 className="font-bold text-xl text-primary-light mb-1">
                {s.title}
              </h3>
              <p className="text-primary text-sm mb-4">{s.tagline}</p>

              <p className="text-gray-300 mb-4">{s.description}</p>

              <ul className="text-gray-400 mb-4 list-disc list-inside space-y-1">
                {s.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <button className="mt-2 px-4 py-2 bg-primary text-white font-semibold rounded-lg hover:bg-primary/70 transition duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
