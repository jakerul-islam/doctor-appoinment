"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-10">
        
        {/* Logo + About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-xl font-bold text-blue-600">
              DocAppoint
            </h1>
          </div>
          <p className="text-sm leading-relaxed">
            Book your doctor appointments easily and manage your health care
            with a modern digital solution.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/appointments" className="hover:text-blue-500 transition">
                All Appointment
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-blue-500 transition">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Subscribe</h2>
          <p className="text-sm mb-3">
            Get updates and health tips in your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full rounded-l-md border dark:bg-gray-800 outline-none"
            />
            <button className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 transition">
              Join
            </button>
          </div>
        </div>

        {/* Social */}
        <div>
          <h2 className="font-semibold text-lg mb-4">Follow Us</h2>
          <div className="flex gap-4 text-lg">
            
            <a
              href="#"
              className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition transform hover:scale-110"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-black hover:text-white transition transform hover:scale-110"
            >
            <FaTwitter />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-pink-500 hover:text-white transition transform hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-white dark:bg-gray-800 hover:bg-blue-700 hover:text-white transition transform hover:scale-110"
            >
              <FaLinkedinIn />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} DocAppoint. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;