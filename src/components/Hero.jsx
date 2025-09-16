import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Zap, Shield, Cloud } from "lucide-react";

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => setVisible(true), []);

  const features = [
    {
      icon: Zap,
      text: "Lightning Fast",
      color: "bg-primary",
      position: "top-0 left-0 -translate-x-6 -translate-y-6",
    },
    {
      icon: Shield,
      text: "Bank-Level Security",
      color: "bg-primary",
      position: "top-0 right-0 translate-x-6 -translate-y-6",
    },
    {
      icon: Cloud,
      text: "Global CDN",
      color: "bg-primary",
      position: "bottom-0 left-0 -translate-x-6 translate-y-6",
    },
    {
      icon: Sparkles,
      text: "AI Optimized",
      color: "bg-primary",
      position: "bottom-0 right-0 translate-x-6 translate-y-6",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-[calc(100dvh-4rem)] flex items-center pb-16 pt-20 bg-dark">
      {/* Autonomous flying stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => {
          const size = Math.random() * 2 + 1;
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 5;
          const top = Math.random() * 100;
          const left = Math.random() * 100;

          return (
            <div
              key={i}
              className="absolute bg-primary-light rounded-full opacity-50"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animation: `flyStars ${duration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      <div className="relative w-[95%] md:w-[90%] mx-auto px-4">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          {/* Text content */}
          <div
            className={`sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left transition-all duration-1000 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-primary-light leading-tight mb-6">
              Take Your Business
              <span className="block text-transparent bg-clip-text bg-primary">
                Into The Future
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-2xl text-primary-light leading-relaxed">
              Experience next-gen web development with
              <span className="text-primary font-semibold">
                {" "}
                AI-powered design
              </span>
              ,
              <span className="text-primary font-semibold">
                {" "}
                lightning-fast performance
              </span>
              , and
              <span className="text-secondary font-semibold">
                {" "}
                enterprise-grade security
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-6">
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-bold text-lg rounded-2xl hover:bg-primary/70 transition-all duration-300 shadow-2xl hover:scale-105 transform">
                <span className="relative">Launch Your Site</span>
                <ArrowRight className="relative ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-white font-bold text-lg rounded-2xl hover:bg-primary-light/10 transition-all duration-300 shadow-xl hover:scale-105 transform">
                <span className="relative">See Live Demo</span>
              </button>
            </div>
          </div>

          {/* Visual section */}
          <div
            className={`mt-16 lg:mt-0 lg:col-span-6 flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative w-full max-w-lg lg:max-w-2xl">
              <div className="relative group">
                <div className="absolute -inset-4 md:bg-primary rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse" />
                <div className="relative bg-dark-light border border-primary rounded-3xl p-4 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
                    alt="Modern Business Dashboard"
                    className="relative rounded-2xl w-full shadow-xl hover:scale-102 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Feature cards */}
              {features.map((feature, i) => (
                <div
                  key={i}
                  className={`absolute ${feature.position} transform group cursor-pointer`}
                  style={{
                    animation: `float 4s ease-in-out infinite`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  <div
                    className={`relative ${feature.color} w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300`}
                  >
                    <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      {feature.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
