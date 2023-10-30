import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


function Register(){
      return (
        <div id="register" className="w-[500px] p-4">
          <h1 className="text-3xl mb-1 font-bold text-regparacolor w-[500px]">Create An Account</h1>
          <p className="text-lg mb-4 w-[193px]">Provide your details.</p>
          <Label htmlFor="name" className="mb-2 text-lg">Your name</Label>
          <Input id="name" type="text" className="mb-2 w-[397px] h-[47px] border border-regparacolor" placeholder="First Last" />
          <Label htmlFor="name" className="mb-2 text-lg">Email</Label>
          <Input type="email"  className="mb-2 w-[397px] h-[47px] border border-regparacolor" placeholder="you@gmail.com" />
          <Label htmlFor="name" className="mb-2 text-lg ">Password</Label>
          <Input type="password" className="mb-2 w-[397px] h-[47px] border border-regparacolor" placeholder="Password" />
          <Button className="bg-myblue mb-2 rounded-lg w-[397px] h-[47px]">Create an Account</Button>
          <Button className="bg-regparacolor mb-2 rounded-lg w-[397px] h-[47px] hover:bg-regparacolor text-white"> 
          <img
          src="\assests\Google.svg"
          alt="Image"/>
          &nbsp;&nbsp;or register with Google</Button>
          </div>
      )
}

function Login(){
  return (
    <div id="login" className="w-[500px] p-4">
      <h1 className="text-3xl mb-5 font-bold text-regparacolor w-[500px]">Welcome Back!</h1>
      <Label htmlFor="name" className="mb-2 text-lg">Email</Label>
      <Input type="email"  className="mb-2 w-[397px] h-[47px] border border-regparacolor" placeholder="you@gmail.com" />
      <Label htmlFor="name" className="mb-2 text-lg ">Password</Label>
      <Input type="password" className="mb-2 w-[397px] h-[47px] border border-regparacolor" placeholder="Password" />
      <Button className="bg-myblue mb-2 rounded-lg w-[397px] h-[47px]">Sign In</Button>
      <Button className="bg-regparacolor mb-2 rounded-lg w-[397px] h-[47px] hover:bg-regparacolor text-white"> 
          <img
          src="\assests\Google.svg"
          alt="Image"/>
          &nbsp;&nbsp;or continue with Google</Button>
      </div>
  )
}



export default function Home() {
    return (
      <div className="flex" style={{ background: 'linear-gradient(64deg, #69B7FF -26.63%, #FFF 100%)' }}>
      <div className="h-screen"> 
        <img
        className="w-[564px] h-[716px]"
        src="\assests\login_image.jpg"
        alt="Image"/>
      </div>
      <div className=" w-2/3 h-screen flex flex-col justify-center items-center">
        <div className="p-7">
        <Label className="text-3xl font-bold" style={{ fontFamily: 'cursive' }}>HomeQuest</Label>
        </div>
      <div className=" w-2/3 h-screen flex flex-col justify-center items-center">  
      <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-black text-white">
        <TabsTrigger value="account">Register</TabsTrigger>
        <TabsTrigger value="password">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
      <form className='flex flex-col gap-4'> 
        <Register/>
      </form>
      </TabsContent>
      <TabsContent value="password">
        <Login/>
      </TabsContent>
    </Tabs>
      </div>
      </div>
      </div>
    )
}