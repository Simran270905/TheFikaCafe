import { motion } from "framer-motion";
import ProductGrid from "../components/Shop/ProductGrid";
import Navbar from "../components/Home/Navbar";
import Newsletter from "../components/Home/Newsletter";

export default function Shop() {
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
            Shop Single <br /> Origins & Blends
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 text-gray-600 max-w-2xl"
          >
            Explore our thoughtfully curated collection of fresh roasts, handcrafted blends,
            and brewing essentials. Each product in our shop is selected with intention —
            to elevate your daily coffee ritual. From smooth medium roasts to bold artisan
            beans, our offerings are designed to suit every taste and brewing style. Shop with ease,
            discover your favorites, and bring the warmth of Fika Coffee right to your home.
          </motion.p>
        </motion.div>

        {/* ---------- PRODUCT GRID ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <ProductGrid />
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
