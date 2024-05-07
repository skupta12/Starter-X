"use client";

import { motion } from "framer-motion";

export default function OpacityTransition({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.4, delay: delay}}
    >
      {children}
    </motion.div>
  );
}

export const Ytransition = ({
  children,
  className,
  delay,
  y,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number,
  y?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: y, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay: delay}}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export const RouteTransition = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 40, opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.4, delay: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

