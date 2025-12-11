import Video from "../../assets/video/video1.mp4";
import Image2 from "../../assets/image/image2.png";

export default function HowItWorks() {
  return (
    <section className="w-full bg-white font-['Poppins',sans-serif] ">

        {/* ================= HOW IT WORKS ================= */}
        <div className="text-left py-12 px-6 mt-0">
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
    </section>
     );
}


