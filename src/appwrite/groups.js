import { Client, Databases, ID, Query } from "appwrite";

export class GroupService {
  client = new Client();
  databases;
  constructor() {
    this.client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65c9947fe5eaf1a5d390");
    this.databases = new Databases(this.client);

   
  }

  async createGroup({ group_name, user_id, description, status = true }) {
    try {
      let res = await this.databases.createDocument(
        "65c9a1254dd59a7cc3c1",
        "65c9bdedcd8bdcf97421",
        ID.unique(),
        { group_name, user_id, description, status }
      );

      if (res) {
        return res;
      }
    } catch (error) {
      throw error;
    }
  }

  async getOwnGroup({ user_id }) {
    try {
      const response = await this.databases.listDocuments(
        "65c9a1254dd59a7cc3c1",
        "65c9bdedcd8bdcf97421",
        [Query.equal("user_id", user_id)]
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  async getPublicGroup() {
    try {
      const response = await this.databases.listDocuments(
        "65c9a1254dd59a7cc3c1",
        "65c9bdedcd8bdcf97421",
        [Query.equal("status", true)]
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  async verifyOwner({ group_name, user_id }) {
    try {
      const response = await this.databases.listDocuments(
        "65c9a1254dd59a7cc3c1",
        "65c9bdedcd8bdcf97421",
        [Query.equal("user_id", user_id), Query.equal("group_name", group_name)]
      );
      if (response) return response;
    } catch (error) {
      throw error;
    }
  }

  async createMessage({ body, group_id, user_id }) {
    try {
      let res = await this.databases.createDocument(
        "65c9a1254dd59a7cc3c1",
        "65cc21b3ccf4bf9587a2",
        ID.unique(),
        { body, group_id, user_id }
      );

      if (res) {
        return res;
      }
    } catch (error) {
      throw error;
    }
  }
  async getGroupMessage({ group_id }) {
    try {
      const response = await this.databases.listDocuments(
        "65c9a1254dd59a7cc3c1",
        "65cc21b3ccf4bf9587a2",
        [Query.equal("group_id", group_id)]
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}

const groupService = new GroupService();

export default groupService;
