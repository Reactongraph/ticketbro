import React from 'react';
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { GrFacebook } from 'react-icons/gr';

const ReferenceLinks = () => {
  return (
    <div className="flex flex-wrap justify-around pb-16 ">
      <div className="max-[600px]:mb-6 max-[600px]:w-2/3">
        <p className="text-xl font-bold text-[#040FD9]">ticketbro</p>
        <div className="flex justify-between">
          <GrFacebook />
          <AiFillYoutube />
          <AiFillInstagram />
          <AiFillLinkedin />
          <FaTiktok />
        </div>
      </div>
      <div className="max-[600px]:w-1/2">
        <ul className="max-[600px]:ml-14">
          <li className="mb-3 text-base font-medium text-[#334155]">Product</li>
          <li className="mb-3  text-base text-[#64748B]">Selfstarter</li>
          <li className="mb-3  text-base text-[#64748B]">Enterprise</li>
          <li className="mb-3  text-base text-[#64748B]">Pricing</li>
        </ul>
      </div>
      <div className="max-[600px]:w-1/2">
        <ul>
          <li className="mb-3 text-base font-medium text-[#334155]">
            Features
          </li>
          <li className="mb-3  text-base text-[#64748B]">Analytics</li>
          <li className="mb-3  text-base text-[#64748B]">Workload</li>
          <li className="mb-3  text-base text-[#64748B]">Bookable 24/7</li>
        </ul>
      </div>
      <div className="max-[600px]:w-1/2">
        <ul className="max-[600px]:ml-14">
          <li className="mb-3 text-base font-medium text-[#334155]">Company</li>
          <li className="mb-3 text-base text-[#64748B]">
            Careers{' '}
            <span className="rounded-lg bg-[#E6E8FE] px-2 py-1 text-[#040FD9]">
              Hiring
            </span>
          </li>
          <li className="mb-3  text-base text-[#64748B]">About Us</li>
          <li className="mb-3  text-base text-[#64748B]">Blog</li>
          <li className="mb-3  text-base text-[#64748B]">Contact Sales</li>
        </ul>
      </div>
      <div className="max-[600px]:w-1/2">
        <ul>
          <li className="mb-3 text-base font-medium text-[#334155]">Help</li>
          <li className="mb-3  text-base text-[#64748B]">FAQs</li>
          <li className="mb-3  text-base text-[#64748B]">Customer Support</li>
          <li className="mb-3  text-base text-[#64748B]">Help Center</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="mb-5 text-base font-medium text-[#334155]">
            Get the app
          </li>
          <li className="mb-5  text-base">
            <img
              className="w-20 object-contain"
              src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253854/google-play-icon-md.png"
              alt="googleplay icon"
            />
          </li>
          <li className="text-base">
            <img
              className="w-20 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Downloadontheappstore.png"
              alt="googleplay icon"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ReferenceLinks;
