import Icon from "../../assets/image/icon.png";

export default function SubscriptionPlans() {
  return (
    <section className="py-20 mt-0">
      <h1 className="text-center text-4xl md:text-5xl font-semibold text-[#2D3B32] mb-20">
        Our Subscriptions
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 px-6 text-center relative">
        {/* Column 1 */}
        <div className="py-10 flex flex-col items-center">
          <img src={Icon} className="w-18 mb-1 opacity-80" alt="Starter Kit" />
          <h2 className="text-xl font-medium text-[#454645] leading-snug mb-4">
            Coffee Clubs <br /> Starter Kit
          </h2>
          <p className="text-[#4A5750] text-sm w-[80%]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="hidden md:block absolute left-1/3 top-0 h-full w-px bg-[#2D3B32]/25"></div>

        {/* Column 2 */}
        <div className="py-10 flex flex-col items-center">
          <img src={Icon} className="w-18 mb-1 opacity-80" alt="Roasters Picks" />
          <h2 className="text-xl font-medium text-[#454645] leading-snug mb-4">
            Coffee Clubs <br /> Roasters Picks
          </h2>
          <p className="text-[#4A5750] text-sm w-[80%]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="hidden md:block absolute left-2/3 top-0 h-full w-px bg-[#2D3B32]/25"></div>

        {/* Column 3 */}
        <div className="py-10 flex flex-col items-center">
          <img src={Icon} className="w-18 mb-1 opacity-80" alt="Coffee of the Month" />
          <h2 className="text-xl font-medium text-[#454645] leading-snug mb-4">
            Coffee of the <br /> Month
          </h2>
          <p className="text-[#4A5750] text-sm w-[80%]">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center mt-12">
        <button className="bg-[#7B6C53] text-white px-10 py-3 rounded-full text-lg font-medium shadow-md hover:opacity-90 transition">
          Subscribe
        </button>
      </div>
    </section>
  );
}
