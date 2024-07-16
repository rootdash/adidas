export default function Product() {
    return (
        <div className=" flex-col h-[367px] bg-base-100 w-96 hover:outline hover:outline-black hover:outline-1">
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
                    <p className="text-neutral-900 py-1">D.O.N. ISSUE 5 TRAINERS</p>
                    <p className="text-neutral-900">Rp 1.260.000</p>
                </div>
            </div>
        </div>
    )
}