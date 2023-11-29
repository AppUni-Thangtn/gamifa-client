'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottom, slideInFromTop } from '@/utils/motion';
import Image from 'next/image';

type Props = {
  imageUrl: string;
  name: string;
};

const RightDiv = ({ imageUrl, name }: Props) => {
  return (
    <motion.div
      initial={'hidden'}
      animate="visible"
      className="px-4 md:px-10 lg:px-16 bg-[#fff] w-full md:w-1/2  mr-auto ml-auto md:ml-auto md:mx-0 h-screen flex flex-col space-y-4 items-center md:items-start justify-center"
    >
      <motion.div
        variants={slideInFromTop}
        className="flex space-x-2 items-center"
      >
        <img src={imageUrl} alt={name || 'Gamifa'} className="w-[100px]" />
        <h1
          className="text-lg md:text-2xl font-semibold uppercase "
          style={{
            fontSize: 'calc(1.5em + 1.5vw)',
            lineHeight: '50px',
          }}
        >
          {name}
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromBottom}
        className="flex flex-col items-center md:items-start justify-center space-y-4"
      >
        <h3 className="text-2xl font-medium text-center md:text-left">
          Tham gia cộng đồng ngay
        </h3>
        <button
          className={`border border-primary p-2 bg-primary hover:bg-[#fff] hover:text-primary text-[#fff] rounded-md w-40 uppercase`}
        >
          Tham gia ngay
        </button>
      </motion.div>
    </motion.div>
  );
};

export default RightDiv;
