import Image from "next/image";
import baner from "../../../public/images/WhyChooseBlindArizonaImage.png";

const Baner3 = () => {
  return (
    <>
      <div className="flex text-2xl items-center justify-center mt-20 font-bold">
        <p>Why Choose Blinds Arizona?</p>
      </div>
      <div className="md:flex md:flex-row w-[100%] justify-between">
        <div className="flex flex-col justify-center ml-1 md:ml-10 md:w-[20%] right-1">
          <div className="text-2xl mt-4">
            <p>Expert Consultation</p>
          </div>
          <div className="text-sm mt-2">
            <p>
              Our experienced design consultants provide personalized in- home
              consultations to help you select the best window treatments for
              your space.
            </p>
          </div>
        </div>
        <div className=" md:w-[70%]">
          <Image src={baner} alt="Baner Image" />
        </div>
      </div>
    </>
  );
};
export default Baner3;
