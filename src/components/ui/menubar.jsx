import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { VscSignIn } from "react-icons/vsc";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from 'react-redux';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
} from 'src/redux/user/userSlice';

export function UserNav() {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('http://localhost:3000/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      router.push('/auth')
    } catch (error) {
      dispatch(deleteUserFailure(error));
    }
  };
  const { currentUser } = useSelector((state) => state.user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center">
        {currentUser?
        <>
          <div className="h-6 w-6 rounded-full flex items-center justify-center mr-2">
              <img
              src={currentUser.avatar} 
              alt="Profile"
              className="rounded-full"
              />
          </div>
          <span className="ml-auto text-bold">{currentUser.username}</span>
        </>:
        <span className="ml-auto">Guest</span>
        }
        </div>
      </DropdownMenuTrigger>
      {currentUser && 
      <>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem className="text-red-500" onClick={handleSignOut}>
          <VscSignIn className="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>:
        <></>
        </DropdownMenuContent>
      </>}
    </DropdownMenu>
  )
}