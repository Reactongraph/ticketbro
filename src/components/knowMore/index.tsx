import React from 'react';

type Props = {
  moreInfo?: any;
};

const KnowMore = ({ moreInfo }: Props) => {
  return (
    <div className="mb-16 bg-[#00004d] p-16 ">
      <div className="flex flex-col justify-center text-white">
        <p className="mx-24 flex justify-center pt-2 text-4xl font-bold text-[#F8FAFC]">
          {moreInfo?.title}
        </p>
        <p className="flex justify-center pb-8 text-base text-[#F8FAFC] ">
          {moreInfo?.info}
        </p>
        <div className="flex justify-center pt-8">
          <button className="w-40 rounded-lg bg-[#FFFFFF] py-3 text-base font-bold text-[#334155]  hover:bg-blue-700 hover:text-white">
            Let&apos;s get started
          </button>
        </div>
      </div>
    </div>
  );
};
export default KnowMore;
