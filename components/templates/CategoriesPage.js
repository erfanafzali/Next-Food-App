/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import CardFood from "./CardFood";

function CategoriesPage({ data }) {
  const router = useRouter();

  const [query, setQuery] = useState({ difficulty: "", time: "" });

  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty !== difficulty || query.time !== time) {
      setQuery({ difficulty, time });
    }
  }, []);

  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };

  const searchHandler = () => {
    router.push({
      pathname: "/categories",
      query,
    });
  };

  return (
    <div className="w-full">
      <h2 className="font-bold text-3xl w-fit border-b-4 border-green-600 pb-1 mb-4">
        Categories
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-start items-center  px-4 gap-y-6 mt-16 gap-x-4">
        <select
          value={query.difficulty}
          name="difficulty"
          onChange={changeHandler}
          className=" md:w-48 w-full  py-2 outline-none rounded-lg bg-white shadow-md text-green-500"
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          value={query.time}
          name="time"
          onChange={changeHandler}
          className=" md:w-48 w-full py-2 outline-none rounded-lg bg-white shadow-md text-green-500"
        >
          <option value="">Cooking Time</option>
          <option value="more">More than 30 min</option>
          <option value="less">Less than 30 min</option>
        </select>
        <button
          onClick={searchHandler}
          className="w-full md:w-48 py-2 bg-green-500 rounded-md text-white font-bold shadow border-0 outline-none"
        >
          Search
        </button>
      </div>
      <div className=" mt-5 mb-32">
        {!data.length ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img src="/images/search.png" className="mx-auto mt-10" />
        ) : null}
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-4 gap-y-4 mt-16">
          {data.map((item) => (
            <CardFood key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CategoriesPage;
