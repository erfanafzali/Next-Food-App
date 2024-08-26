import Menu from "../../components/templates/Menu";

function index({ data }) {
  return <Menu data={data} />;
}

export default index;

export async function getStaticProps() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
}
