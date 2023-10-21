import { PlusCircledIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

import { HomesArtwork } from "@/components/homes-artwork"
import { Menu } from "@/components/menu"
import { EmptyPlaceholder } from "@/components/empty-placeholder"
import { Sidebar } from "@/components/sidebar"


export default function MusicPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden md:block">
        <Menu />
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
            <div className="flex h-screen">
              <Sidebar className="hidden lg:block h-screen"/>
            </div>
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <Tabs defaultValue="music" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                    <TabsList>
                        <TabsTrigger value="nearby" className="relative">
                          Nearby
                        </TabsTrigger>
                        <TabsTrigger value="popular">Popular</TabsTrigger>
                        <TabsTrigger value="recommended">
                           Recommended
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
                      value="nearby"
                      className="border-none p-0 outline-none"
                    >
                     <EmptyPlaceholder />
                    </TabsContent>
                    <TabsContent
                      value="popular"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                    <EmptyPlaceholder />
                    </TabsContent>
                    <TabsContent
                      value="recommended"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <EmptyPlaceholder />
                      <Separator className="my-4" />
                      <EmptyPlaceholder />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}