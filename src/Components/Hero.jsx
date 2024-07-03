'use client';
import Image from "next/image";
import HeroImg from "../../public/HeroImage.png";
import { sendGTMEvent } from "../utils/gtm";

function Hero() {
  const handleButtonClick = () => {
    sendGTMEvent({ event: "buttonClicked", value: "Order Now" });
    window.location.href = "https://wa.me/6285163158518?text=Mau pesen buket bunga dong bestie.";
  };

  return (
    <div className="w-full">
    <div className="max-w-screen-xl h-screen md:flex-row items-center justify-between bg-[#FEFBF6] flex flex-wrap mx-auto">
      <div className="w-full px-8 md:w-1/2 p-8 md:px-8">
        <h1 className="text-4xl md:text-5xl pt-serif-bold mb-6">
          Perfect Flower Bouqet for Every Occasion
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Bouquet is a perfect gift for every person, make your special person
          love you, order our bouquet now.
        </p>
        <button
          onClick={handleButtonClick}
          className="pt-serif-bold text-white bg-[#E6A4B4] hover:bg-[#FEFBF6] hover:text-[#E6A4B4] border border-[#E6A4B4] focus:ring-4 focus:outline-none font-large rounded-[30px] text-sm px-16 py-2 text-center md:visible md:w-auto md:p-4 md:block"
        >
          Order Now
        </button>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
        <Image src={HeroImg} alt="Hero Image" className="w-full h-auto" />
      </div>
    </div>
    </div>
  );
}

export default Hero;
