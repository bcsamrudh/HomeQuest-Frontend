'use client'
import { Menu } from "@/components/menu"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaCalculator } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdCompare } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { TbRulerMeasure } from "react-icons/tb";
import { useState } from 'react';
import PropertyList from "@/components/property-list"
import { EmptyPlaceholder } from "@/components/empty-placeholder";
import MortgageCalculator from "@/components/mortgage-calc";
import Compare from "@/components/compare";
import {UserNav} from "@/components/ui/menubar";
import AreaCalculator from "@/components/area-calculator";


export default function HomePage() {
  const [activeButton, setActiveButton] = useState(1);
  const [activeComponent, setActiveComponent] = useState(<PropertyList/>);

  const handleButtonClick = (buttonId,component) => {
    setActiveButton(buttonId);
    setActiveComponent(component);
  };

  return (
    <>
      <div className="md:hidden">
      </div>
      <div className="hidden md:block">
        <div className="flex h-16 items-center px-4">
          <Menu />
          <div className="ml-auto flex items-center space-x-4">
              <UserNav />
          </div>
        </div>
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
            <div className="flex h-screen">
              <div className={cn("pb-12", "hidden lg:block h-screen", "h-screen flex flex-col")}>
                <div className="space-y-4 py-4">
                  <div className="px-3 py-2 flex-1">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                      Dashboard
                    </h2>
                    <div className="space-y-1">
                      <Button variant={activeButton === 1 ? "secondary" : "ghost"} className="w-full justify-start"
                      onClick={() => handleButtonClick(1,<PropertyList/>)}>
                        <IoHome className="mr-2 h-4 w-4" />
                        Discover Properties
                      </Button>
                      <Button variant={activeButton === 2 ? "secondary" : "ghost"}  className="w-full justify-start"
                      onClick={() => handleButtonClick(2,<MortgageCalculator/>)}>
                        <FaCalculator className="mr-2 h-4 w-4" />
                        Mortgage Calculator
                      </Button>
                      <Button variant={activeButton === 3 ? "secondary" : "ghost"}  className="w-full justify-start"
                      onClick={() => handleButtonClick(3,<Compare/>)}>
                        <MdCompare className="mr-2 h-4 w-4" />
                        Compare Properties
                      </Button>
                      <Button variant={activeButton === 4 ? "secondary" : "ghost"}  className="w-full justify-start "
                      onClick={() => handleButtonClick(4,<AreaCalculator/>)}>
                        <TbRulerMeasure className="mr-2 h-4 w-4" />
                        Property Area Calculator
                      </Button>
                      <Button variant={activeButton === 5 ? "secondary" : "ghost"}  className="w-full justify-start "
                      onClick={() => handleButtonClick(5,<EmptyPlaceholder/>)}>
                        <AiFillHeart className="mr-2 h-4 w-4" />
                        My Favourites
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {activeComponent}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}