import { z } from "zod";

// SignUp Schema
export const signUpSchema = z.object({
  email: z
    .string({ required_error: "email is required." })
    .email({ message: "Invalid email address." }),
  username: z
    .string({ required_error: "username is required." })
    .min(3, { message: "Username must be at least 3 characters long." }),
  password: z
    .string({ required_error: "password is required." })
    .min(6, { message: "Password must be at least 6 characters long." }),
  role: z.enum(["ADMIN", "USER", "MODERATOR", "GUEST"], {
    message: "Invalid role. Allowed values are: ADMIN, USER, MODERATOR, GUEST.",
  }),
});

// Type for SignUp Schema
export type SignUpSchema = z.infer<typeof signUpSchema>;

// SignIn Schema
export const signInSchema = z.object({
  email: z
    .string({ required_error: "email is required." })
    .email({ message: "Invalid email address." }),
  password: z
    .string({ required_error: "password is required." })
    .min(6, { message: "Password must be at least 6 characters long." }),
});

// Type for SignIn Schema
export type SignInSchema = z.infer<typeof signInSchema>;

// Forgot Schema
export const forgotSchema = z.object({
  email: z
    .string({ required_error: "email is required." })
    .email({ message: "Invalid email address." }),
});

// Type for Forgot Schema
export type ForgotSchema = z.infer<typeof forgotSchema>;

// Update User Profile Schema
export const updateUserSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }).optional(),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .optional(),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long." })
    .optional(),
  avatar: z.string().optional(),
});

// Type for Update User Profile Schema
export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
