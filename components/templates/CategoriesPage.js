function CategoriesPage() {
  return (
    <div>
      <h2 className="font-bold text-3xl w-fit border-b-4 border-green-600 pb-1 mb-4">
        Categories
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-start items-center  px-4 gap-y-6 mt-16 gap-x-4">
        <select
          value=""
          onChange=""
          className=" md:w-48 w-full  py-2 outline-none rounded-lg bg-white shadow-md text-green-500"
        >
          <option value="">Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select
          value=""
          onChange=""
          className=" md:w-48 w-full py-2 outline-none rounded-lg bg-white shadow-md text-green-500"
        >
          <option value="">Cooking Time</option>
          <option value="">More than 30 min</option>
          <option value="">Less than 30 min</option>
        </select>
        <button className="w-full md:w-48 py-2 bg-green-500 rounded-md text-white font-bold shadow border-0 outline-none">Search</button>
      </div>
    </div>
  );
}

export default CategoriesPage;
