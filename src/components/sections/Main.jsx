import { phoneNumber } from "@/libs/phoneNumber";
import Link from "next/link";
import React from "react";

const Main = () => {
  return (
    <div className="flex md:h-screen mb-4 md:mb-0 flex-row bg-gray-50 ">
      <div className="flex-1">
        <div className="flex md:h-full flex-col md:justify-center">
          <h1 className="mx-3 my-6 md:mt-10 text-center text-sm font-extrabold tracking-wide text-red md:text-5xl">
            #1 The Fastest Service Center
          </h1>
          <p className="mx-3 md:my-7 text-center text-sm font-normal tracking-wider text-black md:mx-6 md:text-xl">
            When it comes to repairing your home appliances, you need a
            technician you can trust to deliver exceptional service.
          </p>
          <div className="mx-auto mt-10 md:mt-5 flex flex-row gap-5 md:flex-row">
            <Link
              href={`tel:${phoneNumber}`}
              target="_blank"
              className="flex flex-shrink-0 justify-center rounded-3xl border-4 border-none bg-red px-8 md:px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-black"
            >
              Call Us
            </Link>
            <Link
              href={`https://wa.me/${phoneNumber}?text=Hello%20Wide%20Home%20UAE%20Repairs%20I%20need%20your%20help%20with%20my%20appliance%20repair%20service%20in%20Dubai%20and%20Abu%20Dhabi%20UAE`}
              target="_blank"
              className="flex flex-shrink-0 rounded-3xl border-4 px-8 border-none bg-red md:px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-black"
            >
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="mt-4 h-full w-full bg-[url('/pic2.jpg')] bg-cover bg-center md:mt-0 md:w-3/5"></div> */}
      <div className="mt-4 w-1/5 md:h-full bg-[url('/pic2.jpg')] bg-cover bg-center md:mt-0 md:w-3/5"></div>
    </div>
  );
};

export default Main;
