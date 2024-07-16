import { User } from "@/db/models/user.model";

export const POST = async (req: Request) => {
  try {
    const reqBody = await req.json();
    const { name, username, email, password } = reqBody;
    console.log("Received:", { name, username, email, password });
    if (!name || !username || !email || !password) {
      throw new Error("Missing required fields");
    }
    await User.create(name, username, email, password);
    return new Response(JSON.stringify({ message: "User created successfully" }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error("Error in user registration:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorMessage === "Missing required fields" || errorMessage === "User already exists" ? 400 : 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}