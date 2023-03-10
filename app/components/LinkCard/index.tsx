"use client";

import { motion } from "framer-motion";

const LinkCard = ({ title }: { title: string }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="link-card-li"
    >
      <h2>{title}</h2>
    </motion.li>
  );
};

export default LinkCard;
