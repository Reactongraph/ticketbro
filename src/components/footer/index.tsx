import React from 'react';
import { TfiWorld } from 'react-icons/tfi';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-around  border-gray-300 bg-[#000033] py-8 text-left max-[600px]:flex-col-reverse">
      <div className="text-[#94A3B8] max-[600px]:mx-auto">
        © Copyright {new Date().getFullYear()} {AppConfig.title} GmbH.
      </div>
      <div className="flex flex-wrap justify-around max-[600px]:mx-auto max-[600px]:flex max-[600px]:flex-col ">
        <a className="mr-2 text-[#CBD5E1] max-[600px]:mx-auto max-[600px]:justify-center">
          <p>Imprint</p>
        </a>
        <p className="text-[#334155] max-[600px]:invisible">|</p>
        <a className="mx-2 text-[#CBD5E1] max-[600px]:mx-auto">
          <p>Data Policy</p>
        </a>
        <p className="text-[#334155] max-[600px]:invisible">|</p>
        <a className="mx-2 text-[#CBD5E1] max-[600px]:mx-auto">
          <p>Terms & Conditions</p>
        </a>
        <p className="text-[#334155] max-[600px]:invisible">|</p>
        <a className="ml-2 flex items-center text-[#CBD5E1] max-[600px]:mx-auto">
          <TfiWorld />
          <p className="ml-2  text-[#CBD5E1] ">English </p>
        </a>
      </div>
    </div>
  );
};
export default Footer;
