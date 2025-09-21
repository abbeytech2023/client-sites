import React from "react";

// Alternative landing page template for a granite, gravel, stone dust, sharp sand & trailer-driver marketing business.
// Uses TailwindCSS for styling, with a darker theme and more emphasis on bold visuals.

export default function StoneTrailerLanding() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <header className="bg-gray-800 shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-orange-400">
            Stone & Trailer Co.
          </h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#materials" className="hover:text-orange-400">
              Materials
            </a>
            <a href="#services" className="hover:text-orange-400">
              Services
            </a>
            <a href="#drivers" className="hover:text-orange-400">
              Trailer Drivers
            </a>
            <a href="#contact" className="hover:text-orange-400">
              Contact
            </a>
          </nav>
          <button className="md:hidden bg-gray-700 px-3 py-2 rounded">
            Menu
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1581092787765-7e79e3b2d08f?auto=format&q=75&w=1600&fit=crop')] bg-cover bg-center h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white max-w-2xl leading-tight">
            Supplying Stones & Sand with Trusted Trailer Drivers
          </h2>
          <p className="mt-4 max-w-xl text-gray-300">
            Granite, gravel, stone dust, sharp sand — delivered fast and safe by
            our professional drivers.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold"
            >
              Get A Quote
            </a>
            <a
              href="#drivers"
              className="bg-gray-100 text-gray-900 px-6 py-3 rounded-md font-semibold"
            >
              Book Driver
            </a>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section id="materials" className="container mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-orange-400">Our Materials</h3>
        <p className="mt-2 text-gray-400">
          Quality aggregates available in bulk and retail quantities.
        </p>

        <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Granite", price: "₦5,000/ton" },
            { title: "Gravel", price: "₦3,500/ton" },
            { title: "Stone Dust", price: "₦2,800/ton" },
            { title: "Sharp Sand", price: "₦2,000/ton" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="h-32 bg-gray-700 rounded-md flex items-center justify-center text-gray-500">
                Image
              </div>
              <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 text-gray-400">Starting from {item.price}</p>
              <a
                href="#contact"
                className="mt-4 inline-block bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md font-semibold"
              >
                Order Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-orange-400">Services</h3>
            <ul className="mt-6 space-y-3 text-gray-300 list-disc list-inside">
              <li>Supply & delivery of aggregates</li>
              <li>Custom stone & sand mixes</li>
              <li>Trailer hire and logistics</li>
              <li>Bulk orders and flexible pricing</li>
            </ul>
          </div>

          <div className="bg-gray-700 p-6 rounded-lg shadow-md">
            <h4 className="font-semibold text-lg mb-4">Why Choose Us?</h4>
            <ul className="space-y-2 text-gray-200">
              <li>✅ Fast delivery</li>
              <li>✅ Verified drivers</li>
              <li>✅ Quality materials</li>
              <li>✅ Affordable rates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trailer Drivers */}
      <section id="drivers" className="container mx-auto px-6 py-16">
        <h3 className="text-2xl font-bold text-orange-400">Trailer Drivers</h3>
        <p className="mt-2 text-gray-400">
          Connect with trusted drivers ready to deliver your order safely and on
          time.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Driver A", cap: "20 tons", phone: "+2348000000001" },
            { name: "Driver B", cap: "25 tons", phone: "+2348000000002" },
            { name: "Driver C", cap: "30 tons", phone: "+2348000000003" },
          ].map((driver) => (
            <div
              key={driver.name}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="h-24 bg-gray-700 rounded-md flex items-center justify-center text-gray-500">
                Truck
              </div>
              <h4 className="mt-4 font-semibold">{driver.name}</h4>
              <p className="text-gray-400">Capacity: {driver.cap}</p>
              <p className="mt-2">
                📞{" "}
                <a
                  href={`tel:${driver.phone}`}
                  className="text-orange-400 font-semibold"
                >
                  {driver.phone}
                </a>
              </p>
              <a
                href="#contact"
                className="mt-4 inline-block bg-orange-500 px-4 py-2 rounded-md"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-gray-800 py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-orange-400">Contact Us</h3>
            <p className="mt-4 text-gray-300">
              We’re available on phone and WhatsApp for all orders and
              inquiries.
            </p>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li>
                📞 Phone:{" "}
                <a href="tel:+2348000000000" className="text-orange-400">
                  +234 800 000 0000
                </a>
              </li>
              <li>
                💬 WhatsApp:{" "}
                <a
                  href="https://wa.me/2348000000000"
                  className="text-orange-400"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li>📍 Location: Lagos, Nigeria</li>
            </ul>
          </div>

          <form className="bg-gray-700 p-6 rounded-lg shadow-md space-y-4">
            <h4 className="text-lg font-semibold">Request a Quote</h4>
            <input
              className="w-full border border-gray-600 bg-gray-800 rounded-md px-3 py-2"
              placeholder="Full Name"
            />
            <input
              className="w-full border border-gray-600 bg-gray-800 rounded-md px-3 py-2"
              placeholder="Phone or WhatsApp"
            />
            <select className="w-full border border-gray-600 bg-gray-800 rounded-md px-3 py-2">
              <option>Choose Material/Service</option>
              <option>Granite</option>
              <option>Gravel</option>
              <option>Stone Dust</option>
              <option>Sharp Sand</option>
              <option>Trailer Driver</option>
            </select>
            <textarea
              className="w-full border border-gray-600 bg-gray-800 rounded-md px-3 py-2"
              rows={4}
              placeholder="Message / Address"
            ></textarea>
            <button
              type="submit"
              className="bg-orange-500 px-4 py-2 rounded-md font-semibold"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-6 text-gray-400 text-center text-sm">
        © {new Date().getFullYear()} Stone & Trailer Co. — All rights reserved.
      </footer>
    </div>
  );
}
