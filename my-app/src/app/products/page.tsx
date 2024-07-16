'use client'

import ProductCard from "@/components/productCard";
import BackButton from "@/components/backButton";
import SearchBar from "@/components/searchbar";
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

async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch('/api/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return data[0].products;
  } catch (error) {
    console.error("Failed to load products:", error);
    return [];
  }
}

export default function ProductPage() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((products) => {
      setData(products);
      console.log("Products after setting state:", products);
    });
  }, []);

  useEffect(() => {
    console.log("Current state of products:", data);
  }, [data]);
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="flex px-28 flex-col w-full h-auto">
        <div className="flex-col px-1 min-h-24 w-full ">
          <div className="flex min-h-10 items-center align-middle">
            <BackButton />
          </div>
          <div className="flex min-h-12  px-1 w-full justify-between">
            <div className="flex gap-2 justify-center items-center h-auto w-auto p-1 tracking-widest text-3xl font-semibold italic ">
              PRODUCTS
            </div>
            <SearchBar />
          </div>
        </div>
        <div className="flex py-3 px-1 gap-2 flex-grow-0 w-full flex-wrap justify-center">
          {data.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
        {/* <div className="min-h-16 w-full bg-gray-900">s</div> */}
      </div>
    </div>
  );
}