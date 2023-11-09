'use client'
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import SearchBar from '@/components/searchbar'
import { EmptyPlaceholder } from "@/components/empty-placeholder"

export default function PropertyList(){
    return (
        <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
        <div className="pb-4">
        <div className="flex space-x-4">
          <SearchBar />
          <div className="ml-auto mr-4">
                <Button>
                  <PlusCircledIcon className="mr-2 h-4 w-4" />
                  Add Property
                </Button>
          </div>
        </div>
        </div>
          <EmptyPlaceholder/>
        </div>
        </div>
    )
}