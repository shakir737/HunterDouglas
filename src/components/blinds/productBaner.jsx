import Image from "next/image";
import banerSmall from "@/public/images/LogoFooter.png";
import banerMain from "@/public/images/imageBack.png";
import facebookIcon from "@/public/images/herofacebook.svg";
import instagram from "@/public/images/heroinstagram.svg";
import pinterest from "@/public/images/heropinterest.svg";

const ProductBaner = () => {
  return (
    <div className="md:flex md:justify-between mt-10">
      <div className="md:flex md:flex-col md:ml-10 md:mt-5 md:items-center">
        <div className="md:ml-20 md:mt-10">
          <div>
            <Image src={banerSmall} alt="Baner Image" />
          </div>

          <div className="md:text-4xl md:mt-10 md:font-bold">
            <p>Custom Blinds In Arizona</p>
            <p>- Enhance Your Home</p>
            <p>with Blinds Arizona</p>
          </div>
          <div className="mt-2">
            <p>Home » Products » Blinds</p>
          </div>
          <div className="md:text-xl mt-2">
            <p>Transform Your Space with High-Quality</p>
            <p>Custom Blinds</p>
          </div>
          <div className="text-sm">
            <p>Welcome to Blinds Arizona, your trusted source for premium</p>
            <p>custom blinds in Arizona. Our extensive collection of custom</p>
            <p>
              blinds offers the perfect blend of style, functionality, and
              durability.
            </p>
            <p>
              Whether you want to add a touch of elegance to your living room
            </p>
            <p>or improve the privacy of your bedroom, we have the ideal</p>
            <p>solutions for you.</p>
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

export default ProductBaner;
