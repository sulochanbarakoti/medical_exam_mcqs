import { Client, Databases, Account, ID, Avatars, Query } from "appwrite";

export const config = {
  databaseId: "66bb3704002e68cbd0ca",
  userCollectionId: "66d31e9e002fc2fc7fce",
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
const account = new Account(client);
const avatars = new Avatars(client);

// Create user for authentication
export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );
    return newUser;
  } catch (error) {
    throw new Error(error);
  }
};

// Sign in function to sign in
export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
    throw new Error(error);
  }
};

// Function to get the current session

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();

    if (!currentAccount) throw Error;
    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal("email", currentAccount.email)]
    );
    if (!currentUser) throw Error;
    return currentUser.documents[0];
  } catch (error) {
    throw new Error(error);
  }
};

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
