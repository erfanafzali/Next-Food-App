import Link from "next/link";
import HoverEffect from "../modules/HoverEffect";

function Header() {
  return (
    <header className="w-full mb-12 md:mb-20">
      <div className="w-full flex justify-between items-center mt-8">
        <Link
          href="/"
          className="text-green-600 font-bold  text-lg md:text-xl lg:text-2xl"
        >
          FoodApp
        </Link>
        <div className="flex justify-center items-center gap-x-5 text-base lg:text-lg font-semibold text-gray-700">
          <Link href="/menu">
            <HoverEffect title="Menu" />
          </Link>
          <Link href="/categories">
            <HoverEffect title="Categories" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
