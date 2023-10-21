'use client'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaCalculator } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdCompare } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { TbRulerMeasure } from "react-icons/tb";
import { useState } from 'react';

export function Sidebar({ className }) {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <div className={cn("pb-12", className, "h-screen flex flex-col")} style={{ background: 'linear-gradient(64deg, #69B7FF -26.63%, #FFF 100%)' }}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2 flex-1">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <div className="space-y-1">
            <Button variant={activeButton === 1 ? "secondary" : "ghost"} className="w-full justify-start"
            onClick={() => handleButtonClick(1)}>
              <IoHome className="mr-2 h-4 w-4" />
              Discover Properties
            </Button>
            <Button variant={activeButton === 2 ? "secondary" : "ghost"}  className="w-full justify-start"
            onClick={() => handleButtonClick(2)}>
              <FaCalculator className="mr-2 h-4 w-4" />
              Mortgage Calculator
            </Button>
            <Button variant={activeButton === 3 ? "secondary" : "ghost"}  className="w-full justify-start"
            onClick={() => handleButtonClick(3)}>
              <MdCompare className="mr-2 h-4 w-4" />
              Compare Properties
            </Button>
            <Button variant={activeButton === 4 ? "secondary" : "ghost"}  className="w-full justify-start "
            onClick={() => handleButtonClick(4)}>
              <TbRulerMeasure className="mr-2 h-4 w-4" />
              Evaluate a Property
            </Button>
            <Button variant={activeButton === 5 ? "secondary" : "ghost"}  className="w-full justify-start "
            onClick={() => handleButtonClick(5)}>
              <AiFillHeart className="mr-2 h-4 w-4" />
              My Favourites
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
