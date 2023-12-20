import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col justify-between gap-12 md:flex-row">
      <div className="relative hidden flex-1 xl:flex">
        <Image
          className="hidden flex-1 object-cover xl:flex"
          src="/p1.jpeg"
          alt=""
          fill
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3">
        <div className="flex gap-2 font-medium opacity-90">
          <span>20.10.2023 </span>
          <span>-</span>
          <span className="text-base text-red-500 xl:text-lg">CULTURE</span>
        </div>
        <h2 className="text-2xl font-bold xl:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h2>
        <p className=" text-[var(--softTextColor)] xl:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae eos
          beatae enim? Voluptatem architecto enim error. Tempora modi voluptatum
          quo aperiam, ipsa ratione placeat commodi atque dignissimos eius, vel
          inventore.
        </p>
        <button className="relative w-max text-sm font-semibold after:absolute after:-bottom-[2px] after:left-0 after:h-[1.7px] after:w-full after:bg-red-500">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
