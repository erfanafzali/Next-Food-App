import AboutUs from "../templates/AboutUs";
import FoodAppDetail from "../templates/FoodAppDetail";
import Order from "../templates/Order";
import Restrictions from "../templates/Restrictions";
import WhyUs from "../templates/WhyUs";

function HomePage() {
  return (
    <div>
      <FoodAppDetail />
      <WhyUs />
      <AboutUs />
      <Order />
      <Restrictions />
    </div>
  );
}

export default HomePage;
