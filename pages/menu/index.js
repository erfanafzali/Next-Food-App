/* eslint-disable react-hooks/rules-of-hooks */
import Menu from "@/components/templates/Menu";
import { useEffect, useState } from "react";

function index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/data");
      const data = await res.json();
      setData(data);
    }

    fetchData();
  }, []);

  return <Menu data={data} />;
}

export default index;
