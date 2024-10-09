import React from "react";
import facebookIcon from "@/public/images/herofacebook.svg";
import instagram from "@/public/images/heroinstagram.svg";
import pinterest from "@/public/images/heropinterest.svg";
import logo from "@/public/images/logo2.png";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ActionButtons from "./action-buttons";

const Navbar = () => {
  return (
    <>
      <div className="mt-5 md:mt-0 md:hideen">
        <ActionButtons />
      </div>
      <div className="hidden md:flex md:flex-col md:sticky md:top-0 md:left-0 md:z-50 md:w-full md:bg-white">
        <div className="md:flex md:justify-between md:px-20 md:mb-1 md:mt-2 md:overflow-x-clip">
          <div className="flex justify-between gap-10">
            <h3>(480) 590-2523 </h3>
            <h3>Hours & Location</h3>
          </div>
          <div className="md:flex md:justify-between gap-3">
            <Image src={facebookIcon} height={20} width={25} />
            <Image src={instagram} height={20} width={25} />
            <Image src={pinterest} height={20} width={25} />
          </div>
        </div>
        <hr />
        <div className="flex justify-between px-20 mt-4 mb-2">
          <Image src={logo} width={250} height={150} />
          <div>
            <Link href="/services/consultation">
              <Button variant="destructive">Request A Consultation</Button>
            </Link>
          </div>
        </div>
        <hr />
        <div className="flex justify-center items-center px-20 mt-4 mb-2">
          <div className="flex flex-between">
            <div className="text-sm mt-2 mr-1">
              <Link href="/">Home</Link>
            </div>
            <div className="bg-none hover:bg-none ">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <div className="flex flex-col items-center">
                      <NavigationMenuContent>
                        <div className="ml-6 mt-2 mr-20 mb-1 ">
                          <NavigationMenuLink>
                            <Link href="/products/blinds">Blinds</Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="ml-6 mr-20 mb-1">
                          <NavigationMenuLink>
                            <Link href="/products/shades">Shades</Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="ml-6 mr-20 mb-1">
                          <NavigationMenuLink>
                            <Link href="/products/shades">Shutters</Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="ml-6 mr-20 mb-1">
                          <NavigationMenuLink>
                            <Link href="/products/shades">Drapery</Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="bg-none hover:bg-none ">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Motorization</NavigationMenuTrigger>
                    <div className=" flex flex-col">
                      <NavigationMenuContent>
                        <div className="ml-1 mt-2 mr-5 mb-1  ">
                          <NavigationMenuLink></NavigationMenuLink>
                        </div>
                        <div className="ml-1 mt-2 mr-5 mb-1 text-sm">
                          <NavigationMenuLink>
                            <Link
                              href="/"
                              className="w-full h-full flex flex-row"
                            >
                              <div>Motorization</div>
                              <div>&nbsp;</div>
                              <div>Benefits</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="ml-1 mt-2 mr-1 mb-1 text-sm">
                          <NavigationMenuLink>
                            <Link href="/">Motorized Blinds</Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="ml-1 mt-2 mr-1 mb-1 text-sm">
                          <NavigationMenuLink>
                            Motorized Shades
                          </NavigationMenuLink>
                        </div>
                        <div className="ml-1 mb-1 text-sm mr-2 flex flex-row">
                          <NavigationMenuLink>
                            <Link href="/">
                              <div>Smart Home</div>

                              <div>Integration</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="bg-none hover:bg-none ">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Inspiration</NavigationMenuTrigger>
                    <div className="flex flex-col items-center">
                      <NavigationMenuContent>
                        <div className="ml-6 mr-20 mb-1">
                          <NavigationMenuLink>Blogs</NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="bg-none hover:bg-none ">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                    <div className="flex flex-col items-center">
                      <NavigationMenuContent>
                        <div className="ml-6 mt-2 mr-20 mb-1 ">
                          <NavigationMenuLink>
                            <Link href="/">FAQ</Link>
                          </NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="bg-none hover:bg-none ">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                    <div className="flex flex-col items-center">
                      <NavigationMenuContent>
                        <div className="ml-6 mt-2 mr-20 mb-1 ">
                          <NavigationMenuLink>
                            <Link href="/">Consultation</Link>
                          </NavigationMenuLink>
                        </div>
                        <div className="ml-6 mr-20 mb-1">
                          <NavigationMenuLink>Installation</NavigationMenuLink>
                        </div>
                      </NavigationMenuContent>
                    </div>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="text-sm mt-2 ml-1">
              <Link href="/">Contact Us</Link>
            </div>
            <div className="text-sm mt-2 ml-4">
              <Link href="/">Locations</Link>
            </div>
            <div className="text-sm mt-2 ml-3">
              <Link href="/">Promotions</Link>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
