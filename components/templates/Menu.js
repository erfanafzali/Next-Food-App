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
                <div>
                  <h3>{item.name}</h3>
                  <div>
                    <span>{item.details[0].Cuisine}</span>
                    <span>
                      <Location />
                    </span>
                  </div>
                </div>
                <div></div>
                <div></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
