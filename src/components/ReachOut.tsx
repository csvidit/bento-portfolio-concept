import Image from "next/image";

const ReachOut = () => {
  return (
    <div className="group col-span-2 p-8 row-span-1 flex flex-col space-y-8 bg-neutral-100 rounded-2xl">
      {" "}
      <div className="flex flex-row space-x-2 items-center text-xl lg:text-2xl text-teal-900 font-normal">
        <div>Reach Out</div>
        <Image
          src="/chat.svg"
          alt="Thought bubble doodle"
          width={32}
          height={32}
        />
      </div>
      <div className="flex flex-row space-x-4 justify-around items-center h-full">
        <button className="flex flex-col space-y-2 items-center transition-all duration-200 ease-in-out hover:opacity-100 w-fit h-fit hover:drop-shadow-lg">
          <Image src="/mail.svg" width={64} height={64} alt="Mail Icon" />
        </button>
        <button className="flex flex-col space-y-2 items-center transition-all duration-200 ease-in-out hover:opacity-100 w-fit h-fit hover:drop-shadow-lg">
          <Image
            src="/phone.svg"
            width={64}
            height={64}
            alt="Phone Icon"
          />
        </button>
        <button className="flex flex-col space-y-2 items-center transition-all duration-200 ease-in-out hover:opacity-100 w-fit h-fit hover:drop-shadow-lg">
          <Image
            src="/twitter.svg"
            width={64}
            height={64}
            alt="Twitter Icon"
          />
        </button>
        <button className="flex flex-col space-y-2 items-center transition-all duration-200 ease-in-out hover:opacity-100 w-fit h-fit hover:drop-shadow-lg">
          <Image
            src="/github.svg"
            width={64}
            height={64}
            alt="GitHub Icon"
          />
        </button>
      </div>
    </div>
  );
};

export default ReachOut;
