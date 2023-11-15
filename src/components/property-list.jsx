'use client'
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MdSearch } from "react-icons/md"
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator"
import { ScrollArea,ScrollBar } from "@/components/ui/scroll-area";
import { HomesArtwork } from "./homes-artwork";
import { useRouter } from "next/navigation";



function PropertyList(){
  const [SaleListings, setSaleListings] = useState([]);
  const [RentListings, setRentListings] = useState([]);
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
    return (
        <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
        <div className="pb-4">
        <div className="flex space-x-4">
          <Input
            type="text"
            placeholder="Search Properties"
            className="w-[300px] border border-regparacolor"
          />
          <Button
            type="submit"
          >
            <MdSearch className="text-xl"/>
          </Button>
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