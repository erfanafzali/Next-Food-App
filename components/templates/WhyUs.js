import Choice from "../icons/Choice";
import Clock from "../icons/Clock";
import Fast from "../icons/Fast";
import Food from "../icons/Food";

function WhyUs() {
  return (
    <div className="w-full my-24">
      <h2 className="text-green-500 font-bold text-2xl mb-8">Why us?</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center w-full gap-x-8 gap-y-8">
        <li className=" rounded-md h-32 bg-white shadow-md flex flex-col justify-center font-bold  items-center gap-y-3 text-sm md:text-base">
          <span>
            <Fast />
          </span>
          <span>Fast</span>
        </li>
        <li className="rounded-md h-32 bg-white shadow-md flex flex-col justify-center font-bold  items-center gap-y-3 text-sm md:text-base">
          <span>
            <Food />
          </span>
          <span>Best Restaurants</span>
        </li>
        <li className="rounded-md h-32 bg-white shadow-md flex flex-col justify-center font-bold  items-center gap-y-3 text-sm md:text-base">
          <span>
            <Choice />
          </span>
          <span>Your Choice</span>
        </li>
        <li className="rounded-md h-32 bg-white shadow-md flex flex-col justify-center font-bold  items-center gap-y-3 text-sm md:text-base">
          <span>
            <Clock />
          </span>
          <span>24-7</span>
        </li>
      </ul>
    </div>
  );
}

export default WhyUs;
