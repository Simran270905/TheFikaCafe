import { motion } from "framer-motion";
import { useEffect } from "react";
import Image1 from "../../assets/image/image1.jpg";

export default function Animation() {
  // Auto-scroll effect
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 2500);
  }, []);

  return (
    <div className="w-full bg-white">

      {/* HERO FULLSCREEN SECTION */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">

        {/* Background Image / Video */}
        <motion.img
          src={Image1}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full h-full object-cover"
        />

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-semibold text-center drop-shadow-xl font-[Merriweather] px-6">
            “Coffee is the silent moment that wakes your soul.”
          </h1>
        </div>

      </section>

    </div>
  );
}
