import Link from 'next/link';
import { useEffect, useState } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import { useWindowSize } from '../../customHooks/getWindowSize';

const Header = () => {
  const [selectedTab, setSelectedTab] = useState(5);
  const [width, setWidth] = useState(0);
  const windowSize: any = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setWidth(windowSize?.width);
  }, [windowSize?.width]);

  return width > 600 ? (
    <div className="mx-4 flex flex-wrap justify-between border-gray-300 pt-3 align-bottom">
      <div className="align-bottom text-3xl font-bold text-[#040FD9]">
        {AppConfig.title}
      </div>

      <div>
        <ul className="flex flex-wrap text-xl ">
          <li onClick={() => setSelectedTab(1)} className="mr-6 font-medium">
            <Link
              href="/"
              className={`border-none align-bottom font-medium hover:text-gray-900 ${
                selectedTab === 1 ? 'text-[#0000b3]' : 'text-[#334155]'
              }`}
            >
              Home
            </Link>
          </li>
          <li onClick={() => setSelectedTab(2)} className="mr-6">
            <label htmlFor="features" className="font-medium">
              Features
            </label>
            <select className="bg-white" name="features" id="features"></select>
          </li>
          <li onClick={() => setSelectedTab(3)} className="mr-6">
            <label htmlFor="caseStudies" className="font-medium">
              Case studies
            </label>
            <select
              className="bg-white"
              name="Case studies"
              id="caseStudies"
            ></select>
          </li>
          <li onClick={() => setSelectedTab(4)} className="mr-6 font-medium">
            <Link
              href="/pricing/"
              className={`border-none align-bottom hover:text-gray-900 ${
                selectedTab === 4 ? 'text-[#0000b3]' : 'text-[#334155]'
              }`}
            >
              Pricing
            </Link>
          </li>
          <li onClick={() => setSelectedTab(5)} className="mr-6 font-medium">
            <Link
              href="/blog/"
              className={`border-none align-bottom hover:text-gray-900 ${
                selectedTab === 5 ? 'text-[#0000b3]' : 'text-[#334155]'
              }`}
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="rounded-lg bg-[#0000b3] p-4 align-bottom font-bold text-white hover:bg-[#0000b3]">
          Get started
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-wrap justify-between border-gray-300 pt-3">
      <div className="text-3xl font-bold text-[#040FD9]">{AppConfig.title}</div>

      <div className="flex  justify-between border-gray-400">
        <nav>
          <section>
            <div
              onClick={() => setShowMenu(!showMenu)}
              className="static space-y-2"
            >
              <div className="h-1 w-6 bg-gray-900 "></div>
              <div className="h-1 w-6 bg-gray-900 "></div>
            </div>
          </section>

          {showMenu ? (
            <ul className="absolute right-0 flex flex-col">
              <li className="mr-6 mb-2 bg-gray-300 font-medium">
                <Link href="/blog/" className={`border-none text-gray-900 `}>
                  Blog
                </Link>
              </li>
              <li className="mr-6 mb-2 bg-gray-300 font-medium">
                <Link href="/pricing/" className={`border-none text-gray-900 `}>
                  Pricing
                </Link>
              </li>
              <li className="mr-6 mb-2 bg-gray-300 font-medium">
                <Link href="/" className={`border-none  text-gray-900 `}>
                  Home
                </Link>
              </li>
              <li>
                <div>
                  <button className="rounded-lg bg-[#0000b3] p-4 font-bold text-white hover:bg-[#0000b3]">
                    Get started
                  </button>
                </div>
              </li>
            </ul>
          ) : null}
        </nav>
      </div>
    </div>
  );
};
export default Header;
