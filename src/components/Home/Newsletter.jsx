export default function Newsletter() {
  return (
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
            <p className="text-[#4A5750] text-sm">Yes, subscribe me. *</p>
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
        © 2035 by The Fika Coffee.
      </p>
    </section>
  );
}
