import Image from "next/image";
import baner from "@/public/images/Motorization.png";

const Baner5 = () => {
  return (
    <>
      <div className="md:flex md:flex-row mt-20 w-[100%] border">
        <div className="flex flex-col justify-center md:w-[35%] ml-5">
          <div className="text-2xl md:mt-10 font-bold ">
            <p>Motorization and Smart Home Integration</p>
          </div>
          <div className="md:text-sm mt-2">
            <p>
              Upgrade your lifestyle with our motorized blinds and shades,
              allowing easy control through a remote, smartphone, or smart home
              system.
            </p>
          </div>
        </div>
        <div className="ml-2 md:w-[75%]">
          <Image src={baner} alt="Baner Image" />
        </div>
      </div>
    </>
  );
};

export default Baner5;
