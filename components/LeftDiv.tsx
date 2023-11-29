'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromRight } from '@/utils/motion';

type Props = {
  name: string;
  description: string;
};

const LeftDiv = ({ name, description }: Props) => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={'hidden md:block'}>
      <div
        className={`hidden md:block 
        absolute top-0 bottom-0 right-1/2 ${
          isMounted ? 'h-full w-1/2' : 'h-[0px] w-[100px]'
        } z-[1] bg-[#fcecee]
        `}
        style={{
          transition: 'height 0.5s ease, width 1s ease 0.5s',
          borderTopRightRadius: '100px',
          borderBottomRightRadius: '100px',
        }}
      ></div>
      <motion.div
        initial={'hidden'}
        animate="visible"
        className="flex items-center justify-center h-full relative z-[2]"
      >
        <div
          style={{
            fontSize: 'calc(1.5em + 1.5vw)',
            lineHeight: '70px',
          }}
          className="text-black p-[2rem] flex flex-col justify-evenly "
        >
          <motion.h1 variants={slideInFromRight(0.8)} className="font-semibold">
            {name}
          </motion.h1>
          <motion.h3
            variants={slideInFromRight(1)}
            style={{
              fontSize: 'calc(0.5em + 0.5vw)',
            }}
          >
            {description}
          </motion.h3>
        </div>
      </motion.div>
    </div>
  );
};

export default LeftDiv;
