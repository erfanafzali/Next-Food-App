/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Dollar from "../icons/Dollar";
import Location from "../icons/Location";

function Menu({ data }) {
  console.log(data[0]?.details[0]?.Cuisine);

  return (
    <div className="w-full mb-32">
      <h2 className="w-fit border-b-4 text-3xl font-bold border-green-500">
        Menu
      </h2>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-4 gap-y-4 mt-16">
        {data.map((item) => (
          <li key={item.id} className="w-full">
            <div className="w-full shadow-md rounded-md overflow-hidden">
              <img src={`/images/${item.id}.jpeg`} alt={item.id} />
              <div className="w-full my-4">
                <div className="w-full flex justify-between items-center px-4">
                  <h3 className="font-bold text-green-500 text-lg">
                    {item.name}
                  </h3>
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
                      item.discount > 0 ? "text-red-500" : ""
                    } font-bold text-lg`}
                  >
                    {item.price}$
                  </h3>
                </div>
                <Link href={`/menu/${item.id}`} className="w-full px-4 flex justify-center items-center">
                  <button className="w-full bg-green-500 text-white font-bold text-lg py-1 mt-5 rounded-md hover:bg-green-300">
                    See Details
                  </button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
