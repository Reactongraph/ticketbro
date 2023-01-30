import React, { useState } from 'react';

type Props = {
  name?: string;
  year?: string;
  reference?: string;
  heading?: string;
  id?: string;
};

const AppCard = ({ heading, reference, name, year, id }: Props) => {
  const [newImage, setNewImage] = useState(false);
  return (
    <div
      key={id}
      className=" min-w-[272px] max-w-[273px] overflow-hidden  rounded-lg"
    >
      <div>
        <img
          onMouseEnter={() => setNewImage(!newImage)}
          onMouseLeave={() => setNewImage(!newImage)}
          className="mb-3 aspect-square rounded-lg"
          src={
            newImage
              ? 'https://live.staticflickr.com/5330/9035674677_5fb128f097_b.jpg'
              : 'https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt="Sunset in the mountains"
        />
      </div>
      <span className="mr-2 mb-2 inline-block rounded-full bg-[#F0F2F4] px-3 py-1 text-xs text-[#334155]">
        {reference}
      </span>
      <div className="py-4">
        <div
          className={
            newImage
              ? 'text-xl font-bold text-[#040FD9]'
              : 'text-xl font-bold text-[#334155]'
          }
        >
          {heading}
        </div>
      </div>
      <div className="flex justify-start">
        <p className="mr-3 text-xs font-light text-[#64748B]">{name}</p>
        <p className="text-xs font-light text-[#64748B]">{year}</p>
      </div>
    </div>
  );
};
export default AppCard;
