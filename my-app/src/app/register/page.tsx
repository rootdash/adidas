'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useState } from "react";


export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok && response.headers.get("Content-Length") !== "0") {
      const data = await response.json();
      console.log('Registration successful', data);
      router.push('/login');
    } else {
      console.error('Registration failed');
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="flex px-28 w-full h-screen">
        <div className="w-1/2 px-20 py-5 h-full">
          <div className="flex-col h-full items-center justify-center">
            <div className="flex w-full h-1/6 items-center font-extrabold tracking-tight text-[40px] text-black">REGISTER</div>
            <div className="flex-col grow w-full h-5/6 ">
              <form onSubmit={handleSubmit}>
                <div className="flex gap-1">
                  <Input name="name" onChange={handleChange} value={formData.name} className="w-1/2 h-12 text-sm" type="text" placeholder="Name" />
                  <Input name="username" onChange={handleChange} value={formData.username} className="w-1/2 h-12 text-sm" type="text" placeholder="Username" />
                </div>
                <Input name="email" onChange={handleChange} value={formData.email} className="w-full h-12 text-sm mt-8" type="email" placeholder="Email" />
                <Input name="password" onChange={handleChange} value={formData.password} className="w-full h-12 text-sm mt-8" type="password" placeholder="Password" />
                <Button type="submit" className="mt-8 text-xs tracking-widest">SUBMIT</Button>
                <Link href="/login" className="flex mt-8 pl-2 text-xs tracking-widest link link-hover">
                  Have account? Sign In
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="w-1/2 px-20 py-5 h-full bg-black text-white">
          <div className="flex flex-col h-full  justify-center font-black text-7xl text-balance ">
            Throug sport, we have the power to change lives.
            <div className="flex mt-8 text-xs tracking-widest font-semibold text-left"> #ImpossibleIsNothing</div>
          </div>
        </div>
      </div>
    </div>
  );
}  