'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottom, slideInFromTop } from '@/utils/motion';

type Props = {
  imageUrl: string;
  name: string;
  domain: string;
};

const loginUrl =
  process.env.LOGIN_URL || 'https://auth.gamifa.com/v/login?base_url=';
const signUpUrl =
  process.env.SIGN_UP || 'https://auth.gamifa.com/v/signup?base_url=';

const RightDiv = ({ imageUrl, name, domain }: Props) => {
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
            fontSize: 'calc(1em + 1vw)',
            lineHeight: '30px',
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
        <div className="flex space-x-4">
          <button
            className={`border border-primary p-2 bg-primary hover:bg-[#fff] hover:text-primary text-[#fff] rounded-md w-40 uppercase`}
          >
            <a href={loginUrl + domain}>Đăng nhập</a>
          </button>
          <button
            className={`border border-primary p-2 bg-white hover:bg-primary hover:text-[#fff] text-primary rounded-md w-40 uppercase`}
          >
            <a href={signUpUrl + domain}>Đăng ký</a>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RightDiv;
