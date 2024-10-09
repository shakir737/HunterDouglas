import Image from "next/image";
import service from "../../../public/images/our service.png";

const Process = () => {
  return (
    <>
      <div className="mt-20">
        <div className="mt-3 flex justify-center items-center text-2xl font-bold">
          <p>Our Process</p>
        </div>
        <div className="pt-10 md:flex md:flex-row md:justify-center md:gap-2">
          <div>
            <Image src={service} alt="our process" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="border  pr-10">
              <div className="pl-3 text-2xl font-bold flex flex-row gap-1 mt-2">
                <div className="bg-[#d9985f] rounded-full py-1 px-2 text-white">
                  1
                </div>
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

            <div className="border pr-5">
              <div className="pl-3 text-2xl font-bold flex flex-row gap-1 mt-2">
                <div className="bg-[#d9985f] rounded-full py-1 px-2 text-white">
                  2
                </div>
                <div>
                  <p> Customization</p>
                </div>
              </div>
              <div className="pl-3">
                <p>
                  We tailor each window treatment to your specific measurements
                  and preferences, ensuring a
                </p>
                <p>perfect fit and style for your home or office.</p>
              </div>
            </div>

            <div className="border  ">
              <div className="pl-3 text-2xl font-bold flex flex-row mt-2 gap-1">
                <div className="bg-[#d9985f] rounded-full py-1 px-2 text-white">
                  3
                </div>
                <div>
                  <p> Profesional Installation</p>
                </div>
              </div>
              <div className="pl-3">
                <p>
                  Our professional installation team ensures your window
                  treatments are installed correctly and
                </p>
                <p>function perfectly, taking care of every detail.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10"></div>
    </>
  );
};

export default Process;
