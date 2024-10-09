import Image from "next/image";
import banerSmall from "@/../public/images/Group 1.svg";
import banerMain from "@/../public/images/mainpage.png";
import facebookIcon from "@/../public/images/hero-16px-logo-facebook.svg";
import instagram from "@/../public/images/hero-16px-logo-instagram.svg";
import pinterest from "@/../public/images/hero-16px-logo-pinterest.svg";

const Baner = () => {
  return (
    <div className="md:flex md:justify-between mt-10">
      <div className="md:flex md:flex-col md:ml-10 md:mt-10 md:items-center">
        <div className="md:ml-20 md:mt-20">
          <div>
            <Image src={banerSmall} alt="Baner Image" />
          </div>

          <div className="text-2xl md:text-4xl mt-10 font-bold">
            <p>Custom Blinds and Window Treatments in Arizona</p>
          </div>
          <div className="text-2xl mt-3">
            <p>Premium Custom Window Treatments In Arizona</p>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between ">
        <div>
          <Image src={banerMain} alt="Baner Image" />
        </div>
        <div className="hidden md:flex md:flex-col gap-7 ml-2 md:justify-center">
          <Image src={facebookIcon} height={20} width={25} />
          <Image src={instagram} height={20} width={25} />
          <Image src={pinterest} height={20} width={25} />
        </div>
      </div>
      <div className="left-0">
        <div className="flex flex-col gap-3 ml-10">
          {/* <Image src={facebookIcon} height={20} width={25} />
          <Image src={instagram} height={20} width={25} />
          <Image src={pinterest} height={20} width={25} /> */}
        </div>
      </div>
    </div>
  );
};

export default Baner;
