export default function AboutSection({ title, subtitle, text, imageLeft, image }) {
  return (
    <section className="w-full bg-white font-['Poppins',sans-serif] px-6 md:px-16 lg:px-24 py-20 mt-8">

      {/* Heading */}
      <div className="mb-14">
        <h1 className="text-5xl md:text-6xl font-semibold text-[#2D3E3F] leading-tight">
          {title}<br />{subtitle}
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl leading-relaxed">
          {text}
        </p>
      </div>

      {/* Image + Text Row */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
          imageLeft ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div>
          <img
            src={image}
            className="w-full h-[700px] rounded-md object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our beans are ethically sourced from farmers who share our love for quality and sustainability. Each batch is carefully roasted to highlight its unique character — the aroma, the flavor, and the story behind every bean. We blend tradition with innovation, ensuring that every cup of Fika Coffee delivers warmth, comfort, and a taste that lingers long after the last sip.
            <br></br>
            Fika Coffee isn’t just a beverage; it’s an experience we want to bring 
            into your everyday life. Whether you’re starting your morning ritual, 
            sharing a moment with someone you love, or taking a quiet break for yourself, 
            we’re here to make those moments more meaningful. With every cup, we hope to 
            inspire you to slow down, connect, and enjoy life — one sip at a time.
          </p>
        </div>
      </div>

    </section>
  );
}
