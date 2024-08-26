import Loader from "@/components/modules/Loader";
import DetailsPage from "@/components/templates/DetailsPage";
import { useRouter } from "next/router";

function FoodDetail({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }
  return <DetailsPage data={data} />;
}

export default FoodDetail;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  const paths = data.map((food) => ({
    params: { id: food.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
}
