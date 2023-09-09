import { motion } from "framer-motion";
import Image from "next/image";

const TechStack = () => {
  return (
    <div className="col-span-1 row-span-1 rounded-2xl p-8 flex flex-col space-y-2 bg-neutral-100 bg-opacity-75 justify-between">
      <div className="text-xl lg:text-2xl text-teal-900 font-normal">
        Tools I Use
      </div>
      <motion.div className="flex flex-row space-x-2 w-full items-center">
        <Image
          width={64}
          height={64}
          src="/stager.svg"
          alt="Adobe Stager Substance Logo"
        />
        {/* <Image width={64} height={64} src="/aero.svg" alt="Adobe Aero Logo" /> */}
        <Image width={64} height={64} src="/figma.svg" alt="Figma Logo" />
        <Image width={64} height={64} src="/keynote.svg" alt="Keynote Logo" />
      </motion.div>
    </div>
  );
};

export default TechStack;
