export default function AboutSection({ title, subtitle, text, imageLeft, image }) {
  return (
    <section className="w-full bg-white font-['Poppins',sans-serif] px-6 md:px-16 lg:px-24 py-20">

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
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-700 leading-relaxed text-lg">
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. 
            Just click “Edit Text” or double click me to add your own content and make changes to the font. 
            Feel free to drag and drop me anywhere you like on your page. 
            I’m a great place for you to tell a story and let your users know a little more about you.
            <br></br>
            This is a great space to write a long text about your company and your services. 
            You can use this space to go into a little more detail about your company. 
            Talk about your team and what services you provide. 
            Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. 
            Make your company stand out and show your visitors who you are.
          </p>
        </div>
      </div>

    </section>
  );
}
