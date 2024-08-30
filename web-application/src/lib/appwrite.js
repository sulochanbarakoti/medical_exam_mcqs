import { Client, Databases } from "appwrite";

export const config = {
  databaseId: "66bb3704002e68cbd0ca",
  physicsCollectionId: "66bb371a0038f2aedb69",
  chemistryCollectionId: "66bb37250030f527efd5",
  zoologyCollectionId: "66bb373a001ff487fbad",
  botanyCollectionId: "66bb3732002f663be0f5",
};

// Initialize Appwrite Client
const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66bb36c60038c891f881");

// Initialize Database SDK
const databases = new Databases(client);

// Fetch questions from a specific collection (e.g., Physics)
export async function fetchQuestions(collectionId) {
  try {
    const response = await databases.listDocuments(
      config.databaseId,
      collectionId
    );
    // console.log(response.documents);
    return response.documents;
    // Now you can render these questions in your app's UI
  } catch (error) {
    console.error("Error fetching questions:", error);
  }
}
