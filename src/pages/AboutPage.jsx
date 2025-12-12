import { motion } from "framer-motion";
import AboutSection from "../components/About/AboutSection";
import AboutImg from "../../src/assets/image/about.jpg"; 
import Navbar from "../components/Home/Navbar";
import Newsletter from "../components/Home/Newsletter";

export default function About() {
  return (
    <>
      <Navbar/>

      {/* PAGE FADE-IN */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* WRAP ABOUT SECTION WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <AboutSection
            title="About"
            subtitle="Fika Cafe"
            text="At Fika Coffee, we celebrate the art of slowing down. Inspired by the Scandinavian ritual of “fika,” our brand is built on the belief that a cup of coffee is more than a daily habit — it’s a moment of pause, presence, and connection. Every blend we craft captures this essence, inviting you to breathe, relax, and embrace a little calm in your busy day."
            imageLeft={false}
            image={AboutImg}
          />
        </motion.div>

        {/* NEWSLETTER FADE-IN */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Newsletter/>
        </motion.div>
      </motion.div>
    </>
  );
}
