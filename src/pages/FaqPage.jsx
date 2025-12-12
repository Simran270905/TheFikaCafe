import { motion } from "framer-motion";
import FAQSection from "../components/Faq/FaqSection.jsx";
import Navbar from "../components/Home/Navbar";
import Newsletter from "../components/Home/Newsletter";

export default function FAQ() {
  return (
    <>
      <Navbar />

      {/* PAGE FADE-IN */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* FAQ SECTION ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FAQSection />
        </motion.div>

        {/* NEWSLETTER ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Newsletter />
        </motion.div>
      </motion.div>
    </>
  );
}
