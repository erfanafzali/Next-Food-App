import CategoriesPage from "@/components/templates/CategoriesPage";

function index({ data }) {
  return <CategoriesPage data={data} />;
}

export default index;

export async function getServerSideProps(context) {
  const {
    query: { difficulty, time },
  } = context;

  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  const filterdData = data.filter((item) => {
    const difficultyResult = item.details.filter(
      (detail) => detail.Difficulty && detail.Difficulty === difficulty
    );

    const timeResult = item.details.filter((detail) => {
      const cookingTime = detail["Cooking Time"] || "";
      const [timeDetail] = cookingTime.split(" ");
      if (time === "less" && timeDetail && +timeDetail <= 30) {
        return detail;
      } else if (time === "more" && timeDetail && +timeDetail > 30) {
        return detail;
      }
    });

    if (time && difficulty && timeResult.length && difficultyResult.length) {
      return item;
    } else if (!time && difficulty && difficulty.length) {
      return item;
    } else if (time && !difficulty && time.length) {
      return item;
    }
  });

  return { props: { data: filterdData } };
}
