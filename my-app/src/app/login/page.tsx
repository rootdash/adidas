import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { redirect } from 'next/navigation';
import { z } from "zod";
import { cookies } from "next/headers";
import { loginSchema } from "@/helpers/utils";

export default function LoginPage() {
  const loginAction = async (formData: FormData) => {
    "use server";
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    }
    console.log(data)
    try {
      const sanitizedData = await loginSchema.parseAsync(data);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
        method: "POST",
        body: JSON.stringify(sanitizedData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData: { access_token: string } = await response.json();
      console.log(responseData);
      cookies().set("Authorization", `Bearer ${responseData.access_token}`)
      throw redirect("/products")
    } catch (error) {
      console.log(error, "errorhere");
      if (error instanceof z.ZodError) {
        throw redirect("/login/ok=false&message=" + error.errors[0].message);
      }
      throw error;
    }
  }
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="flex px-28 w-full h-screen">
        <div className="w-1/2 px-20 py-5 h-full">
          <div className="flex-col h-full items-center justify-center">
            <div className="flex w-full h-1/6 items-center font-extrabold tracking-tight text-[40px] text-black">SIGN IN</div>
            <div className="flex-col grow w-full h-5/6 ">
              <form action={loginAction}>
                <Input name="email" className="w-full h-12 text-sm" type="email" placeholder="Email" />
                <Input name="password" className="w-full h-12 text-sm mt-8" type="password" placeholder="Password" />
                <Button type="submit" className="mt-8 text-xs tracking-widest">SIGN IN</Button>
              </form>
              <Link href="/register" className="flex mt-8 pl-2 text-xs tracking-widest link link-hover">
                Doesn&apos;t have account? Register Here
              </Link>
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
