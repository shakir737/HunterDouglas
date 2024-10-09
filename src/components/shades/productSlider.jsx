import Image from "next/image";
import blinds from "@/public/images/Blinds.png";
import shades from "@/public/images/Mask-group.png";
import shutters from "@/public/images/Mask-group-1.png";
import drapery from "@/public/images/Mask-group-2.png";
const ProductSlider = () => {
  return (
    <>
      <div className="mt-10">
        <div className="mt-10 ml-20 ">
          <div className="flex justify-center items-center text-3xl ">
            <p>Shades Collection</p>
          </div>
          <div className="mt-2 md:flex md:justify-between gap-2 ml-10 mr-10">
            <div className="flex flex-col">
              <div>
                <Image src={blinds} alt="blinds" />
              </div>
              <div className="text-xl mt-2">
                <p>Wood Blinds</p>
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
                <p>Faux Wood Blinds</p>
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
                <p>Aluminium Blinds</p>
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
                <p>Vertical Blinds</p>
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

export default ProductSlider;
