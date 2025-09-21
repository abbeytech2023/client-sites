import React from "react";

export default function EzeNwanneAutos() {
  return (
    <div className="font-sans text-gray-900 bg-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between p-4 mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold text-red-600">Eze Nwanne Autos</h1>
          <nav className="hidden space-x-6 md:flex">
            <a href="#home" className="hover:text-red-600">
              Home
            </a>
            <a href="#cars" className="hover:text-red-600">
              Cars
            </a>
            <a href="#accessories" className="hover:text-red-600">
              Accessories
            </a>
            <a href="#about" className="hover:text-red-600">
              About
            </a>
            <a href="#contact" className="hover:text-red-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 text-center text-white bg-gray-900">
        <h2 className="mb-4 text-4xl font-bold">Welcome to Eze Nwanne Autos</h2>
        <p className="mb-6 text-lg">
          Your trusted dealer for quality cars and premium car accessories.
        </p>
        <a
          href="#cars"
          className="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Browse Cars
        </a>
      </section>

      {/* Cars Section */}
      <section id="cars" className="px-4 py-16 mx-auto max-w-7xl">
        <h3 className="mb-10 text-3xl font-semibold text-center">Our Cars</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {["Toyota Camry", "Honda Accord", "Mercedes Benz"].map((car, idx) => (
            <div key={idx} className="p-4 bg-white shadow-md rounded-xl">
              <img
                src={`https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRveW90YSUyMGNhbXJ5fGVufDB8fDB8fHww`}
                alt={car}
                className="mb-4 rounded-lg"
              />
              <h4 className="text-xl font-bold">{car}</h4>
              <p className="text-gray-600">Durable, stylish, and affordable.</p>
              <button className="px-4 py-2 mt-3 text-white bg-red-600 rounded-lg hover:bg-red-700">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Accessories Section */}
      <section id="accessories" className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <h3 className="mb-10 text-3xl font-semibold text-center">
            Car Accessories
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {["Car Mats", "Alloy Wheels", "Sound Systems"].map((item, idx) => (
              <div key={idx} className="p-4 bg-white shadow-md rounded-xl">
                <img
                  src={`https://source.unsplash.com/400x250/?${item}`}
                  alt={item}
                  className="mb-4 rounded-lg"
                />
                <h4 className="text-xl font-bold">{item}</h4>
                <p className="text-gray-600">Top-quality and long-lasting.</p>
                <button className="px-4 py-2 mt-3 text-white bg-red-600 rounded-lg hover:bg-red-700">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl px-4 py-16 mx-auto text-center">
        <h3 className="mb-6 text-3xl font-semibold">About Us</h3>
        <p className="leading-relaxed text-gray-700">
          At <span className="font-bold">Eze Nwanne Autos</span>, we pride
          ourselves on delivering excellence in automobile sales and car
          accessories. Our mission is to provide reliable vehicles and
          accessories that meet your needs while giving you value for your
          money.
        </p>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 text-center text-white bg-gray-900"
      >
        <h3 className="mb-6 text-3xl font-semibold">Get in Touch</h3>
        <p className="mb-6">
          Have questions or ready to buy? Contact us today!
        </p>
        <div className="space-y-3">
          <p>📞 Phone: +234 800 123 4567</p>
          <p>📧 Email: ezenwanneautos@gmail.com</p>
          <p>📍 Address: Lagos, Nigeria</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 bg-gray-800">
        <p>
          © {new Date().getFullYear()} Eze Nwanne Autos. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
