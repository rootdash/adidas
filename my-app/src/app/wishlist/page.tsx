'use client'

import WishListCard from "@/components/wishListCard";

export default function WishlistPage() {
  return (
    <>
      <div className="flex px-28 h-auto flex-col items-center ">
        <div className="flex flex-col w-full h-auto border-b-4 border-gray-300">
          <div className="flex min-h-20 w-full mb-4">
            <div className="flex w-full justify-between items-end">
              <div className="flex gap-2 justify-center items-center h-auto w-auto tracking-tight text-2xl font-extrabold text-black">
                MY WISHLIST
              </div>
              <button className="flex gap-2 justify-center items-center h-auto w-auto underline p-1 tracking-widest text-xs font-semibold ">
                REMOVE WISHLIST
              </button>
            </div>
          </div>
        </div>
        <div className="flex py-3 px-1 gap-2 flex-grow-0 min-h-[430px] w-full flex-wrap justify-center">
          <WishListCard />
          <WishListCard />
          <WishListCard />
        </div>
      </div>
      <div className="flex py-3 px-28 gap-2 flex-grow-0 min-h-40 w-full flex-wrap justify-center bg-black">
        <div className="flex flex-col gap-2 justify-center items-center text-center w-full p-1 text-white">
          <div className="tracking-[0.5em] text-4xl font-black ">
            IMPOSIBLE IS NOTHING
          </div>
          <div className="tracking-widest text-xs font-semibold italic ">
            - adidas -
          </div>
        </div>
      </div>
    </>
  );
}  