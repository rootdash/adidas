import { cookies } from "next/headers";
import Link from "next/link";
import { CgHeart } from "react-icons/cg";
import ButtonSignout from "./buttonSignout";


export default function Navbar() {
    const cookieStore = cookies();
    const authorization = cookieStore.get("Authorization");
    return (
        <div className="bg-base-100 flex-col h-20 p-2">
            <div className="flex h-1/4 justify-end items-center pr-5">
                {authorization ? (
                    <ButtonSignout />
                ) : (
                    <Link href="/login" className="link link-hover text-sm">Sign in</Link>
                )}

            </div>
            <div className="flex h-3/4 items-end justify-between px-10 relative">
                <div className="flex h-20 w-28 absolute top-[-50%]">
                    <img className="h-full w-full object-contain" src="https://www.adidas.co.id/media/logo/adidas-logo.png" />
                </div>
                <div className="flex grow items-center justify-center h-full gap-4">
                    <Link href="/" className="link link-hover font-bold tracking-widest text-sm">HOME</Link>
                    <Link href="/products" className="link link-hover font-light tracking-widest text-sm">PRODUCTS</Link>
                </div>
                <div className="flex h-full w-28 justify-start items-center">
                    <Link href="/wishlist">
                        <CgHeart className="size-7" />
                    </Link>
                </div>
            </div>
        </div>
    )
}