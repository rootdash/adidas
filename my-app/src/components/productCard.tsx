'use client'

import Link from 'next/link';
import { useEffect, useState } from "react";
import AddWishlist from "./addWishlist";

interface Product {
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
}

export default function ProductCard({ name, slug, description, excerpt, price, tags, thumbnail, images, createdAt, updatedAt }: Product) {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    console.log("ProductCard props:", { name, slug, description, excerpt, price, tags, thumbnail, images, createdAt, updatedAt });
    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);

    return (
        <Link href={`/products/${slug}`} passHref>
            <div style={{ cursor: 'pointer' }} className="relative flex-col h-[432px] bg-base-100 w-[320px] hover:outline hover:outline-black hover:outline-1">
                <div className="absolute right-0 top-0 p-1 w-12 h-12">
                    <AddWishlist />
                </div>
                <div className="h-3/4 bg-red-400">
                    <figure className="w-full h-full">
                        <img className="w-full h-full object-cover"
                            src="https://www.adidas.co.id/media/catalog/product/cache/3bec5fdb79d91223b1a151be2b21ce8d/i/e/ie7801_2_footwear_photography_side20lateral20view_grey.jpg"
                            alt="Shoes"
                        />
                    </figure>
                </div>
                <div className="flex-col h-1/4 p-3">
                    <div className="text-xs tracking-widest">
                        <p className="py-2 font-light">Adidas</p>
                        <p className="text-neutral-900 py-1">{name.toUpperCase()}</p>
                        <p className="text-neutral-900">{formattedPrice}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}