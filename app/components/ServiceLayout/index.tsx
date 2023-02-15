"use client";

import { motion } from "framer-motion";

import Image from "next/image";

const ServiceLayout = () => {
  return (
    <section className="w-full">
      <div className="m-8 p-8 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 rounded flex flex-col items-center sm:flex-row justify-between">
        <div className="flex flex-col gap-8 items-center">
          <h3 className="text-lg sm:text-2xl font-extrabold">Service</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            iure! Ullam quasi fugiat quo natus veniam cum repellendus iste odio,
            perspiciatis eos fugit autem sint veritatis ex, minima possimus
            facere!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-4 py-2 bg-[#2C3F87] rounded-lg text-slate-50 "
          >
            Schedule Service
          </motion.button>
        </div>
        {/* Image */}
        <Image
          src={"/service.webp"}
          alt="service"
          width={450}
          height={300}
          className="w-auto h-auto rounded-xl shadow-xl mt-4"
        />
      </div>
    </section>
  );
};

export default ServiceLayout;
