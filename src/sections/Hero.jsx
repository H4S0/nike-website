import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-0">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          {" "}
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            {" "}
            The New Arrival{" "}
          </span>
          <br />
          <span className="text-coral-red inline-block mr-3 mt-3">Nike</span>
          Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-8 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, i) => (
            <div key={i}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex relative flex-1 items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain"
        />
      </div>

      <div className="flex sm:gap-6 gap-4 absolute left-[15%] sm:bottom-[50%] xl:bottom-[63%] xl:left-[50%]">
        {shoes.map((shoe, i) => (
          <div key={i}>
            <ShoeCard
              imgURL={shoe}
              changeBigShoeImage={(shoe) => {
                setBigShoeImg(shoe);
              }}
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
