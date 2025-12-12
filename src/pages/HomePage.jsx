import { motion } from "framer-motion";
import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import HowItWorks from "../components/Home/Work";
import AboutSection from "../components/Home/About";
import SubscriptionPlans from "../components/Home/Subscription";
import CoffeeStory from "../components/Home/Coffee";
import Newsletter from "../components/Home/Newsletter";
import Animation from "../components/Home/Animation";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 mt-15">
      <Navbar />

      {/* HERO - Page Load Animation */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
      </motion.div>

      {/* HOW IT WORKS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <HowItWorks />
      </motion.div>

      {/* ABOUT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <AboutSection />
      </motion.div>

      {/* ANIMATION SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Animation />
      </motion.div>

      {/* SUBSCRIPTION PLANS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <SubscriptionPlans />
      </motion.div>

      {/* COFFEE STORY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CoffeeStory />
      </motion.div>

      {/* NEWSLETTER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Newsletter />
      </motion.div>
    </div>
  );
}
