import Link from "next/link";
import Image from "next/image";
import { PiArrowUpRight } from "react-icons/pi";

const Musings = () => {
  return (
    <div className="group col-span-2 p-8 row-span-2 flex flex-col space-y-8 justify-between bg-neutral-100 rounded-2xl">
      <div className="flex flex-row space-x-2 items-center text-xl lg:text-2xl text-teal-900 font-normal">
        <div> Latest Musings</div>
        <Image src="/thoughts.svg" alt="Thought bubble doodle" width={32} height={32}/>
      </div>
      <div className="grid grid-flow-row gap-y-2 divide-y divide-dotted divide-slate-300 text-slate-400">
        <div className="text-slate-600">
          In the colorful realm of design, the Rule of Thirds emerges as a
          quiet superstar.
        </div>
        <div>
          From my experience as a UI/UX designer, I have come to see its subtle
          but
        </div>
        <div>
          significant influence. It is like a secret ingredient that adds that
          extra flavor
        </div>
        <div>to your design palette.</div>
      </div>
      <Link
        className="group mr-8 flex flex-row w-fit text-sm space-x-1 items-center p-2 rounded-full border border-slate-300 transition-all duration-200 ease-in-out hover:ring hover:ring-slate-300 hover:border-slate-600"
        href="https://www.apple.com/iphone-14-pro/"
        rel="noreferrer noopener"
        target="_blank"
      >
        <div className="">Read it on Medium</div>
        <PiArrowUpRight className="text-slate-600 " />
      </Link>
    </div>
  );
};

export default Musings;
