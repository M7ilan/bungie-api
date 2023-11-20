import removeTokens from "./removeTokens";

export default async function Logout(): Promise<boolean> {
	const response = await fetch("/api/logout", { method: "POST" });
	const { success } = await response.json();

	if (success) {
		removeTokens();
		return true;
	}
	return false;
}
