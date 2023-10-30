import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { VscSignIn } from "react-icons/vsc"

export function UserNav() {
  const currentUser = null
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center">
             <div className="h-6 w-6 rounded-full flex items-center justify-center text-white">
        </div>
        {currentUser?
        <span className="ml-auto">{currentUser.username}</span>:
        <span className="ml-auto">Guest</span>
        }
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuItem className="text-red-500" onClick={() => window.location.href = "./auth"}>
        <VscSignIn className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}