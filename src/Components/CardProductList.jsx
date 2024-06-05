import CardProduct from "./CardProduct";

function CardList() {
  return (
    <div className="max-w-screen flex flex-wrap bg-[#F5EEE6] items-center justify-center py-11">
      <div className="max-w-screen-xl h-auto bg-[#F5EEE6] flex flex-col">
        <div className="max-w-screen-xl items-center flex md:flex-row md:justify-between px-4 sm:px-8">
          <div>
            <h1 className="text-4xl md:text-5xl pt-serif-bold mb-6">
              Our Beautiful Collection
            </h1>
            <span className="text-[16px]">
              We continuously maintain in state-of-the-art florist to provide
              the highest quality of flower to our customers.
            </span>
          </div>
          <div>
            <button className="hidden md:block text-black text-large pt-serif-bold border-2 border-[#E6A4B4] hover:bg-[#E6A4B4] md:hover:bg-[#E6A4B4] font-medium text-sm px-5 py-2.5">
              View More
            </button>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center mt-8 md:flex-row md:justify-between md:space-x-4 px-4 sm:px-8">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </div>
  );
}

export default CardList;
