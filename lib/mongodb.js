import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const dbName = "HealthAPI";
const client = new MongoClient(process.env.MONGODB_URI, {});

async function getFirstNDocumentsInCollection(collectionName, limit = 10) {
  await client.connect();

  const collection = client.db(dbName).collection(collectionName);

  return await collection.find({}).limit(limit).toArray();
}

export { getFirstNDocumentsInCollection };
