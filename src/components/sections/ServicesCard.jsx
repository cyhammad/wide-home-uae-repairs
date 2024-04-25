import Image from "next/image";

const ServicesCard = ({ title, description, imageSrc }) => {
    return (
      <div className="mb-3 mt-4 w-screen max-w-sm transform cursor-pointer overflow-hidden rounded text-center shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:text-white lg:mt-10">
      

        <Image
          className="mx-auto mt-4"
          src={imageSrc}
          alt={title}
          width={180}
          height={150}
        />
        
        <div className="mb-2 mt-10 text-center text-xl font-semibold tracking-wide text-black">
          {title}
        </div>
  
        <div>
          <p className="mb-10 px-3 text-center text-gray-500">{description}</p>
        </div>
  
        <button
          className="mx-auto mb-5 flex flex-shrink-0 justify-center rounded-3xl border-4 border-none bg-green px-14 py-2.5 text-white transition duration-300 ease-in-out hover:bg-white hover:text-green"
          type="button"
        >
          Call Us
        </button>

        
      </div>
    );
  };
  
  export default ServicesCard;
  