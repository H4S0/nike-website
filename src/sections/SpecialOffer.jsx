import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max:xl:flex-col-reverse gap-10 max-contain">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div>
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red ml-2">Special</span>
          <span className="text-coral-red ml-2 mr-2">Offer</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <div className="mt-11 flex gap-4 flex-wrap text-white">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="View details" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
