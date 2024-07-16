'use client'

import { useRouter } from 'next/navigation';
import { IoReturnUpBackSharp } from 'react-icons/io5';

export default function BackButton() {
    const router = useRouter();
    return (
        <div onClick={() => router.back()} className="group flex gap-2 justify-center items-center h-auto w-[100px] p-1 hover:bg-black cursor-pointer">
            <IoReturnUpBackSharp className="h-[25px] w-auto group-hover:text-white" />
            <div className="tracking-widest link link-hover text-xs font-bold group-hover:text-white">BACK</div>
        </div>
    )
}