function HoverEffect({ title }) {
 
  return (
    <p className="text-base group relative xl:text-lg">
      <span className=" cursor-pointer hover:text-slate-400 whitespace-nowrap">
        {title}
      </span>
      <span className="absolute -bottom-1 left-1/2 w-0 transition-all duration-300 h-0.5 bg-green-500 group-hover:w-3/6 active:w-3/6"></span>
      <span className="absolute -bottom-1 right-1/2 w-0 transition-all duration-300 h-0.5 bg-green-500 group-hover:w-3/6 active:w-3/6"></span>
    </p>
  );
}

export default HoverEffect;
