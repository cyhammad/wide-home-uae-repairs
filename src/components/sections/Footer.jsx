import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-slate-100">
        <div className="mx-auto h-full w-4/5">
          <div className="mt-4 flex items-center justify-center px-4">
            <Image
              className="flex"
              src="/logo.png"
              width={80}
              height={180}
              alt="Logo"
            />
            <p className="text:lg mx-3 mt-3 font-bold tracking-wide text-black md:text-xl md:tracking-wider">
              Wide Home UAE Repairs
            </p>
          </div>
          <div>
            <p className="py-6 text-justify tracking-wide text-gray-500 md:px-4 md:text-center">
              When it comes to repairing your home appliances, you need a
              technician you can trust to deliver exceptional service.
              Specializing in appliance repair and maintenance services in Dubai
              and Abu Dhabi of all the Siemens home appliances.
            </p>
          </div>
          <ul className="flex flex-col justify-center  gap-5 border-b border-gray-300 py-6 font-bold text-white md:flex-row md:gap-10">
            <li>
              <Link href="" className="text-green hover:underline">
                Home
              </Link>
            </li>

            <li>
              <Link href="" className="text-green hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="" className="text-green hover:underline">
                Services
              </Link>
            </li>

            <li>
              <Link href="" className="text-green hover:underline">
                Terms of Use
              </Link>
            </li>

            <li>
              <Link href="" className="text-green hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <div className="flex items-center justify-center text-gray-500">
            <p className="py-6 text-center text-sm md:tracking-wide">
              © 2024 Emirates Repair Center. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
