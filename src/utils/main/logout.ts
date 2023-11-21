export default async function Logout(): Promise<boolean> {
	const response = await fetch("/api/auth/logout", { method: "POST" });
	const { success } = await response.json();

	if (success) {
		localStorage.removeItem("Auth");
		localStorage.removeItem("User");
		return true;
	}
	return false;
}
