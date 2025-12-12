import { motion } from "framer-motion";
import SubscriptionGrid from "../components/Subscription/SubscriptionGrid";
import Navbar from "../components/Home/Navbar";
import Newsletter from "../components/Home/Newsletter";

export default function Subscription() {
  return (
    <section className="w-full bg-white font-['Poppins',sans-serif] px-6 md:px-16 lg:px-24">
      <div className="mt-8">
        <Navbar />

        {/* ---------- TITLE ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pt-20 pb-10"
        >
          <h1 className="text-5xl md:text-6xl font-semibold text-[#2D3E3F] leading-tight">
            Shop <br /> Subscription Boxes
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 text-gray-600 max-w-2xl"
          >
            Never run out of your favorite brew again. With the Fika Coffee Subscription,
            freshly roasted beans arrive at your doorstep exactly when you need them.
            Choose your blend, set your schedule, and let us handle the rest.
            Our flexible subscriptions ensure you always have the perfect coffee for every moment —
            whether you're fueling your day or embracing a peaceful pause.
            Simple, reliable, and crafted around your lifestyle.
          </motion.p>
        </motion.div>

        {/* ---------- SUBSCRIPTION GRID ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <SubscriptionGrid />
        </motion.div>

        {/* ---------- NEWSLETTER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Newsletter />
        </motion.div>
      </div>
    </section>
  );
}
