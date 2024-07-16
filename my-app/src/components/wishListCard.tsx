'use client'

import RemoveWishList from "./removeWishList";
import { Separator } from "@/components/ui/separator"

export default function WishListCard() {
    return (
        <>
            <div className="flex h-56 w-full py-4 px-3">
                <div className="w-1/6 h-full flex justify-center">
                    <img src="https://www.adidas.co.id/media/catalog/product/i/d/id8895_2_footwear_photography_side20lateral20view_grey.jpg" alt="Shoes" className="w-auto h-full object-fill" />
                </div>
                <div className="flex-col text-xs grow h-full p-1">
                    <div className=" link link-hover font-bold p-1 tracking-widest">SEPATU RUNNING 4DFWD 4</div>
                    <div className="font-light p-1 tracking-wide">Color: Multicolor/Multicolor/Multicolor</div>
                    <div className="font-light p-1 tracking-wide">Tersedia</div>
                    <div className=" link link-hover font-light p-1 tracking-wide">Remove</div>
                </div>
                <div className="flex justify-center items-center w-1/6 h-full ">
                    <RemoveWishList />
                </div>
            </div>
            <Separator />
        </>
    )
}