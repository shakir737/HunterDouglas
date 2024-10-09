import Image from "next/image";
import blinds from "@/public/images/Blinds.png";
import shades from "@/public/images/Shades.png";
import shutters from "@/public/images/Shutters.png";
import drapery from "@/public/images/Drapery.png";
const Slider1 = () => {
  return (
    <>
      <div className="mt-10 bg-[#d9dbd5] border">
        <div className="mt-10 md:ml-20 ">
          <div className="pt-10 text-3xl md:pl-10">
            <p>Our Products</p>
          </div>
          <div className="mt-2 md:flex md:justify-between gap-2 md:ml-10 md:mr-10">
            <div className="flex flex-col">
              <div>
                <Image src={blinds} alt="blinds" />
              </div>
              <div className="text-xl mt-2">
                <p>Blinds</p>
              </div>
              <div className="text-sm mb-20">
                <p>Discover our variety of custom blinds, including wood,</p>
                <p> faux wood, aluminium and vertical blinds, crafted to </p>
                <p>offer privacy, light control and a stylish touch to any</p>
                <p>room.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <Image src={shades} alt="blinds" />
              </div>
              <div className="text-xl mt-2">
                <p>Shades</p>
              </div>
              <div className="text-sm mb-20">
                <p>Discover our variety of custom shades, including wood,</p>
                <p> faux wood, aluminium and vertical blinds, crafted to </p>
                <p>offer privacy, light control and a stylish touch to any</p>
                <p>room.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <Image src={shutters} alt="blinds" />
              </div>
              <div className="text-xl mt-2">
                <p>Shutters</p>
              </div>
              <div className="text-sm mb-20">
                <p>Discover our variety of custom shutters, including wood,</p>
                <p> faux wood, aluminium and vertical blinds, crafted to </p>
                <p>offer privacy, light control and a stylish touch to any</p>
                <p>room.</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <Image src={drapery} alt="blinds" />
              </div>
              <div className="text-xl mt-2">
                <p>Drapery</p>
              </div>
              <div className="text-sm mb-20">
                <p>Discover our variety of custom drapery, including wood,</p>
                <p> faux wood, aluminium and vertical blinds, crafted to </p>
                <p>offer privacy, light control and a stylish touch to any</p>
                <p>room.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider1;
