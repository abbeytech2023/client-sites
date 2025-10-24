import React from "react";
import { Building2, Hammer, Home, Truck } from "lucide-react";

export default function GmanConstructionWithNav() {
  const services = [
    {
      icon: <Building2 className="w-10 h-10 text-yellow-500" />,
      title: "Real Estate Contracting",
      description:
        "We manage property projects from design and planning to construction and finishing with precision and integrity.",
    },
    {
      icon: <Hammer className="w-10 h-10 text-yellow-500" />,
      title: "Construction & Development",
      description:
        "We deliver solid, modern, and long-lasting structures with the highest quality standards.",
    },
    {
      icon: <Truck className="w-10 h-10 text-yellow-500" />,
      title: "Building Materials Supply",
      description:
        "Your trusted supplier for premium-grade cement, rods, tiles, blocks, and other construction materials.",
    },
    {
      icon: <Home className="w-10 h-10 text-yellow-500" />,
      title: "Housing & Property Agency",
      description:
        "We connect you to verified properties for sale, rent, or investment through trusted partnerships.",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen font-sans">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm text-gray-100 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Building2 className="w-7 h-7 text-yellow-400" />
            <span className="font-bold text-lg text-yellow-400">
              Gman Construction
            </span>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center px-6 mt-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
            Building the Future with Strength
          </h1>
          <p className="text-gray-100 max-w-2xl mx-auto mb-6 text-lg">
            Gman Real Estate & Construction Services — your trusted partner in
            real estate, development, and property solutions.
          </p>
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition">
            Get a Quote
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 text-center bg-gray-100"
      >
        <h2 className="text-3xl font-bold mb-4 text-yellow-600">About Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          <span className="font-semibold text-gray-900">
            Gman Real Estate & Construction Services
          </span>{" "}
          is committed to excellence in design, engineering, and construction.
          Our team delivers trusted solutions across real estate, housing,
          materials supply, and infrastructure development.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-200 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-yellow-600">
            Our Core Services
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="bg-yellow-500 text-gray-900 py-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-800">
          Partner with Gman Real Estate & Construction for durable structures
          and visionary development projects.
        </p>
        <button className="bg-gray-900 text-yellow-400 font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6 text-sm">
        © {new Date().getFullYear()} Gman Real Estate & Construction Services.{" "}
        <span className="text-yellow-400">
          Built with integrity and innovation.
        </span>
      </footer>
    </div>
  );
}
