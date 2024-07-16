'use client'

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Product {
    name: string;
    price: number;
}

export default function AddWishListId({ product }: { product: Product }) {
    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price);
    return (
        <div className="flex-col">
            <div className="flex w-full h-auto text-3xl tracking-widest font-extrabold italic mb-4">{product.name.toUpperCase()}</div>
            <div className="flex w-full h-auto  tracking-widest text-xs font-light mb-4 ">MULTICOLOR/MULTICOLOR/MULTICOLOR [IE0996]</div>
            <div className="flex w-full h-auto  tracking-wide text-lg font-black mb-4">{formattedPrice}</div>
            <div className="flex w-full h-auto  tracking-widest font-black mb-8">
                <Button className="w-full">ADD TO WISHLIST</Button>
            </div>
            <Separator />
        </div>
    )
}
