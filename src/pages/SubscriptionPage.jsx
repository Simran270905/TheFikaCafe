import SubscriptionGrid from "../components/Subscription/SubscriptionGrid";
import Navbar from "../components/Home/Navbar";
import Newsletter from "../components/Home/Newsletter";

export default function Subscription() {
  return (
    <section className="w-full bg-white font-['Poppins',sans-serif] px-6 md:px-16 lg:px-24">
    <div className="mt-3">
              <Navbar />
      {/* ---------- TITLE ---------- */}
      <div className="pt-20 pb-10">
        <h1 className="text-5xl md:text-6xl font-semibold text-[#2D3E3F] leading-tight">
          Shop <br /> Subscription Boxes
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl">
          I'm a paragraph. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font.
        </p>
      </div>

      {/* ---------- PRODUCT GRID ---------- */}
      <SubscriptionGrid />
      <div>
        <Newsletter />
      </div>
      </div>
    </section>
  );
}
