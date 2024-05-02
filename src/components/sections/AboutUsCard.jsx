const AboutUsCard = ({ title, description }) => {
  return (
    <div className="mb-3 flex transform cursor-pointer flex-col items-center justify-between rounded text-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:text-white md:mt-4 md:max-w-[280px] lg:mt-10">
      <div className="mb-2 mt-10 text-center text-xl font-semibold tracking-wide text-black">
        {title}
      </div>
      <p className="mb-10 px-3 text-center text-gray-500">{description}</p>
      <button
        className="mb-5 flex justify-center rounded-3xl border-4 border-none bg-red px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-black"
        type="button"
      >
        Call Us
      </button>
    </div>
  );
};

export default AboutUsCard;
