import Image5 from "../../assets/image/hero-coffee.jpg";

export default function Hero() {
  return (
    <section>
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
        <img
          src={Image5}
          alt="Coffee subscription box"
          className="w-[1500px] h-[800px] object-cover object-center mt-15"
        />

      </section>

  );
}
