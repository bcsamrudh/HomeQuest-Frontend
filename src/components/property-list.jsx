'use client'
import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import SearchBar from '@/components/searchbar'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import { EmptyPlaceholder } from "@/components/empty-placeholder"

export default function PropertyList(){
    return (
        <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
        <div className="pb-4">
        <div className="flex space-x-4">
          <SearchBar />
          {/* <Filter propertyTypes={options}/> */}
        </div>
        </div>
          <Tabs defaultValue="music" className="h-full space-y-6">
            <div className="space-between flex items-center">
            <TabsList>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="newly-added">
                   Newly Added
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto mr-4">
                <Button>
                  <PlusCircledIcon className="mr-2 h-4 w-4" />
                  Add Property
                </Button>
              </div>
            </div>
            <TabsContent
              value="popular"
              className="h-full flex-col border-none p-0 data-[state=active]:flex"
            >
            <EmptyPlaceholder />
            </TabsContent>
            <TabsContent
              value="newly-added"
              className="h-full flex-col border-none p-0 data-[state=active]:flex"
            >
              <EmptyPlaceholder />
              <Separator className="my-4" />
              <EmptyPlaceholder />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    )
}