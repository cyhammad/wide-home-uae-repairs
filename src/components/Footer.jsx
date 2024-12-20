"use client";

import { lgLogo, samsungLogo } from "@/libs/logos";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="flex w-full justify-center bg-slate-50">
        <div className="flex h-full w-4/5 flex-col items-center pt-10">
          {pathname === "/" ? (
            <div className="flex items-center">
              <Image src="/logo.png" width={50} height={50} alt="Logo" />
              <h2 className="mx-3 text-lg font-bold text-pink">
                Relaible Appliances Repair
              </h2>
            </div>
          ) : pathname === "/service-center/bosch" ? (
            <Image src="/bosch.svg" width={150} height={50} alt="bosch logo" />
          ) : pathname === "/service-center/siemens" ? (
            <Image
              src="/siemens.svg"
              width={150}
              height={50}
              alt="bosch logo"
            />
          ) : pathname === "/service-center/lg" ? (
            lgLogo
          ) : pathname === "/service-center/samsung" ? (
            samsungLogo
          ) : (
            <Image src="/miele.svg" width={150} height={50} alt="bosch logo" />
          )}
          <p className="py-6 text-justify tracking-wide text-gray-500 md:px-4 md:text-center">
            When it comes to repairing your home appliances, you need a
            technician you can trust to deliver exceptional service.
            Specializing in appliance repair and maintenance services in Dubai
            and Abu Dhabi of all the Siemens home appliances.
          </p>

          <div className="flex w-full flex-col justify-between md:flex-row md:px-16">
            <div className="flex flex-col">
              <p className="border-b border-gray-400 py-2 text-center font-bold text-black md:text-left">
                Products and Services{" "}
              </p>

              <div className="mx-auto grid grid-cols-2 gap-16 text-black md:gap-10">
                <div>
                  <ul className="py-4 text-gray-500">
                    <li>Ovens</li>
                    <li>Hobs</li>
                    <li>Coffee Machines</li>
                    <li>Cookers</li>
                    <li>Extractor Hoods</li>
                  </ul>
                </div>
                <div>
                  <ul className="py-4 text-gray-500">
                    <li>Laundry</li>
                    <li>Small Appliances</li>
                    <li>Clean and Care</li>
                    <li>Refrigeration</li>
                    <li>Dishwashers</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center md:flex-row md:justify-end">
              <p className="mr-3 py-3 font-medium">
                Latest News, Events, and Offers
              </p>
              <input
                type="email"
                placeholder="Enter Your Email ID"
                className="w-full border border-gray-300 p-3  focus:outline-none"
              />
              <button className="mt-4 bg-pink px-4 py-3 text-white hover:bg-black md:mt-0">
                Subscribe
              </button>
              {/* md:w-1/4 */}
            </div>
          </div>

          {/* <ul className="flex flex-col justify-center gap-5  font-bold text-white md:flex-row md:gap-10 md:py-6">
          
            <li>
              <Link href="" className="text-pink hover:underline">
                Home
              </Link>
            </li>

            <li>
              <Link href="" className="text-pink hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="" className="text-pink hover:underline">
                Services
              </Link>
            </li>

            <li>
              <Link href="" className="text-pink hover:underline">
                Terms of Use
              </Link>
            </li>

            <li>
              <Link href="" className="text-pink hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul> */}

          <div className="flex items-center justify-center text-gray-500">
            <p className="py-6 text-center text-sm md:tracking-wide">
              © 2024 Gulf Appliances Repair Center. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
