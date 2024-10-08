/* eslint-disable @next/next/no-img-element */
import { IoLocationOutline } from "react-icons/io5";

import Dollar from "../icons/Dollar";

/* eslint-disable jsx-a11y/alt-text */
function DetailsPage({ data }) {
  if (data?.id === undefined) return null;

  return (
    <div className="w-full mb-32">
      <h2 className="w-fit border-b-4 text-3xl font-bold border-green-500">
        Details
      </h2>
      <div className="w-full flex flex-col justify-center items-start mt-12">
        <FoodInfo data={data} />
        <FoodDetails data={data} />
        <FoodIngredients data={data} />
        <FoodRecipe data={data} />
      </div>
    </div>
  );
}

export default DetailsPage;

function FoodInfo({ data }) {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col md:flex-row justify-start items-center gap-x-6 ">
        <img
          src={`/images/${data?.id}.jpeg`}
          alt={data?.id}
          className="md:max-h-56 rounded-md"
        />
        <div className="w-full flex flex-col justify-start items-start  min-h-56 px-4">
          <h2 className="font-bold text-xl mt-5 md:text-2xl text-green-500">
            {data.name}
          </h2>
          <div className=" flex justify-center items-center gap-x-1 font-semibold ">
            <IoLocationOutline className="h-5 mt-3 text-slate-600 w-5" />
            <p className="text-slate-500 text-xl mt-3">
              {data.details[0].Cuisine}
            </p>
          </div>
          <div className="flex justify-start items-center  mt-8">
            <Dollar />
            <h3
              className={`${
                data.discount ? "text-red-500" : ""
              } font-bold text-lg `}
            >
              {data.discount
                ? (data.price * (100 - data.discount)) / 100
                : data.price}
              $
            </h3>
          </div>

          {data.discount ? (
            <span className="my-5 pl-2 font-bold w-full bg-red-500 text-white py-2  text-center rounded-md text-lg md:w-1/3">
              {data.discount}$ OFF
            </span>
          ) : null}
        </div>
      </div>

      <p className="text-slate-600  text-justify mt-4 md:mt-10 px-4 md:px-0">
        {data.introduction}
      </p>
    </div>
  );
}

function FoodDetails({ data }) {
  return (
    <div className="w-full my-16">
      <h2 className="text-2xl font-bold text-green-500 mb-6">Detail</h2>
      <ul className="w-full flex flex-col gap-y-2">
        {data.details.map((item, index) => (
          <li className="space-x-2  " key={index}>
            <span className="font-semibold text-lg before:content-['•']  before:inlineBlock before:text-green-500">
              &nbsp; {Object.keys(item)[0]}:
            </span>
            <span className="text-lg text-slate-500   ">
              {Object.values(item)[0]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FoodIngredients({ data }) {
  return (
    <div className="w-full mb-16">
      <h2 className="text-2xl font-bold text-green-500 mb-6">Ingredients</h2>
      <ul className="w-full flex flex-col gap-y-2">
        {data.ingredients.map((item, index) => (
          <li
            className="font-semibold lg:text-lg before:content-['•']  before:inlineBlock before:text-green-500 text-sm md:text-base"
            key={index}
          >
            &nbsp;{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FoodRecipe({ data }) {
  return (
    <div className="w-full mt-12">
      <h2 className="text-2xl font-bold text-green-500 mb-8 ">Recipe</h2>
      <ul className="w-full ">
        {data.recipe.map((item, index) => (
          <li
            key={index}
            className="odd:bg-green-200 w-full min-h-20 even:bg-green-400 flex justify-center items-center"
          >
            <div className="w-full flex justify-center items-center">
              <span className="w-[10%] pl-4 text-center text-2xl">
                {index + 1}
              </span>
              <span className="w-[90%] px-4 font-semibold text-slate-700 text-xs sm:text-sm md:text-base ">
                {item}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
