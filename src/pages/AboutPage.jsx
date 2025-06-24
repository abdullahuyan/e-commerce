import React from "react";
import Partner from "../componenets/Partner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function AboutPage() {
  return (
    <div className=" text-[#252B42]">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-white">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <p className="uppercase text-sm font-semibold text-gray-500 mb-4">About Company</p>
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
          <p className="text-gray-600 mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-[#23A6F0] text-white px-6 py-3 rounded hover:bg-blue-600">
            Get Quote Now
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 relative flex justify-center mb-10 md:mb-0">
          <div className="bg-pink-100 rounded-full w-72 h-72 flex justify-center items-center relative z-0">
            <img
              src="/path/to/shop-girl.png"
              alt="About visual"
              className="w-52 h-auto object-contain z-10"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="grid md:grid-cols-2 gap-10 px-6 md:px-20 py-10 bg-white">
        <div>
          <p className="text-red-500 font-semibold">Problems trying</p>
          <h3 className="text-lg font-semibold mt-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <p className="text-gray-600">
          Problems trying to resolve the conflict between the two major realms of Classical physics:
          Newtonian mechanics
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 md:px-20 py-10 text-center bg-white">
        {[
          { number: "15K", label: "Happy Customers" },
          { number: "150K", label: "Monthly Visitors" },
          { number: "15", label: "Countries Worldwide" },
          { number: "100+", label: "Top Partners" },
        ].map((stat, idx) => (
          <div key={idx}>
            <h2 className="text-3xl font-bold">{stat.number}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Video Section */}
      <section className="px-6 md:px-20 py-10">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src="/path/to/video-thumbnail.jpg"
            alt="Video"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white rounded-full p-4 shadow-lg cursor-pointer">
              <svg
                className="w-10 h-10 text-[#23A6F0]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 md:px-20 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          {[...Array(3)].map((_, idx) => (
            <div key={idx}>
              <img
                src={`/path/to/team-${idx + 1}.jpg`}
                alt={`Team member ${idx + 1}`}
                className="rounded w-full h-64 object-cover mb-3"
              />
              <h4 className="font-semibold">Username</h4>
              <p className="text-gray-500 text-sm">Profession</p>
              <div className="flex justify-center gap-4 mt-2 mb-8 text-[#23A6F0] text-lg">
                              <FontAwesomeIcon icon={faFacebookF} />
                              <FontAwesomeIcon icon={faInstagram} />
                              <FontAwesomeIcon icon={faTwitter} />
                            </div>
            </div>
          ))}
        </div>
      </section>

      <Partner/>

      {/* Call to Action */}
      <section className="grid md:grid-cols-2 bg-[#23A6F0] text-white px-6 md:px-20 py-16">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Now Let's grow Yours</h3>
          <p className="text-sm">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century.
          </p>
          <button className="bg-white text-[#23A6F0] px-6 py-3 rounded font-semibold">
            Button
          </button>
        </div>
        <div className="mt-10 md:mt-0 flex justify-center">
          <img src="/path/to/grow-girl.png" alt="Grow visual" className="w-60 object-contain" />
        </div>
      </section>

    </div>
  );
}
