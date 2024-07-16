import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
}

export const comparePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
}

export const signToken = (data:Record<string, string|number|boolean>) => {
  return jwt.sign(data,process.env.JWT_SECRET!)
}

import { z } from 'zod';
export const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string({ message: "Password is required" })
  });