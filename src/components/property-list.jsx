'use client'
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator"
import { ScrollArea,ScrollBar } from "@/components/ui/scroll-area";
import { HomesArtwork } from "./homes-artwork";
import { useRouter } from "next/navigation";



function PropertyList(){
  const [SaleListings, setSaleListings] = useState([]);
  const [RentListings, setRentListings] = useState([]);
  const [SortBy, setSortBy] = useState("");
  const navigate = useRouter();
  useEffect(() => {
    const fetchSaleListings = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/listing/get?type=sale');
        const data = await res.json();
        setSaleListings((prevListings) => {
          const uniqueListings = data.filter((newListing) => !prevListings.some((prevListing) => prevListing._id === newListing._id));
          return [...prevListings, ...uniqueListings];
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchSaleListings();
    const fetchRentListings = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/listing/get?type=rent');
        const data = await res.json();
        setRentListings((prevListings) => {
          const uniqueListings = data.filter((newListing) => !prevListings.some((prevListing) => prevListing._id === newListing._id));
          return [...prevListings, ...uniqueListings];
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchRentListings();
  }, []);
  
  const compareFunction = (a, b,sortby) => {
    if (a[sortby] > b[sortby]) {
      return -1;
    }
    if (a[sortby] < b[sortby]) {
      return 1;
    }
    return 0;
  };

  useEffect(() => {
    if (SortBy === "") {
      return;
    }
    setSaleListings((prevListings) => {
      const sortedListings = prevListings.sort((a, b) => compareFunction(a, b, SortBy));
      return [...sortedListings];
    });
    setRentListings((prevListings) => {
      const sortedListings = prevListings.sort((a, b) => compareFunction(a, b, SortBy));
      return [...sortedListings];
    });
  }, [SortBy]);


    return (
        <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
        <div className="pb-4">
        <div className="flex space-x-4">
          <div className="mr-auto ml-4">
          <select className=" flex h-10 w-full items-center justify-between 
          rounded-md border border-input bg-background px-3 py-2 text-sm 
          ring-offset-background placeholder:text-muted-foreground focus:outline-none 
          focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed 
          disabled:opacity-50 [&>span]:line-clamp-1flex h-10 w-full items-center 
          justify-between rounded-md border border-input bg-background px-3 py-2 
          text-sm ring-offset-background placeholder:text-muted-foreground 
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
          disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-[180px] border-black" 
          onChange={(e) => {setSortBy(e.target.value)}}>
              <option value="" disabled selected>Sort By</option>
              <option value="regularPrice">Price</option>
              <option value="bedrooms">Bedrooms</option>
              <option value="createdAt">Date Created</option>
          </select>
          </div>
          <div className="ml-auto mr-4">
                  <Button onClick={() => navigate.push("/dashboard/add-property")}>
                  <PlusCircledIcon className="mr-2 h-4 w-4" />
                  Add Property
                  </Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="relativen space-y-4">
                <label className="text-2xl font-bold mb-4">For Sale</label>
                        <ScrollArea>
                          <div className="flex flex-wrap gap-4 mb-4">
                            {SaleListings.map((listing) => (
                              <HomesArtwork
                                key={listing?._id}
                                listing={listing}
                                className="w-[250px]"
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
                        <label className="text-2xl font-bold mb-4">For Rent</label>
                        <ScrollArea>
                          <div className="flex flex-wrap gap-4 pb-4">
                            {RentListings.map((listing) => (
                              <HomesArtwork
                                key={listing?._id}
                                listing={listing}
                                className="w-[250px]"
                              />
                            ))}
                          </div>
                          <ScrollBar orientation="horizontal" />
                        </ScrollArea>
        </div>
        </div>
        </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(PropertyList));