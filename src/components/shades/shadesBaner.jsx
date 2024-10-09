import Image from "next/image";
import service from "../../../public/images/image-19.png";
import { Blinds, Smartphone, ScrollText, Rows4 } from "lucide-react";
const ShadesBaner = () => {
  return (
    <>
      <div className="mt-20">
        <div className="mt-3 flex justify-center items-center text-2xl font-bold">
          <p>Why Choose Shades from Blinds Arizona?</p>
        </div>
        <div className="pt-10 md:flex md:flex-row md:justify-center md:gap-2">
          <div className="flex flex-col gap-2">
            <div className="border  pr-10 flex flex-row">
              <div>
                <div className="pl-3 text-2xl font-bold flex flex-row gap-1 mt-2">
                  <div>
                    <p>Free In Home Consultation</p>
                  </div>
                </div>
                <div className="pl-3">
                  <p>
                    Schedule a free consultation with our design experts to
                    explore our range of products and find the
                  </p>
                  <p>perfect fit for your windows.</p>
                </div>
              </div>
              <div className="flex justity-center items-center rounded-full text-white">
                <div className="bg-[#d9985f] m-1 p-1 hover:bg-white hover:text-[#d9985f]  rounded-full border-2 border-[#d9985f] text-white">
                  <Blinds size={35} />
                </div>
              </div>
            </div>
            <div className="border  pr-10 flex flex-row">
              <div>
                <div className="pl-3 text-2xl font-bold flex flex-row gap-1 mt-2">
                  <div>
                    <p>Free In Home Consultation</p>
                  </div>
                </div>
                <div className="pl-3">
                  <p>
                    Schedule a free consultation with our design experts to
                    explore our range of products and find the
                  </p>
                  <p>perfect fit for your windows.</p>
                </div>
              </div>
              <div className="flex justity-center items-center rounded-full text-white">
                <div className="bg-[#d9985f] m-1 p-1 hover:bg-white hover:text-[#d9985f]  rounded-full border-2 border-[#d9985f] text-white">
                  <Rows4 size={35} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={service} alt="our process" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="border  pr-10 flex flex-row">
              <div className="flex justity-center items-center rounded-full text-white">
                <div className="bg-[#d9985f] m-1 p-1 hover:bg-white hover:text-[#d9985f]  rounded-full border-2 border-[#d9985f] text-white">
                  <ScrollText size={35} />
                </div>
              </div>
              <div>
                <div className="pl-3 text-2xl font-bold flex flex-row gap-1 mt-2">
                  <div>
                    <p>Free In Home Consultation</p>
                  </div>
                </div>
                <div className="pl-3">
                  <p>
                    Schedule a free consultation with our design experts to
                    explore our range of products and find the
                  </p>
                  <p>perfect fit for your windows.</p>
                </div>
              </div>
            </div>
            <div className="border  pr-10 flex flex-row">
              <div className="flex justity-center items-center rounded-full text-white">
                <div className="bg-[#d9985f] m-1 p-1 hover:bg-white hover:text-[#d9985f]  rounded-full border-2 border-[#d9985f] text-white">
                  <Smartphone size={35} />
                </div>
              </div>
              <div>
                <div className="pl-3 text-2xl font-bold flex flex-row gap-1 mt-2">
                  <div>
                    <p>Free In Home Consultation</p>
                  </div>
                </div>
                <div className="pl-3">
                  <p>
                    Schedule a free consultation with our design experts to
                    explore our range of products and find the
                  </p>
                  <p>perfect fit for your windows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
    </>
  );
};

export default ShadesBaner;
