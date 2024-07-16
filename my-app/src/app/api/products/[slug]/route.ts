import { getProductBySlug } from "@/db/models/product.model";
import { URL } from 'url';

export const GET = async (req: Request) => {
  try {
    if (!req.url) throw new Error("Request URL is undefined");
    const host = req.headers.get('host') ?? 'localhost'; 

    const url = new URL(req.url, `http://${host}`);
    const pathSegments = url.pathname.split('/');
    const slug = pathSegments.pop() ?? ''; 

    console.log("Fetching product by slug 1:", slug);
    const product = await getProductBySlug(slug);
    console.log("Product:", product);

    if (!product) {
      return new Response(JSON.stringify({ message: "Product not found" }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify(product), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(JSON.stringify({ message: errorMessage }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}