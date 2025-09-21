import React from "react";

export default function LazelleCarWash() {
  return (
    <div className="bg-white text-gray-800 font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full bg-teal-600 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Lazelle Car Wash
          </h1>
          <ul className="hidden md:flex space-x-8 font-medium text-white">
            <li>
              <a href="#home" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-orange-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-orange-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-white px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            <span className="text-orange-400">Lazelle</span> Car Wash
          </h1>
          <p className="text-lg mb-8 text-gray-100">
            Fresh cars, fresh vibes. Relax with catfish soup while your car
            shines like new.
          </p>
          <a
            href="#services"
            className="px-8 py-3 bg-orange-400 hover:bg-orange-500 text-gray-900 font-semibold rounded-full shadow-lg transition"
          >
            See Services
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 md:px-20 text-center bg-gray-50"
      >
        <h2 className="text-3xl font-bold mb-6 text-teal-600">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          At <span className="font-semibold">Lazelle Car Wash</span>, we’ve
          built more than a car wash — we’ve created a **hangout spot**. Come
          for the premium wash, stay for the relaxation lounge and our famous
          catfish grill. 🚗🔥🐟
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 md:px-20 bg-teal-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-500">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1597156776667-501b49b1f3d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FycyUyMHdhc2glMjBuaWdlcmlhfGVufDB8fDB8fHww"
              alt="Car Wash"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Car Wash
              </h3>
              <p className="text-gray-600">
                Professional cleaning services that make your car sparkle.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1675881512867-ddd71d031c15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhciUyMGFuZCUyMGxvdW5nZSUyMGluJTIwbmlnZXJpYXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Relax Center"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Relax Center
              </h3>
              <p className="text-gray-600">
                A cozy lounge with Wi-Fi and refreshments while you wait.
              </p>
            </div>
          </div>

          {/* Service Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
            <img
              src="https://media.istockphoto.com/id/2097404638/photo/pindang-patin-or-pindang-catfish-when-hot-tastes-delicious-traditional-food-from-south.webp?a=1&b=1&s=612x612&w=0&k=20&c=UYXZF_WzZs31di34O6_478gpypZYyuvckpH9F8mUpjU="
              alt="Catfish Grill"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                Catfish Soup
              </h3>
              <p className="text-gray-600">
                Delicious catfish meals freshly grilled to keep you satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 bg-orange-400 text-gray-900 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Visit Lazelle Car Wash today for the ultimate shine and relaxation.
        </p>
        <a
          href="mailto:info@lazellecarwash.com"
          className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow hover:bg-teal-700 transition"
        >
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center">
        <p>
          © {new Date().getFullYear()} Lazelle Car Wash — Fresh Cars, Fresh
          Vibes.
        </p>
      </footer>
    </div>
  );
}
