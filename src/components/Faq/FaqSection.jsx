export default function FAQSection() {
  return (
    <section className="w-full bg-white font-['Poppins',sans-serif] px-6 md:px-16 lg:px-24 py-20">

      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-5xl md:text-6xl font-semibold text-[#2D3E3F] leading-tight">
          FAQ
        </h1>

        <p className="mt-6 text-gray-600 max-w-2xl leading-relaxed">
          I'm a paragraph. Click here to add your own text and edit me. It’s easy.
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font.
        </p>
      </div>

      {/* Dark Section */}
      <div className="w-full h-[300px] md:h-[380px] bg-[#2D3E3F] rounded-md"></div>
    </section>
  );
}
