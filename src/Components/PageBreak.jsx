import Image from "next/image";
import Link from "next/link";
import Flower from "../../public/flower.svg";
import Gift from "../../public/gift.svg";
import Scissors from "../../public/scissors.svg";

function PageBreak() {
  return (
    <div className="bg-[#F5EEE6] max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-black pt-serif">
        <Link
          href="/"
          className="flex flex-row items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={Flower} className="h-8" alt="Flowerpuff Logo" />
          <div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Foral Range
            </span>
            <p className="text-base">
              Get wide arrangement of colorful florals in your bouquets
            </p>
          </div>
        </Link>
      </div>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-black pt-serif ">
        <Link
          href="/"
          className="flex flex-row items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={Scissors} className="h-8" alt="Flowerpuff Logo" />
          <div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Hand Crafted
            </span>
            <p className="text-base">
              All the floral arrangements are crafted with human touch
            </p>
          </div>
        </Link>
      </div>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-black pt-serif">
        <Link
          href="/"
          className="flex flex-row items-center space-x-3 rtl:space-x-reverse"
        >
          <Image src={Gift} className="h-8" alt="Flowerpuff Logo" />
          <div>
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Secure Packing
            </span>
            <p className="text-base">
              We hold the plants in place and let them breathe
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default PageBreak;
