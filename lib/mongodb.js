import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const dbName = "HealthAPI";
const client = new MongoClient(process.env.MONGODB_URI, {});

async function getCollection(collectionName) {
  await client.connect();

  return client.db(dbName).collection(collectionName);
}

async function getDocumentById(collectionName, id) {
  const collection = await getCollection(collectionName);
  const result = await collection
    .find({
      "id": { $eq: id },
    })
    .toArray();

  return result.length ? result[0] : null;
}

async function getDocumentByResourceId(collectionName, id) {
  const collection = await getCollection(collectionName);
  const result = await collection
    .find({
      "resource.id": { $eq: id },
    })
    .toArray();

  return result.length ? result[0] : null;
}

async function getDocuments(collectionName, limit = 10) {
  const collection = await getCollection(collectionName);

  return await collection.find({}).limit(limit).toArray();
}

async function getDocumentsRelatedToPatient(collectionName, id, limit = 10) {
  const collection = await getCollection(collectionName);

  return await collection
    .find({
      "resource.patient.reference": { $regex: id },
    })
    .limit(limit)
    .toArray();
}

async function getDocumentsRelatedToSubject(collectionName, id, limit = 10) {
  const collection = await getCollection(collectionName);

  return await collection
    .find({
      "resource.subject.reference": { $regex: id },
    })
    .limit(limit)
    .toArray();
}

async function addDocumentToCollection(document, collectionName) {
  const collection = await getCollection(collectionName);

  return await collection.insertOne(document);
}

async function deleteDocument(collectionName, id) {
  const collection = await getCollection(collectionName);

  return await collection.deleteOne({
    "resource.id": { $eq: id },
  });
}

async function updateDocument(collectionName, id, document) {
  const collection = await getCollection(collectionName);

  return await collection.replaceOne({ "resource.id": { $eq: id } }, document);
}

export {
  getDocumentById,
  getDocumentByResourceId,
  getDocuments,
  getDocumentsRelatedToPatient,
  getDocumentsRelatedToSubject,
  addDocumentToCollection,
  deleteDocument,
  updateDocument,
};
