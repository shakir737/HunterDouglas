import Image from "next/image";
import footerLogo from "@/../public/images/LogoFooter.png";
import rgmLogo from "@/../public/images/RGM Logo.png";
import followUS from "@/../public/images/follow us.png";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col mt-10 mb-2">
        <div className="flex justify-center mb-10">
          <Image src={followUS} alt="follow us" />
        </div>
        <hr />
        <div className="md:flex md:justify-between mt-5">
          <div>
            <Image src={footerLogo} alt="footer logo" />
          </div>
          <div className="items-center">
            <p>
              Blinds Arizona - Your trusted partner for custom blinds, shades,
              shutters, and
            </p>
            <p>
              drapery in Arizona. Transform your space with the beauty and
              functionality of our
            </p>
            <p>premium window treatments.</p>
          </div>
          <div>
            <Image src={rgmLogo} alt="RSG Logo" />
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#010530] text-white text-xl">
          <div className="mt-4 mb-4">
            <p>© 2024 Blinds Arizona All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
