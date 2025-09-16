import { Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const testimonialsData = [
  {
    name: "Aysel Mammadova",
    role: "CEO, TechNova",
    quote:
      "Working with this team transformed our online presence. Their design is futuristic, responsive, and truly AI-powered.",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    name: "Elvin Huseynov",
    role: "CTO, StartUp Hub",
    quote:
      "The admin panel and backend solutions are clean, intuitive, and super fast. Highly recommended!",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Leyla Aliyeva",
    role: "Founder, Creative Labs",
    quote:
      "Dynamic forms and applications saved us so much time. Their attention to detail is incredible.",
    avatar: "https://i.pravatar.cc/100?img=44",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Auto-advance testimonials
  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 5000); // 5s per testimonial
  };

  const handleDotClick = (index) => {
    setCurrent(index);
    startInterval(); // reset the interval
  };

  return (
    <section
      id="testimonials"
      className="py-10 md:py-16 bg-gradient-to-b from-dark-light to-dark relative overflow-hidden"
    >
      <div className="w-[95%] md:w-[90%] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-light text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="relative max-w-2xl mx-auto">
          {testimonialsData.map((t, i) => (
            <div
              key={i}
              className={`transition-all duration-1000 ${
                i === current
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-10 absolute top-0 left-0 w-full pointer-events-none"
              }`}
            >
              <div className="bg-dark-light p-8 rounded-2xl shadow-2xl relative">
                <p className="text-primary-light text-lg mb-6">"{t.quote}"</p>
                <div className="flex">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-primary"
                  />
                  <div className="text-left">
                    <h4 className="text-primary font-bold">{t.name}</h4>
                    <p className="text-secondary text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-primary-light/40"
                }`}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
