import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

// Verify Token For API Endpoint
export function verifyToken(request: NextRequest): any {
  try {
    const jwtToken = request.cookies.get("jwtToken");
    const token = jwtToken?.value;
    if (!token) return null;

    const privateKey = process.env.JWT_SECRET as string;
    const userPayload = jwt.verify(token, privateKey) || null;

    return userPayload;
  } catch (error) {
    return null;
  }
}

// Verify Token For Page
export function verifyTokenForPage(token: string): any {
  try {
    const privateKey = process.env.JWT_SECRET as string;
    const userPayload = jwt.verify(token, privateKey) || null;

    return userPayload;
  } catch (error) {
    return null;
  }
}
