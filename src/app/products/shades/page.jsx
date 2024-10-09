import ProductBaner from "@/components/shades/productBaner";
import ShadesBaner from "@/components/shades/shadesBaner";
import ProductSlider from "@/components/shades/productSlider";
import Process from "@/components/mainPage/process";

const page = () => {
  return (
    <>
      <div>
        <ProductBaner />
        <ShadesBaner />
        <ProductSlider />
        <Process />
      </div>
    </>
  );
};

export default page;
