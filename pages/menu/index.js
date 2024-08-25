/* eslint-disable react-hooks/rules-of-hooks */
import Menu from "@/components/templates/Menu";

function index({ data }) {
  return <Menu data={data} />;
}

export default index;

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/data");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 10, //second
  };
}
