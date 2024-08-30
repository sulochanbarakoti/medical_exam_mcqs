import { Client, Databases, ID, Query } from "appwrite";
// import physicsQuestions from "../../questions/physics";
// import chemistryQuestions from "../questions/chemistry";
// import botanyQuestions from "../questions/botany";
// import zoologyQuestions from "../questions/zoology";

// const questions = physicsQuestions;

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
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("66bb36c60038c891f881"); // Your project ID

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

// Call the function with the appropriate collection ID (for example, 'Physics')
// fetchQuestions("[COLLECTION_ID]");

// async function insertQuestion(collectionId, questions) {
//   for (const que of questions) {
//     try {
//       // Check if the question already exists in the collection
//       const existingQuestions = await databases.listDocuments(
//         config.databaseId,
//         collectionId,
//         [Query.equal("question", que.question)]
//       );

//       if (existingQuestions.total > 0) {
//         console.log("Skipping duplicate question:", que.question);
//         continue; // Skip this question if it already exists
//       }

//       const response = await databases.createDocument(
//         config.databaseId,
//         collectionId,
//         ID.unique(),
//         {
//           question: que.question,
//           options: que.options,
//           correctAnswer: que.correctAnswer,
//           solution: que.solution,
//         }
//       );
//       console.log("Question inserted:", response);
//     } catch (error) {
//       console.error("Error inserting question:", error);
//     }
//   }
// }

// export function update() {
//   insertQuestion(config.physicsCollectionId, questions);
// }
