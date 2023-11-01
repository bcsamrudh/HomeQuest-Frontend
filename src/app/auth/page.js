'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from 'src/redux/user/userSlice';


function Register(){
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useRouter();
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        const res = await fetch('http://localhost:3000/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        console.log(data);
        if (data.success === false) {
          setLoading(false);
          setError(data.message);
          return;
        }
        setLoading(false);
        setError(null);
        navigate.push('/');
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(error.message);
      }
    };
      return (
        <div id="register" className="w-[500px] p-4">
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl mb-1 font-bold text-regparacolor w-[500px]">Create An Account</h1>
            <p className="text-lg mb-4 w-[193px]">Provide your details.</p>
            <Label htmlFor="name" className="mb-2 text-lg">Your username</Label>
            <Input id="username"
            type="text"
            className="mb-2 w-[397px] h-[47px] border border-regparacolor"
            placeholder="First Last"
            onChange={handleChange}/>
            <Label htmlFor="name" className="mb-2 text-lg">Email</Label>
            <Input type="email"
            id="email"
            className="mb-2 w-[397px] h-[47px] border border-regparacolor"
            placeholder="you@gmail.com"
            onChange={handleChange}/>
            <Label htmlFor="name" className="mb-2 text-lg ">Password</Label>
            <Input type="password"
            id="password"
            className="mb-2 w-[397px] h-[47px] border border-regparacolor"
            placeholder="Password"
            onChange={handleChange}/>
            <Button disabled={loading}
            className="bg-myblue mb-2 rounded-lg w-[397px] h-[47px]">
            {loading ? 'Loading...' : 'Create an Account'}
            </Button>
          </form>
          </div>
      )
}

function Login(){
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useRouter();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:3000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate.push('/dashboard');
    } catch (error) {
      dispatch(signInFailure(error.message));
  }
};
  return (
    <div id="login" className="w-[500px] p-4">
      <form onSubmit={handleSubmit}>
        <h1 className="text-3xl mb-5 font-bold text-regparacolor w-[500px]">Welcome Back!</h1>
        <Label htmlFor="name" className="mb-2 text-lg">Email</Label>
        <Input type="email"
        id="email"  
        className="mb-2 w-[397px] h-[47px] border border-regparacolor" 
        placeholder="you@gmail.com" 
        onChange={handleChange}/>
        <Label htmlFor="name" className="mb-2 text-lg ">Password</Label>
        <Input type="password"
        id="password"
        className="mb-2 w-[397px] h-[47px] border border-regparacolor"
        placeholder="Password"
        onChange={handleChange}/>
        <Button disabled={loading} 
        className="bg-myblue mb-2 rounded-lg w-[397px] h-[47px]">
        {loading ? 'Loading...' : 'Sign In'}
        </Button>
      </form>
      {error && <p>{error}</p>}
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
        <Register/>
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