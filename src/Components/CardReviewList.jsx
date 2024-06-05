import CardReview from "./CardReview";

function CardReviewList() {
  return (
    <div className="max-w-screen flex flex-wrap bg-[#F5EEE6] items-center justify-center py-11">
      <div className="max-w-screen h-auto bg-[#F5EEE6] flex flex-col">
        <div className="max-w-screen-xl items-center flex md:flex-row md:justify-between px-4 sm:px-8">
          <div>
            <h1 className="text-4xl md:text-5xl pt-serif-bold mb-6">
              Here’s What Our <br />
              Customers are Saying
            </h1>
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center mt-8 md:flex-row md:justify-between md:space-x-24 sm:px-8">
          <CardReview />
          <CardReview />
          <CardReview />
        </div>
      </div>
    </div>
  );
}

export default CardReviewList;
