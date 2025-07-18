"use client";

import React from "react";
import { motion } from "framer-motion";
import { KeyTextField } from "@prismicio/client";

const AnimatedText = ({ text }: { text: KeyTextField }) => {
  return (
    <motion.p
      className="text-white mb-4"
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedText;
