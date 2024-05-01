import React from "react";

const Main = () => {
  return (
    <div className="mt-4 flex h-screen flex-col bg-gray-50 md:flex-row">
      <div className="flex-1">
        <div className="flex h-full flex-col justify-center">
          <h1 className="mx-3 mt-10 text-center text-2xl font-extrabold tracking-wide text-red md:text-5xl">
            #1 The Fastest Service Center
          </h1>
          <p className="mx-3 my-7 text-center text-lg font-normal tracking-wider text-black md:mx-6 md:text-xl">
            When it comes to repairing your home appliances, you need a
            technician you can trust to deliver exceptional service.
          </p>
          <div className="mx-auto mt-5 flex flex-col gap-5 md:flex-row">
            <button
              className="flex flex-shrink-0 justify-center rounded-3xl border-4 border-none bg-red px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-black"
              type="button"
            >
              Call Us
            </button>
            <button
              className="flex flex-shrink-0 rounded-3xl border-4 border-none bg-red px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-black"
              type="button"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 h-full w-full bg-[url('/pic2.jpg')] bg-cover bg-center md:mt-0 md:w-3/5"></div>
    </div>
  );
};

export default Main;
