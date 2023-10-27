import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { VscSignIn } from "react-icons/vsc"
  
  export function Menu() {
    return (
      <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
  <MenubarMenu>
    <MenubarTrigger className="font-bold">HomeQuest</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>About HomeQuest</MenubarItem>
      <MenubarSeparator />
      <MenubarShortcut />
      <MenubarItem>Go To HomePage</MenubarItem>
    </MenubarContent>
  </MenubarMenu>  
  <MenubarMenu>
  <MenubarTrigger className="hidden md:flex items-center justify-between ms-auto">
    <div className="flex items-center">
      <div className="h-6 w-6 rounded-full flex items-center justify-center text-white">
      </div>
      <span className="ml-auto">B C Samrudh</span>
    </div>
  </MenubarTrigger>
  <MenubarContent forceMount>
    <MenubarItem inset className="text-red-500" onClick={() => window.location.href = "./auth"}>
      <VscSignIn className="mr-2 h-4 w-4" />
      Log Out
    </MenubarItem>
  </MenubarContent>
</MenubarMenu>
</Menubar>
    )
  }