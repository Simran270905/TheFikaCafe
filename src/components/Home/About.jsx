import Image4 from "../../assets/image/flycoffee.jpg";

export default function AboutSection() {
  return (
    <section className="relative w-full mt-0">
      <img
        src={Image4}
        alt="About Coffee"
        className="w-full h-[400px] md:h-[500px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start px-12 py-12 text-white">
        <h2 className="text-4xl font-bold mb-2 font-serif text-black">About Us</h2>
        <h3 className="text-2xl mb-4 font-serif text-black">
          Speciality Coffee for Every Taste
        </h3>
        <p className="max-w-lg mb-6 font-serif text-black">
          At Coffee Club, we believe every cup tells a story...
        </p>
        <button className="bg-[#6B4A2D] text-white px-6 py-2 rounded-full text-sm hover:bg-[#5a3e26] transition">
          Read More
        </button>
      </div>
    </section>
  );
}
