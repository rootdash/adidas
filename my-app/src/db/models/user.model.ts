import { getCollection } from "@/db/config/mongo";
import { hashPassword } from "@/helpers/utils";
import bcrypt from "bcryptjs";
type TUser = {
  name: string;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}
export class User {

  static async create(name: string, username: string, email: string, password: string) {
    const userCollection = await getCollection("users");
    const userExists = await userCollection.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }
    const hashedPassword = await hashPassword(password);
    await userCollection.insertOne({
      name,
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static async findByEmail(email: string) {
    const userCollection = await getCollection<TUser>("users");
    const user = await userCollection.findOne({ email });
    return user;
  }

  static async verify(email: string, password: string) {
    const userCollection = await getCollection("users");
    const user = await userCollection.findOne({ email });
    if (!user) {
      throw new Error("User does not exist");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new Error("Invalid password");
    }
    return user;
  }

}