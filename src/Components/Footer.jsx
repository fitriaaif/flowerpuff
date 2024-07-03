import Image from "next/image";
import Logo from "../../public/Logo.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#FEFBF6] w-full py-10">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="flex flex-col items-start md:items-start mb-8 md:mb-0">
              <a href="" className="flex mb-2 md:mb-0">
                <Image src={Logo} className="h-8" alt="FlowBite Logo" />
              </a>
              <p className="pt-serif text-start text-justifymd:text-left text-gray-500  font-medium h-8 mb-8 md:mb-0">
                From the first bud to the final petal, our florists hand-craft
                exquisite floral <br className="md:inline hidden" /> arrangements for every occasion, with care,
                creativity, and a touch of magic.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="pt-serif-bold mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Pages
                </h2>
                <ul className="text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Products
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href="" className="hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="pt-serif-bold mb-6 text-sm font-semibold text-gray-900 uppercase ">
                  information
                </h2>
                <ul className=" pt-serif text-gray-500  font-medium">
                  <li className="mb-4">
                    <a href="" className="hover:underline ">
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="" className="hover:underline ">
                      Customer Services
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="pt-serif-bold mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Companies
                </h2>
                <ul className="pt-serif text-gray-500 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Career
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      How to Order
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Reports
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="items-center">
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
              <span className="text-sm text-gray-500 sm:text-center">
                © 2024{" "}
                <a href="" className="hover:underline">
                  Flower Puff
                </a>
                . All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}