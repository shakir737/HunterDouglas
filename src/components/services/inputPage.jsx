import Image from "next/image";
import baner from "@/../public/images/Motorization.png";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "../ui/button";
const InputPage = () => {
  return (
    <>
      <div className="mt-20 flex justify-center items-center text-2xl font-bold">
        <p>Request a Consultation</p>
      </div>
      <div className="md:flex mt-5 w-[100%] gap-10 items-center justify-center">
        <div className="w-full md:w-[35%]">
          <Label htmlFor="firstName">First Name*</Label>
          <Input type="text" id="firstName" placeholder="First Name" />
          <Label htmlFor="lastName">Last Name*</Label>
          <Input type="text" id="lastName" placeholder="Last Name" />
          <Label htmlFor="email">Email*</Label>
          <Input type="email" id="email" placeholder="Email" />
          <Label htmlFor="products">Products</Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="--Select Products--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Default">
                --Please Select A Product--
              </SelectItem>
              <SelectItem value="Blinds">Blinds</SelectItem>
              <SelectItem value="Shades">Shades</SelectItem>
              <SelectItem value="Shutters">Shutters</SelectItem>
              <SelectItem value="Drapery">Drapery</SelectItem>
            </SelectContent>
          </Select>
          <Label htmlFor="phone">Phone*</Label>
          <Input type="number" id="phone" placeholder="Phone Number" />
          <Label htmlFor="email">How Can We Help You?</Label>
          <Input type="email" id="email" placeholder="Email" />
          <Button variant="destructive" className="mt-4">
            Submit
          </Button>
        </div>

        <div className="w-full md:w-[35%]">
          <Image src={baner} alt="Baner Image" />
        </div>
      </div>
    </>
  );
};

export default InputPage;
