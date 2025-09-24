import React from "react";

const LaundryWebsiteDark = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-sans bg-gray-900 text-gray-200">
      {/* Navbar */}
      <nav className="bg-gray-950 text-white py-4 px-6 flex justify-between items-center shadow-lg sticky top-0 z-50">
        <h1 className="text-xl font-extrabold tracking-wide text-yellow-400">
          Best Treatment Laundry
        </h1>
        <ul className="hidden md:flex gap-6 font-semibold">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">
        <div className="flex-1 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-yellow-400 drop-shadow-lg">
            Fresh. Clean. Reliable.
          </h2>
          <p className="text-lg mb-6 max-w-lg text-gray-300">
            At{" "}
            <span className="font-bold text-white">
              Best Treatment Laundry & Cleaning Services
            </span>
            , located at Abiola Way, Abeokuta, we give your clothes the special
            care they deserve.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-8 py-3 rounded-full shadow-lg transition">
            🚚 Book a Pickup
          </button>
        </div>
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/600x400?text=Laundry+Service"
            alt="Laundry"
            className="rounded-2xl shadow-2xl w-full"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-16 py-12 bg-gray-800 text-center">
        <h3 className="text-3xl font-extrabold text-yellow-400 mb-6">
          About Us
        </h3>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          We are committed to delivering top-quality laundry and cleaning
          services with modern equipment and eco-friendly detergents. Our
          mission is to provide convenience, reliability, and a spotless finish
          every time.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-6 md:px-16 py-16 bg-gray-900 text-center">
        <h3 className="text-3xl font-extrabold mb-10 text-yellow-400">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">
              Dry Cleaning
            </h4>
            <p className="text-gray-400">
              Gentle and professional dry cleaning for all fabrics.
            </p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">
              Washing & Ironing
            </h4>
            <p className="text-gray-400">
              Complete washing and ironing for everyday clothes.
            </p>
          </div>
          <div className="bg-gray-800 shadow-lg rounded-xl p-6 hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2 text-yellow-300">
              Home/Office Cleaning
            </h4>
            <p className="text-gray-400">
              Professional cleaning services for homes and offices.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-16 py-16 bg-gray-950 text-center">
        <h3 className="text-3xl font-extrabold mb-6 text-yellow-400">
          Contact Us
        </h3>
        <p className="mb-2 text-lg">📍 Abiola Way, Abeokuta</p>
        <p className="mb-2 text-lg">📞 08012345678</p>
        <p className="mb-8 text-lg">📧 info@besttreatmentlaundry.com</p>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-3 rounded-full font-bold shadow-lg">
          ✉️ Send a Message
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 text-center py-4">
        <p>
          © {new Date().getFullYear()} Best Treatment Laundry & Cleaning
          Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LaundryWebsiteDark;
