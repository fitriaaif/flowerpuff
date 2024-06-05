import Image from "next/image";
import Link from "next/link";
import ContentImg from "../../public/Hand.png";

function Content() {
  return (
    <div className="max-w-screen h-[70%] md:flex md:flex-row items-center bg-[#FEFBF6] flex flex-wrap mx-auto mb-8 sm:mb-8">
      <div className="w-full md:w-1/2 flex mb-8 md:mb-0 justify-end">
        <Image src={ContentImg} alt="Hero Image" className="w-full" />
      </div>
      <div className="max-w-screen-xl px-8 md:w-1/3 p-8 md:px-8">
        <h1 className="text-4xl md:text-5xl pt-serif-bold mb-6">
          Personalized Hand Crafted Bouquets
        </h1>
        <p className="text-xl md:text-xl mb-6 text-justify">
          One-of-a-kind bouquets that are tailored to your specific tastes and
          preferences. Our talented florists take the time to understand your
          vision and use their expertise to bring it to life.
        </p>
        <p className="text-xl md:text-xl mb-6 text-justify">
          Whether you have a specific color scheme in mind or want to
          incorporate a certain type of flower, we can customize a bouquet that
          is perfect for you.
        </p>
      </div>
    </div>
  );
}
export default Content;
