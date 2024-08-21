import Link from "next/link";
import styles from "./Order.module.css";

function Order() {
  return (
    <div className={`${styles.container} w-full mb-28`}>
      <h2 className="text-green-500  text-2xl font-bold mb-6">How to Order?</h2>
      <ul className="font-semibold text-slate-600 space-y-2  text-sm md:text-base">
        <li>Sign in (or create an account) and set your delivery address.</li>
        <li>Choose the restaurant you want to order from.</li>
        <li>Select your items and tap “Add to Cart”.</li>
        <li>To place your order, select “View cart” or “Checkout”.</li>
        <li>Review your order and tap “Place Order”...</li>
        <li>Track your order progress.</li>
      </ul>

      <ul className="w-full flex justify-between mt-20 md:mt-28 mb-16 font-semibold text-sm md:text-base lg:text-lg items-center gap-x-4 text-slate-600 ">
        <Link href="" className="px-6 md:px-16 rounded-md py-2 shadow-md bg-white">Menu</Link>
        <Link href="" className="px-6 md:px-16 rounded-md py-2 shadow-md bg-white">Categories</Link>
        <Link href="" className="px-6 md:px-16 rounded-md py-2 shadow-md bg-white">Discount</Link>
      </ul>
    </div>
  );
}

export default Order;
