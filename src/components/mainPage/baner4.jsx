import Image from "next/image";
import baner from "@/public/images/QualityCraftsmanship.png";

const Baner4 = () => {
  return (
    <div className="md:flex md:flex-row mt-20 border w-[100%]">
      <div className="ml-2 md:w-[70%]">
        <Image src={baner} alt="Baner Image" />
      </div>

      <div className="flex flex-col justify-center md:w-[30%]">
        <div className="text-2xl md:mt-10 font-bold ml-2">
          <p>Quality Craftsmanship</p>
        </div>
        <div className="md:text-sm mt-2 ml-2 mb-4">
          <p>
            We pride ourselves on offering products made from the finest
            materials with exceptional craftsmanship, ensuring long-lasting
            quality and satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Baner4;
