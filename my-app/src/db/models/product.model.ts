import { ObjectId } from "mongodb";
import { getCollection } from "../config/mongo";

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

export async function getProducts() {
    const collection = getCollection<Product>('products');
    const products = await collection.find({}).toArray();
    return products;
}


export async function getProductBySlug(slug: string) {
  console.log("Fetching product by slug:", slug);
  const collection = getCollection<Product>('products');

  const pipeline = [
    { $match: { _id: new ObjectId("668a6bc0cbc867092473c20f") } },
    { $unwind: "$products" },
    { $match: { "products.slug": slug } },
    { $replaceRoot: { newRoot: "$products" } }
  ];

  const result = await collection.aggregate(pipeline).toArray();
  const product = result[0] || null;
  console.log("Product found:", product != null);

  return product;
}