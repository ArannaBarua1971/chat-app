import { Account, Client, ID } from "appwrite";
import conf from "../config/conf";

export class AuthService {
  client = new Client();
  accounts;
  logs;
  constructor() {
    this.client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject("65c9947fe5eaf1a5d390");
    this.accounts = new Account(this.client);
  }

  async registration({ email, password, name }) {
    try {
      let res = await this.accounts.create(ID.unique(), email, password, name);
      if (res) {
        return this.login({ email, password });
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      let res = await this.accounts.createEmailSession(email, password);
      return res;
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.accounts.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
  }


 
}

const authservice = new AuthService();

export default authservice;
