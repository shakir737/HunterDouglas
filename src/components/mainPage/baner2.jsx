import Image from "next/image";
import baner from "@/../public/images/stylefunctionality.png";

const Baner2 = () => {
  return (
    <div className="md:flex md:flex-row mt-20 md:w-[100%]">
      <div className="ml-2 md:w-[75%]">
        <Image src={baner} alt="Baner Image" />
      </div>

      <div className="flex flex-col justify-center ml-2 md:ml-2 md:w-[25%]">
        <div className="text-xl md:text-2xl font-bold ">
          <p>Transform Your Space With Style and Functionality</p>
        </div>
        <div className="md:text-sm mt-2">
          <p>
            At Blinds Arizona, we specialize in bringing your vision to life
            with our high-quality custom window treatments. Our extensive
            collection of blinds, shades, shutters, and drapery are designed to
            enhance both the aesthetics and functionality of your home or
            office. Whether you are looking for a sleek modern look or a classic
            elegant style, we have the perfect solutions for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Baner2;
