'use client'

import AddWishListId from "@/components/addWishListId";
import BackButton from "@/components/backButton";
import React, { useEffect, useState } from "react";
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

async function fetchProduct(slug: string): Promise<Product | null> {
    try {
        const response = await fetch(`/api/products/${slug}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const product = await response.json();
        return product;
    } catch (error) {
        console.error("Failed to load product:", error);
        return null;
    }
}
export default function ProductId({ params }: { params: { id: string } }) {
    const [product, setProduct] = useState<Product | null>(null);
    useEffect(() => {
        if (params.id) {
            fetchProduct(params.id).then(setProduct);
        }
    }, [params.id]);

    if (!product) {
        return <div>Loading...</div>;
    }
    return (
        <div className="flex flex-col items-center h-auto">
            <div className="flex w-full min-h-screen ">
                <div className="flex flex-col grow h-auto bg-[#ecedef]">
                    <div className="flex pt-6 px-5 min-h-10 items-center align-middle">
                        <BackButton />
                    </div>
                    <div className="flex h-[600px] px-1 w-full justify-between">
                        <img className="w-full h-full object-contain" src="https://www.adidas.co.id/media/catalog/product/i/d/id8895_2_footwear_photography_side20lateral20view_grey.jpg" alt="Shoes" />
                    </div>
                    <div className="flex-col grow w-full flex-wrap px-16 bg-white py-10">
                        <div className="flex gap-2 items-center h-auto w-auto tracking-widest text-3xl font-black py-3">{product.name.toUpperCase()}</div>
                        <div className="flex gap-2 items-center h-auto w-auto tracking-widest text-lg font-semibold italic py-1">{product.excerpt.toUpperCase()}</div>
                        <div className="flex gap-2 items-center h-auto w-auto tracking-widest text-sm font-light text-balance py-2">{product.description}</div>
                    </div>
                </div>
                <div className="flex-col min-w-[480px] h-screen sticky top-0 p-16">
                    <AddWishListId product={product} />
                </div>
            </div>
        </div>
    )
}