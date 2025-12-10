import Icon from "../assets/image/icon.png";
import Image1 from "../assets/image/image11.jpg";
import Image2 from "../assets/image/image2.png";
import Video from "../assets/video/video1.mp4";
import Image3 from "../assets/image/coffeepluck.jpg";
import Image4 from "../assets/image/flycoffee.jpg";
import Image5 from "../assets/image/hero-coffee.jpg";
import Image6 from "../assets/image/image6.jpg";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [offset, setOffset] = useState(0);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset * 0.15);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-100">
      
      {/* ================= WHITE SECTION + NAVBAR ================= */}
      <section className="w-full bg-white px-12 pt-20 pb-12 relative">

        {/* Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md px-12 py-6 flex items-center justify-between text-gray-800">
          <div className="flex items-center gap-8">
            <div className="flex items-center text-xl tracking-wide">
              <span className="font-['Poppins',serif] mr-1">THE FIKA</span>
              <span className="font-['Caveat',cursive]">CAFE</span>
            </div>

            <ul className="flex gap-6">
              <li className="hover:text-gray-500 cursor-pointer">Shop</li>
              <li className="hover:text-gray-500 cursor-pointer">Subscriptions</li>
              <li className="hover:text-gray-500 cursor-pointer">About</li>
              <li className="hover:text-gray-500 cursor-pointer">FAQ</li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <span className="cursor-pointer">🛒 0</span>
            <span className="cursor-pointer flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-gray-300"></span>
              Log In
            </span>
          </div>
        </nav>

        {/* Subscription Text */}
        <div className="max-w-lg flex flex-col gap-11 mt-8">
          <h1
            style={{
              fontFamily: "'Inter', serif",
              fontSize: "55px",
              fontWeight: "500",
              color: "#3A4A45",
              lineHeight: "1.1",
              margin: 0,
            }}
          >
            Monthly Roasted <br /> Coffee Subscriptions
          </h1>

          <button className="mt-0 bg-[#7B6C53] text-white px-8 py-2 rounded-full text-lg shadow-md hover:opacity-90 transition">
            Subscribe
          </button>
        </div>

      </section>

      {/* ================= HERO IMAGE ================= */}
      <section className="w-full">
        <img
          src={Image5}
          alt="Coffee subscription box"
          className="w-[1500px] h-[800px] object-cover object-center"
        />
      </section>

      {/* ================================================================================= */}
      {/* ======================= MAIN WHITE SECTION ====================================== */}
      {/* ================================================================================= */}

      <section className="w-full bg-white font-['Poppins',sans-serif]">

        {/* ================= HOW IT WORKS ================= */}
        <div className="text-left py-12 px-6">
          <h1 className="text-4xl md:text-5xl text-[#2D3B32]">How It Works</h1>
        </div>

        <div className="relative w-full">

          {/* Video */}
          <div className="relative w-full h-[380px] md:h-[500px] overflow-hidden">
            <video
              src={Video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>

          {/* Steps Box */}
          <div
            className="
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
              bg-white shadow-lg rounded-xl
              w-[90%] md:w-[60%]
              py-10 px-6 text-center
            "
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* Step 1 */}
              <div>
                <p className="text-[#4A5750] font-semibold text-lg">01</p>
                <img src={Image2} className="w-18 mx-auto mb-0" alt="Coffee" />
                <p className="text-[#4A5750] text-lg font-medium leading-tight">
                  Pick Your <br /> Coffee
                </p>
              </div>

              {/* Step 2 */}
              <div>
                <p className="text-[#4A5750] font-semibold text-lg">02</p>
                <img
                  src="https://img.icons8.com/ios/100/meal.png"
                  className="w-12 mx-auto mb-3"
                  alt="Plan"
                />
                <p className="text-[#4A5750] text-lg font-medium leading-tight">
                  Select Your <br /> Subscription Plan
                </p>
              </div>

              {/* Step 3 */}
              <div>
                <p className="text-[#4A5750] font-semibold text-lg">03</p>
                <img
                  src="https://img.icons8.com/ios/100/coffee.png"
                  className="w-12 mx-auto mb-3"
                  alt="Delivery"
                />
                <p className="text-[#4A5750] text-lg font-medium leading-tight">
                  Enjoy Your <br /> Monthly Delivery
                </p>
              </div>

            </div>

            <button className="mt-10 bg-[#7B6C53] text-white px-8 py-2 rounded-full text-lg shadow-md hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* ================= ABOUT IMAGE SECTION ================= */}
        <section className="relative w-full mt-12">
          <img
            src={Image4}
            alt="About Coffee"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-12 py-12 text-white">
            <h2 className="text-4xl font-bold mb-2 font-serif text-black">About Us</h2>
            <h3 className="text-2xl mb-4 font-serif text-black">Speciality Coffee for Every Taste</h3>
            <p className="max-w-lg mb-6 font-serif text-black">
              At Coffee Club, we believe every cup tells a story...
            </p>
            <button className="bg-[#6B4A2D] text-white px-6 py-2 rounded-full text-sm hover:bg-[#5a3e26] transition">
              Read More
            </button>
          </div>
        </section>

        {/* ================== LAST TWO IMAGES (WITH PARALLAX) ================== */}
        {/* LAST TWO IMAGES SECTION */}
                <section className="w-full mt-0">

                {/* Floating Coffee Beans Strip */}
                <div className="w-full overflow-hidden">
                    <img 
                    src={Image1}
                    className="w-full object-cover"
                    alt="Coffee Beans Strip"
                    />
                </div>

                {/* Coffee of the Month Box Image */}
                <div className="w-full">
                    <img 
                    src={Image6} 
                    className="w-full object-cover"
                    alt="Coffee of the Month Box"
                    />
                </div>

                </section>

        {/* ================= OUR SUBSCRIPTIONS ================= */}
        <section className="py-20">
          <h1 className="text-center text-4xl md:text-5xl font-semibold text-[#2D3B32] mb-20">
            Our Subscriptions
          </h1>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-0 px-6 text-center relative">
            {/* Column 1 */}
            <div className="py-10 flex flex-col items-center">
              <img src={Icon} className="w-18 mb-1 opacity-80" />
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
              <img src={Icon} className="w-18 mb-1 opacity-80" />
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
              <img src={Icon} className="w-18 mb-1 opacity-80" />
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

        {/* ================= IMAGE + TEXT SECTION ================= */}
        <section className="w-full bg-gray-100 px-12 py-16 flex flex-col md:flex-row items-center gap-12">

          <div className="w-full md:w-1/2">
            <img
              src={Image3}
              alt="Coffee Plantation"
              className="w-full h-[500px] md:h-[600px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-gray-900 font-serif">
              Better Coffee for a Better World
            </h2>
            <p className="text-black font-serif">
              From the lush green hills where our coffee beans are grown...
            </p>
            <button className="bg-[#6B4A2D] text-white px-6 py-2 rounded-full text-sm hover:bg-[#5a3e26] transition w-max">
              Read More
            </button>
          </div>

        </section>

        {/* ================= NEWSLETTER ================= */}
        <section className="py-20 px-6">
          <div className="w-full h-px bg-[#D3D3D3] mb-16"></div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Left */}
            <div>
              <h2 className="text-2xl font-semibold text-[#2D3B32] mb-4">
                Coffee Club Newsletter
              </h2>
              <p className="text-[#4A5750] text-sm mb-6">
                Sign up to receive updates.
              </p>
              <label className="text-[#4A5750] text-sm">Email *</label>
              <input
                type="email"
                className="w-full border border-[#BFBFBF] mt-2 px-3 py-2 rounded-sm"
              />
              <div className="flex items-center gap-3 mt-4">
                <input type="checkbox" className="w-4 h-4" />
                <p className="text-[#4A5750] text-sm">
                  Yes, subscribe me. *
                </p>
              </div>
              <button className="mt-6 bg-[#7B6C53] text-white px-8 py-2 rounded-sm shadow">
                Submit
              </button>
            </div>

            {/* Middle */}
            <div>
              <h2 className="text-2xl font-semibold text-[#2D3B32] mb-4">Shop</h2>
              <ul className="text-[#4A5750] text-sm space-y-3">
                <li>Single Origins</li>
                <li>Subscription Boxes</li>
                <li>Shipping & Returns</li>
                <li>Store Policy</li>
                <li>Payment Methods</li>
                <li>FAQ</li>
              </ul>
            </div>

            {/* Right */}
            <div>
              <h2 className="text-2xl font-semibold text-[#2D3B32] mb-4">Contact</h2>
              <p className="text-[#4A5750] text-sm leading-relaxed">
                500 Terry Francine Street <br />
                San Francisco, CA 94158 <br />
                info@mysite.com <br />
                Tel: 123-456-7890
              </p>
              <div className="flex gap-4 mt-6 text-[#2D3B32]">
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </div>
            </div>

          </div>

          <p className="text-center text-[#4A5750] text-sm mt-20">
            © 2035 by Coffee Club.
          </p>
        </section>

      </section>

    </div>
  );
}
