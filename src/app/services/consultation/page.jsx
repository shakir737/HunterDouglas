import BlindsBaner from "@/components/blinds/blindsBaner";
import Baner from "@/components/mainPage/baner";

import InputPage from "@/components/services/inputPage";
import Process from "@/components/mainPage/process";

import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Baner />
      <BlindsBaner />
      <Process />
      <InputPage />
    </div>
  );
}
