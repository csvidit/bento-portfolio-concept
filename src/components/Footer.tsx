import Link from "next/link";

const Footer = () => {
  return (
    <div className="group col-span-2 p-8 row-span-1 flex flex-col justify-center space-y-8 bg-neutral-100 rounded-2xl text-slate-400">
      <div>
        &copy; 2023 Vidit Khandelwal. This is a portfolio design/concept made by
        Vidit Khandelwal using dummy, hypothetical content. For more things like
        this, go to{" "}
        <Link className="transition-all duration-200 ease-in-out border-b border-b-slate-400 text-slate-600 hover:border-b-slate-600 hover:text-slate-400" href="https://viditkhandelwal.com">viditkhandelwal.com</Link>
      </div>
    </div>
  );
};

export default Footer;
