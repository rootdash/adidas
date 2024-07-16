'use client'
import { Input } from "@/components/ui/input"
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
    return (
        <div className="flex gap-2 justify-center items-center h-auto w-auto p-1 tracking-widest text-xs font-semibold italic ">
            <Input className="w-72 text-xs" type="text" placeholder="Search..." />
            <FiSearch className="w-6 h-auto" />
        </div>
    )
}
