import { MongoClient, ServerApiVersion, Collection, Document } from "mongodb";

const uri = process.env.MONGO_URI as string;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const database = client.db("my-app");

export const getCollection = <T extends Document>(collection: string): Collection<T> => {
    return database.collection<T>(collection);
}