/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

function CardFood({ item }) {
  return (
    <li className="w-full mb-8 ">
      <div className="w-full shadow-md rounded-md overflow-hidden">
        <img src={`/images/${item.id}.jpeg`} alt={item.id} />
        <div className="w-full my-4">
          <div className="w-full flex justify-between items-center px-4">
            <h3 className="font-bold text-green-500 text-lg">{item.name}</h3>
            <div className=" flex justify-center items-center gap-x-1 font-semibold">
              <Location className="" />
              <p className="text-slate-500 text-sm">
                {item.details[0].Cuisine}
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center px-4 mt-2">
            <Dollar />
            <h3
              className={`${
                item.discount ? "text-red-500" : ""
              } font-bold text-lg`}
            >
              {item.discount ? (
                <span>{(item.price * (100 - item.discount)) / 100}$</span>
              ) : (
                <span>{item.price}</span>
              )}
            </h3>
          </div>
          <Link
            href={`/menu/${item.id}`}
            className="w-full px-4 flex justify-center items-center"
          >
            <button className="w-full bg-green-500 text-white font-bold text-lg py-1 mt-5 rounded-md hover:bg-green-300">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </li>
  );
}

export default CardFood;
