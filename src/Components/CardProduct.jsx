import Image from "next/image";
import Img from "../../public/item1.png";

function CardProduct() {
  return (
    <div>
      <div className="w-full max-w-[300px] items-center">
        <a href="#">
          <Image
            className="p-8 border-2 w-full border-[#E6A4B4]"
            src={Img}
            alt="product image"
          />
        </a>
        <div className="pb-5 mt-4 items-center text-start">
          <a href="#">
            <h5 className="text-xl pt-serif-bold tracking-tight text-gray-900 dark:text-white">
              Eternal Bloom
            </h5>
          </a>
          <div className="flex items-center justify-between mt-4">
            <a
              href="#"
              className="text-black text-large w-full pt-serif-bold border-2 border-[#E6A4B4] hover:bg-[#E6A4B4] md:hover:bg-[#E6A4B4] font-medium text-sm px-5 py-2.5 text-center"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardProduct;