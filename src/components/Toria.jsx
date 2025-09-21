import React from "react";

export default function ToriaBodyHaven() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-6 items-center px-6 md:px-20 py-20">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-pink-600">
            ToriaBodyHaven
          </h1>
          <p className="text-xl italic text-gray-600 mb-4">
            “Get that banging body here”
          </p>
          <p className="text-lg mb-6">
            We improve your sex life by creating natural nutrient-rich herbal
            products that enhance your body, boost your confidence, and give you
            the perfect shape.
          </p>
          <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow hover:bg-pink-700 transition">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Body Wellness"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700">
          At <span className="font-semibold">ToriaBodyHaven</span>, we believe
          that beauty and confidence begin with nature. Our herbal products are
          designed to naturally enhance your body, elevate intimacy, and improve
          your overall wellness.
        </p>
      </section>

      {/* Products / Benefits */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Natural Herbs</h3>
            <p>
              Carefully blended natural ingredients for safe and effective
              results.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Body Enhancement</h3>
            <p>
              Achieve your desired curves and body confidence with our products.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Boost Intimacy</h3>
            <p>
              Designed to help improve your sex life and relationship
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-pink-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Body Transformation
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Don’t wait to look and feel amazing. Begin your journey with
          ToriaBodyHaven today.
        </p>
        <button className="px-6 py-3 bg-white text-pink-600 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Order Now
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p className="mb-2">
          © {new Date().getFullYear()} ToriaBodyHaven. All Rights Reserved.
        </p>
        <p>
          Contact us:{" "}
          <a
            href="mailto:info@toriabodyhaven.com"
            className="text-pink-400 hover:underline"
          >
            info@toriabodyhaven.com
          </a>
        </p>
      </footer>
    </div>
  );
}
