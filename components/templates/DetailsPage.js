/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
function DetailsPage({ dataMenu }) {
  console.log(dataMenu.id);

  return (
    <div className="w-full">
      <h2 className="w-fit border-b-4 text-3xl font-bold border-green-500">
        Details
      </h2>
      <div className="w-full flex flex-col justify-center items-start">
        <FoodInfo dataMenu={dataMenu} />
        <FoodDetails dataMenu={dataMenu} />
        <FoodIngredients dataMenu={dataMenu} />
        <FoodRecipe dataMenu={dataMenu} />
      </div>
      <button></button>
    </div>
  );
}

export default DetailsPage;

function FoodInfo({ dataMenu }) {
  if (dataMenu.id === undefined) return null;

  return (
    <div className="w-full flex justify-start items-center gpa-x-4">
      <img src={`/images/${dataMenu?.id}.jpeg`} alt={dataMenu?.id} className="max-h-56"/>
    </div>
  );
}

function FoodDetails({ dataMenu }) {
  return <div></div>;
}

function FoodIngredients({ dataMenu }) {
  return <div></div>;
}

function FoodRecipe({ dataMenu }) {
  return <div></div>;
}
