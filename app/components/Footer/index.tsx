"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className="w-screen flex flex-col sm:flex-row gap-8 sm:gap-12 p-8 bg-[#004D71] text-slate-50">
      <div>
        <h3 className="text-lg sm:text-2xl">Leif Johnson Ford</h3>
        <p className="text-lg pt-2 px-2">501 E Koenig Ln, Austin, Tx 78751</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
        <div>
          <h3 className="text-lg sm:text-2xl">Shop</h3>
          <ul className="px-2 pt-2">
            <li>New</li>
            <li>Pre Owned Vehicles</li>
            <li>Specials</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-2xl">Service</h3>
          <ul className="px-2 pt-2">
            <li>Set Appointment</li>
            <li>Service Department</li>
            <li>Parts Department</li>
            <li>Order Parts</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-2xl">Sell</h3>
          <ul className="px-2 pt-2">
            <li>Sell your vehicle</li>
            <li>Value your trade</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg sm:text-2xl">Finance</h3>
          <ul className="px-2 pt-2">
            <li>Finance Application</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Link href="https://www.facebook.com/leifjohnsonford/" target={"_blank"}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaFacebook size={36} />
          </motion.button>
        </Link>
        <Link href="https://www.instagram.com/leifjohnsonford/" target={"_blank"}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaInstagram size={36} />
          </motion.button>
        </Link>
        <Link href="https://www.youtube.com/user/leifjohnsonford" target={"_blank"}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaYoutube size={36} />
          </motion.button>
        </Link>
        <Link href="https://twitter.com/leifjohnsonford" target={"_blank"}>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <FaTwitter size={36} />
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
