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
            src="https://images.unsplash.com/photo-1758348607292-60f450b10c40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWNhbCUyMHN0b3JlfGVufDB8fDB8fHww"
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
            {
              name: "Copper Wire",
              price: "₦20,000",
              image:
                "https://images.unsplash.com/photo-1678119895596-411628b1f6be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29wcGVyJTIwd2lyZXxlbnwwfHwwfHx8MA%3D%3D",
            },
            {
              name: "Ceiling Fan",
              price: "₦35,000",
              image:
                "https://media.istockphoto.com/id/2168958504/photo/wooden-ceiling-fan.webp?a=1&b=1&s=612x612&w=0&k=20&c=n1_Oii6CUXsRId89IsdTvyazZaIXl7AdnVKmaUYeLIU=",
            },
            {
              name: "Wall Socket",
              price: "₦5,000",
              image:
                "https://media.istockphoto.com/id/184303060/photo/uk-british-electrical-plug-socket-and-plug-on-a-wall.webp?a=1&b=1&s=612x612&w=0&k=20&c=2vLF7Ui3p0Cmz8nFlRnbzzZ7VzbuZgH0a9FLYEafnlI=",
            },
            {
              name: "Cable Roll",
              price: "₦15,000",
              image:
                "https://media.istockphoto.com/id/2159463506/photo/three-rolls-of-electrical-wire-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=T0zd6WlPp1g6v0fqhcXIxAkGtpB052uHEsy6Oo0Yab0=",
            },
          ].map((p, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow-sm hover:shadow-md transition p-6 text-center bg-white"
            >
              <img src={p.image} alt={p.name} className="h-28 mx-auto mb-4" />
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
        <p className="mb-2">📞 Phone: +2348064428240</p>
        <p>📍 Location: Ogun Abeokuta Abiola-way odo-eran, Nigeria</p>
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
