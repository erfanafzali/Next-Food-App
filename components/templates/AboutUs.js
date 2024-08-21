import Apple from "../icons/Apple";
import Binance from "../icons/Binance";
import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";

function AboutUs() {
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl text-green-500 mb-6">Who We Are?</h1>
      <p className="text-base text-justify text-slate-700 md:text-lg ">
        BotoFood company was founded in 2009 by Garrett Camp and Travis
        Kalanick.The company began food delivery in August 2014 with the launch
        of the UberFRESH service in Santa Monica, California. In 2015, the
        platform was renamed to UberEATS and the ordering software was released
        as its own application, separate from the app for Uber rides.In 2016, it
        commenced operations in both London and Paris.
      </p>

      <div className="w-full flex justify-around items-center gap-x-4">
        <Apple />
        <SpaceX />
        <Binance />
        <Tesla />
      </div>
    </div>
  );
}

export default AboutUs;
