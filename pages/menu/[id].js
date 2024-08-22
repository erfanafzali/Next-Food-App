import DetailsPage from "@/components/templates/DetailsPage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:4000/data";

function FoodDetail() {
  const router = useRouter();
  const id = router?.query?.id;
  const [dataMenu, setDataMenu] = useState(null || []);

  useEffect(() => {
    async function fetchData() {
      if (id === undefined) return null;
      const res = await fetch(`${BASE_URL}/${id}`);
      const data = await res.json();
      setDataMenu(data);
    }

    fetchData();
  }, [id]);

  return <DetailsPage dataMenu={dataMenu} />;
}

export default FoodDetail;
