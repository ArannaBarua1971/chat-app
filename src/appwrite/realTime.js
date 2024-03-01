import { Client, Databases, ID, Query } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65c9947fe5eaf1a5d390");
export const databases = new Databases(client);
export default client
