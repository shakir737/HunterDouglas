import Baner from "@/components/mainPage/baner";
import Baner2 from "@/components/mainPage/baner2";
import Baner3 from "@/components/mainPage/baner3";
import Baner4 from "@/components/mainPage/baner4";
import Baner5 from "@/components/mainPage/baner5";
import Process from "@/components/mainPage/process";
import Slider1 from "@/components/mainPage/slider1";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Baner />
      <Baner2 />
      <Slider1 />
      <Baner3 />
      <Baner4 />
      <Baner5 />
      <Process />
    </div>
  );
}
