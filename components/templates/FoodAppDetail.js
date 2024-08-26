import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
function FoodAppDetail() {
  return (
    <div className="w-full flex  lg:flex-row justify-center items-center gap-x-20 gap-y-12 flex-col-reverse">
      <div className="lg:order-none order-">
        <h2 className="font-bold text-2xl w-fit border-b-4 border-green-600 pb-1 mb-4">
          Food App
        </h2>
        <div>
          <p className="font-bold mb-2">Food Delivery and Takeout!</p>
          <p className="text-start text-base text-slate-600">
            Food App is an online food ordering and delivery platform launched
            by Uber in 2014. Meals are delivered by couriers using cars,
            scooters, bikes, or on foot.
          </p>
        </div>
        <Link href="/menu">
          <button className="bg-green-500 hover:bg-green-400 duration-500 transition  px-8 py-1.5 text-white font-semibold rounded-md mt-6">
            See All
          </button>
        </Link>
      </div>
      <img src="/images/banner.png" alt="" className=" md:max-w-lg " />
    </div>
  );
}

export default FoodAppDetail;
