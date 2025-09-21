import React from "react";

function Ucee() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
      {/* Navbar */}
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-700">Ucee Electricals</h1>
        <nav>
          <ul className="flex space-x-6 font-medium">
            <li>
              <a href="#home" className="hover:text-blue-700">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-blue-700">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-700">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-700">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-blue-50"
      >
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4 leading-tight text-blue-900">
            Powering Homes & Industries <br /> with Reliable Electricals
          </h2>
          <p className="text-gray-600 mb-6">
            Wires, cables, fans, sockets, and electronics designed with safety,
            quality, and durability for your needs.
          </p>
          <a
            href="#products"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            Browse Products
          </a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://via.placeholder.com/450x320"
            alt="Electrical Products"
            className="rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-8 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">
          Our Top Products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Copper Wire", price: "₦20,000" },
            { name: "Ceiling Fan", price: "₦35,000" },
            { name: "Wall Socket", price: "₦5,000" },
            { name: "Cable Roll", price: "₦15,000" },
          ].map((p, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow-sm hover:shadow-md transition p-6 text-center bg-white"
            >
              <img
                src="https://via.placeholder.com/160"
                alt={p.name}
                className="h-28 mx-auto mb-4"
              />
              <h4 className="font-semibold text-lg">{p.name}</h4>
              <p className="text-blue-700 font-bold">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-900">About Us</h3>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          At Ucee Electricals, we pride ourselves on delivering quality
          electrical products for homes, businesses, and industries. Our mission
          is to ensure safe and reliable connections that power your everyday
          life. From copper wires to modern electronics, we are your trusted
          partner in electrical solutions.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-20 text-center">
        <h3 className="text-3xl font-bold mb-6 text-blue-900">Contact Us</h3>
        <p className="mb-2">📧 Email: uceeelectricals@gmail.com</p>
        <p className="mb-2">📞 Phone: +234 812 345 6789</p>
        <p>📍 Location: Lagos, Nigeria</p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4">
        <p>
          © {new Date().getFullYear()} Ucee Electricals. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Ucee;
