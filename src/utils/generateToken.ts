// src/utils/generateToken.ts
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

// Define the payload type for JWT
interface JwtPayload {
  [key: string]: any; // You can replace 'any' with specific fields if known, e.g., `userId: string`
}

// Generate JWT Token
export function generateJWT(jwtPayload: JwtPayload): string {
  const privateKey = process.env.JWT_SECRET as string;

  const token = jwt.sign(jwtPayload, privateKey, {
    expiresIn: "1d", // 1 day
  });

  return token;
}

// Set Cookie with JWT
export function setCookie(jwtPayload:JwtPayload): string {
  const token = generateJWT(jwtPayload);

  const cookie = serialize("jwtToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 1, // 1 day
  });

  return cookie;
}
