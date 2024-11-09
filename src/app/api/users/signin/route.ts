import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { z } from "zod";
import prisma from "@/utils/db";
import { setCookie } from "@/utils/generateToken";
import { signInSchema, SignInSchema } from "@/utils/validationSchemas";

/**
 *  @method  POST
 *  @route   ~/api/users/signin
 *  @desc    Sign In User [(Sign In) (LogIn)]
 *  @access  public
 */

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse and validate request body
    const body = await request.json();
    const parsedData: SignInSchema = signInSchema.parse(body);

    // Destructure validated data
    const { email, password } = parsedData;

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Check if the password matches
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 400 }
      );
    }

    // Generate authentication cookie
    const cookie = setCookie({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    });

    // Return response with cookie in headers
    return NextResponse.json(
      { message: "Authenticated" },
      {
        status: 200,
        headers: { "Set-Cookie": cookie },
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Handle validation errors
      return NextResponse.json(
        { message: error.errors[0].message },
        { status: 400 }
      );
    }

    // Handle other errors
    return NextResponse.json(
      {
        message: `Internal server error: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      },
      { status: 500 }
    );
  }
}
