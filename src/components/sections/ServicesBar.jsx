import Image from "next/image";
import React from "react";

const ServicesBar = () => {
  return (
    <div className="grid grid-cols-2 md:justify-between gap-4 md:gap-3 bg-pink px-4 py-4 pt-44 md:flex">
      {/* <div className="flex items-center md:flex-row flex-col">
        <Image
          className="flex rounded-full border-2 border-white bg-pink px-4 py-3"
          src="/subService1.svg"
          width={75}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 md:mt-0 font-medium tracking-wide text-white">
          Customer Satisfaction
        </p>
      </div> */}
      <div className="flex items-center md:flex-row flex-col">
  <Image
    className="flex rounded-full border-2 border-white bg-pink px-4 py-3 w-16 h-16 md:w-20 md:h-20"
    src="/subService1.svg"
    width={75}  // Default width for larger screens
    height={50} // Default height for larger screens
    alt="Logo"
  />
  <p className="ml-3 mt-3 md:mt-0 font-medium tracking-wide text-white">
    Customer Satisfaction
  </p>
</div>

      <div className="flex items-center md:flex-row flex-col">
        <Image
         className="flex rounded-full border-2 border-white bg-pink px-4 py-3 w-16 h-16 md:w-20 md:h-20"
          src="/subService2.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 md:mt-0 font-medium tracking-wide text-white">
          Authorized Service Center
        </p>
      </div>
      <div className="flex items-center md:flex-row flex-col">
        <Image
          className="flex rounded-full border-2 border-white bg-pink px-4 py-3 w-16 h-16 md:w-20 md:h-20"
          src="/subService3.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 md:mt-0 font-medium tracking-wide text-white">
          Expert Technicians
        </p>
      </div>
      <div className="flex items-center md:flex-row flex-col">
        <Image
          className="flex rounded-full border-2 border-white bg-pink px-4 py-3 w-16 h-16 md:w-20 md:h-20"
          src="/subService4.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 md:mt-0 font-medium tracking-wide text-white">
          Genuine Spare Parts
        </p>
      </div>
      <div className="flex items-center md:flex-row flex-col">
        <Image
         className="flex rounded-full border-2 border-white bg-pink px-4 py-3 w-16 h-16 md:w-20 md:h-20"
          src="/subService5.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 mt-3 md:mt-0 font-medium tracking-wide text-white">
          Transparent Pricing
        </p>
      </div>
    </div>
  );
};

export default ServicesBar;
