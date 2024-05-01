import Image from "next/image";
import React from "react";

const ServicesBar = () => {
  return (
    <div className="grid grid-cols-2 justify-between gap-3 bg-pink px-4 py-4 pt-44 md:flex">
      <div className="flex items-center">
        <Image
          className="flex rounded-full border-2 border-white bg-pink px-4 py-3"
          src="/subService1.svg"
          width={75}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 font-medium tracking-wide text-white">
          Customer Satisfaction
        </p>
      </div>
      <div className="flex items-center">
        <Image
          className="flex rounded-full border-2 border-white bg-pink px-3 py-4"
          src="/subService2.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 font-medium tracking-wide text-white">
          Authorized Service Center
        </p>
      </div>
      <div className="flex items-center">
        <Image
          className="flex rounded-full border-2 border-white bg-pink px-3 py-4"
          src="/subService3.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 font-medium tracking-wide text-white">
          Expert Technicians
        </p>
      </div>
      <div className="flex items-center">
        <Image
          className="flex rounded-full border-2 border-white bg-pink px-3 py-4"
          src="/subService4.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 font-medium tracking-wide text-white">
          Genuine Spare Parts
        </p>
      </div>
      <div className="flex items-center">
        <Image
          className="flex rounded-full border-2 border-white bg-pink px-3 py-4"
          src="/subService5.svg"
          width={80}
          height={50}
          alt="Logo"
        />
        <p className="ml-3 font-medium tracking-wide text-white">
          Transparent Pricing
        </p>
      </div>
    </div>
  );
};

export default ServicesBar;
