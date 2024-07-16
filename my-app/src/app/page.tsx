import Link from "next/link";

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Product from "@/components/product";
import EccomerceBanner from "@/components/eccomerceBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <EccomerceBanner />
      <div className=" flex-col p-2 w-full">
        <h2 className=" flex mt-5 h-10 justify-center text-3xl font-extrabold   text-stone-950">BEST PRODUCT ADIDAS</h2>
        <div className="flex h-3 text-sm items-end justify-end">
          <Link href="/products" className="link link-hover mr-2">See All</Link>
        </div>
        <div className="flex h-[400px] items-center justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-screen-xl"
          >
            <CarouselContent>
              {Array.from({ length: 8 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-[295px]  ">
                  <div>
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center ">
                        <Product />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

    </main>
  );
}