import { cookies } from "next/headers";

export async function POST(request: Request): Promise<Response> {
  cookies().delete("Auth");
  return Response.json({ success: true }, { status: 200 });
}
