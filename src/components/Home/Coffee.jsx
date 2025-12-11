import Image3 from "../../assets/image/coffeepluck.jpg";

export default function CoffeeStory() {
  return (
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
  );
}
