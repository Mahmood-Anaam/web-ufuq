import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 *  @method  GET
 *  @route   ~/api/users/logout
 *  @desc    Logout User
 *  @access  public
 */
export function GET(request: NextRequest): NextResponse {
  try {
    // Delete the jwtToken cookie to log out the user
    cookies().delete("jwtToken");
    return NextResponse.json({ message: "logout" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: `internal server error: (${error.message})` },
      { status: 500 }
    );
  }
}
