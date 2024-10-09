import React from "react";
import ProductBaner from "@/components/blinds/productBaner";
import BlindsBaner from "@/components/blinds/blindsBaner";
import ProductSlider from "@/components/blinds/productSlider";
import Process from "@/components/mainPage/process";

const page = () => {
  return (
    <>
      <div>
        <ProductBaner />
        <BlindsBaner />
        <ProductSlider />
        <Process />
      </div>
    </>
  );
};

export default page;
