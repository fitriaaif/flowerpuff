import MapsImg from "../../public/maps.png";
import Image from "next/image";
import Map from "./Map";
import PhoneIcon from "../../public/phone 1.svg";
import HomeIcon from "../../public/home 1.svg";
import TiktokIcon from "../../public/tik-tok 1.svg";
import InstagramIcon from "../../public/instagram 1.svg";

function Location() {
  return (
    <div id="about" className="max-w-screen-xl h-screen mt-11 md:flex-row justify-between bg-[#FEFBF6] flex flex-wrap mx-auto mb-96 md:mb-0">
      <div className="w-full md:w-1/2 px-8 md:p-8">
        <h1 className="text-4xl md:text-5xl pt-serif-bold mb-6">
          Discover Our Creative Space Here
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Curious about where your floral ideas come to life? We take care of
          those in our Flower Puff. We invite you to visit us to see our
          selection of fresh flowers, browse our portfolio of past arrangements,
          and get inspired for your own bouquet or floral project.
        </p>
        <div>
          <div className="flex items-center mb-4">
            <Image src={HomeIcon} alt="Home Icon" className="mr-2" />
            <span>Flower Puff Shop, Sleman, Yogyakarta</span>
          </div>
          <div className="flex items-center mb-4">
            <Image src={PhoneIcon} alt="Phone Icon" className="mr-2" />
            <span>+62 881-2345-6789</span>
          </div>
          <div className="flex items-center mb-4">
            <Image src={InstagramIcon} alt="Phone Icon" className="mr-2" />
            <span>@flowerpuff</span>
          </div>
          <div className="flex items-center">
            <Image src={TiktokIcon} alt="Phone Icon" className="mr-2" />
            <span>@flowerpuff.ofc</span>
          </div>
        </div>
      </div>

      <div className="w-xl md:w-1/2 flex justify-center md:justify-end py-8 md:mb-0">
        <Map className="sm:hidden md:block radius-xl mx-auto md:mx-0" />
      </div>
    </div>
  );
}

export default Location;