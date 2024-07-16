import Link from "next/link";
import { Button } from "./ui/button";

export default function EccomerceBanner() {
    return (
        <div
            className="hero h-[75vh] w-full bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: "url('https://www.adidas.co.id/media/scandiweb/slider/t/r/training-fw24-dropset3-global-launch-glp-female-hero-banner-d.jpg')",
            }}>
            <div className="hero-content text-neutral-50 text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Link href="/products">
                        <Button variant="secondary">Shop Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}