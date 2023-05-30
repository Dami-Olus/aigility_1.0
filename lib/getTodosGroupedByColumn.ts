import { databases } from "@appwrite";

export const getTOdosGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASES_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
  );

  console.log(data)
}