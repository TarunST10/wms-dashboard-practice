'use client';

import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ChartCard({
  title,
  description,
  children,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileHover={{
        y: -4,
      }}
      className="
        bg-white rounded-2xl shadow p-6
        transition duration-300
        hover:shadow-2xl
      "
    >

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-gray-900">
          {title}
        </h2>

        <p className="text-gray-500 mt-1">
          {description}
        </p>

      </div>

      {children}

    </motion.div>
  );
}