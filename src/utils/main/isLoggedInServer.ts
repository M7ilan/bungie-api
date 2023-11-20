import { cookies } from "next/headers";

export default function isLoggedInServer(): boolean {
	return cookies().has("Auth");
}
