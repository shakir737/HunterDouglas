"use client";
import react, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";

import Link from "next/link";

const ActionButtons = () => {
  const [showproducts, setShowProducts] = useState(false);
  return (
    <div>
      <div className="ml-2 md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-3 items-start w-full text-lg text-black mt-10">
                  <Link href="/">Home</Link>
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowProducts(!showproducts)}
                  >
                    Products
                  </div>
                  <div className="flex flex-col ml-1 space-y-1 left-0">
                    {showproducts ? (
                      <>
                        <Link href="/products/blinds">Blinds</Link>
                        <Link href="/products/shades">Shades</Link>
                        <Link href="/products/shutters">Shutters</Link>
                        <Link href="/products/drapery">Drapery</Link>
                      </>
                    ) : null}
                  </div>
                  <Link href="/">Pricing</Link>
                  <Link href="/">Contact</Link>
                  <Link href="/">About</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ActionButtons;
