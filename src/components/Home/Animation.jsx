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
      <section className="h-screen w-full flex items-center justify-center overflow-hidden">

        <motion.img
          src={Image1}
          initial={{ opacity: 0, y: 100 }}        
          whileInView={{ opacity: 1, y: 0 }}      
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full h-full object-cover"
        />

      </section>

    

    </div>
  );
}
