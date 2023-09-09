import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

const FeaturedWork = () => {
  return (
    <div className="group relative col-span-3 row-span-2 flex flex-col space-y-8 justify-between bg-neutral-100 rounded-2xl z-10">
      <div className="text-teal-900 text-xl lg:text-2xl font-normal p-8">
        Featured Work
      </div>
      <div className="flex flex-row space-x-4 h-max z-0">
        <div className="z-0 max-h-72 overflow-hidden px-8 w-fit h-fit transition-all duration-200 ease-in-out">
          <Image
            src="/iphone-14-pro.png"
            alt="iPhone 14 Pro Front"
            width={433}
            height={883}
            className="z-0"
          />
        </div>
        <div className="flex flex-col justify-between w-1/2 pb-8 text-slate-600">
          <div className="text-slate-400 text-xl lg:text-2xl">
            The dynamic island on the iPhone 14 Pro. Yup, that was my team that
            did it. <span className="text-slate-600">You&apos;re welcome.</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col space-y-1">
              <div>
                <span className="text-teal-900">Product Designer</span> at Apple
              </div>
              <div className="text-slate-400">2016 - 2023</div>
            </div>
            <Link
              className="group mr-8 flex flex-row items-center p-2 rounded-full border border-slate-300 transition-all duration-200 ease-in-out hover:ring hover:ring-slate-300 hover:border-slate-600"
              href="https://www.apple.com/iphone-14-pro/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <PiArrowUpRight className="text-slate-600 " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWork;
