import Video2 from "../../assets/video/video2.mp4";
export default function FAQSection() {
  return (
    <section className="w-full bg-white font-['Poppins',sans-serif] px-6 md:px-16 lg:px-24 py-20 mt-8">

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-5xl md:text-6xl font-semibold text-[#2D3E3F] leading-tight">
          FAQ
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl leading-relaxed">
          Have questions? We’ve got answers. Our FAQ section is designed to help you find everything 
          you need — from details about our roasts and brewing recommendations to shipping, subscriptions, 
          and sustainability practices. We believe in transparency and simplicity, 
          so your coffee experience stays smooth from start to finish. If you need more help, 
          our team is always here to assist you.
        </p>
      </div>

      {/* Dark Section */}
     <video
        src={Video2}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[300px] md:h-[380px] object-cover rounded-md"
      />
      <div className="w-full bg-white rounded-md shadow-md p-6 mt-6">
  {/* Title */}
  <h2 className="text-xl font-semibold text-gray-800 mb-4">
    Have a Question?
  </h2>

  {/* Input Box */}
  <textarea
    placeholder="Type your question here..."
    className="w-full h-28 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
  ></textarea>

  {/* Submit Button */}
  <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition">
    Submit Query
  </button>
</div>

    </section>
  );
}
