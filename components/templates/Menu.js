import CardFood from "./CardFood";

function Menu({ data }) {
  return (
    <div className="w-full mb-32">
      <h2 className="w-fit border-b-4 text-3xl font-bold border-green-500">
        Menu
      </h2>
      <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-4 gap-y-4 mt-16">
        {data.map((item) => (
          <CardFood key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
