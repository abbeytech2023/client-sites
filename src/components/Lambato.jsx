import React from "react";

const DjLambato = () => {
  const djInfo = {
    name: "DJ Lambato",
    about:
      "DJ Lambato is a professional Nigerian DJ and sound engineer who brings the best vibes to weddings, parties, and events. We also offer premium speaker rentals and lighting setups for all kinds of occasions.",
    services: [
      {
        title: "DJ Services",
        image:
          "https://images.unsplash.com/photo-1608889335941-3a94a953b016?auto=format&fit=crop&w=800&q=80",
        desc: "Turn up your events with professional DJ mixes and live performances.",
      },
      {
        title: "Speaker Rentals",
        image:
          "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?auto=format&fit=crop&w=800&q=80",
        desc: "High-quality sound systems available for rent at affordable rates.",
      },
      {
        title: "Lighting & Stage Setup",
        image:
          "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80",
        desc: "Create stunning atmospheres with professional lighting and sound effects.",
      },
    ],
    contact: {
      phone: "+234 810 000 0000",
      email: "djlambato@gmail.com",
      instagram: "@djlambato_official",
    },
    address: "Fajol, Obantoko, Abeokuta, Ogun State, Nigeria",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Vinyl_record_icon.svg",
  };

  return (
    <div className="bg-black text-white font-sans scroll-smooth">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md border-b border-gray-800">
        <nav className="flex items-center justify-between px-6 md:px-16 py-4">
          <div className="flex items-center space-x-3">
            <img
              src={djInfo.logo}
              alt="DJ Lambato Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-xl font-bold text-yellow-400">
              DJ LAMBATO
            </span>
          </div>
          <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
            <li>
              <a href="#home" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="hidden md:inline-block bg-yellow-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Book Now
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583095440398-d95d3e6d9b52?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 px-6 mt-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg">
            DJ LAMBATO
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Vibes, sound, and energy that move the crowd — plus premium speaker
            rentals for your next event.
          </p>
          <a
            href="#services"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="py-20 px-6 md:px-16 text-center bg-gradient-to-b from-gray-900 to-black"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">About</h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {djInfo.about}
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="py-20 px-6 md:px-16 bg-black text-center border-t border-gray-800"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {djInfo.services.map((service, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transform transition duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-20 px-6 md:px-16 bg-gradient-to-t from-gray-900 to-black text-center"
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-8">Contact Us</h2>
        <p className="text-gray-300 mb-2">
          📍 <strong>Address:</strong> {djInfo.address}
        </p>
        <p className="text-gray-300 mb-2">
          📞 <strong>Phone:</strong> {djInfo.contact.phone}
        </p>
        <p className="text-gray-300 mb-2">
          📧 <strong>Email:</strong> {djInfo.contact.email}
        </p>
        <p className="text-gray-300 mb-8">
          💬 <strong>Instagram:</strong>{" "}
          <a
            href={`https://instagram.com/${djInfo.contact.instagram.replace(
              "@",
              ""
            )}`}
            className="text-yellow-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            {djInfo.contact.instagram}
          </a>
        </p>
        <a
          href="mailto:djlambato@gmail.com"
          className="bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-400 transition duration-300"
        >
          Send a Message
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-center py-6 border-t border-gray-800 text-gray-400 text-sm">
        © {new Date().getFullYear()} DJ Lambato. All rights reserved.
      </footer>
    </div>
  );
};

export default DjLambato;
