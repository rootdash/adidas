import { User } from "@/db/models/user.model";
import { comparePassword, loginSchema, signToken } from "@/helpers/utils";

export const POST = async (req: Request) => {
  try {
    const reqBody = await req.json();
    const data = await loginSchema.parseAsync(reqBody);
    const user = await User.findByEmail(data.email);
    if (!user) {
        return Response.json({message: 'Invalid email or password'}, {status: 401})
    }
    const isPasswordValid = comparePassword(data.password, user.password);
    if (!isPasswordValid) {
        return Response.json({message: 'Invalid email or password'}, {status: 401})
    }
    const access_token = signToken({_id: user._id.toString()});
    return Response.json({access_token});
  } catch (error) {
    console.error("Error in user login:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorMessage === "User does not exist" || errorMessage === "Invalid password" ? 400 : 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}