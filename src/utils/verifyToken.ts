// src/utils/verifyToken.ts
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest } from "next/server"; // Assuming you're using Next.js; adjust if needed

// Define the return type for user payloads from JWT
export type UserPayload = JwtPayload | null;

// Verify Token For API Endpoint
export function verifyToken(request: NextRequest): UserPayload {
  try {
    const jwtToken = request.cookies.get("jwtToken");
    const token = jwtToken?.value;
    if (!token) return null;

    const privateKey = process.env.JWT_SECRET as string;
    const userPayload = jwt.verify(token, privateKey) || null;

    return userPayload as UserPayload;
  } catch (error) {
    return null;
  }
}

// Verify Token For Page
export function verifyTokenForPage(token: string): UserPayload {
  try {
    const privateKey = process.env.JWT_SECRET as string;
    const userPayload = jwt.verify(token, privateKey) || null;

    return userPayload as UserPayload;
  } catch (error) {
    return null;
  }
}
