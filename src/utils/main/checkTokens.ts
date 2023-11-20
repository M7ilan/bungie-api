import isTokenExpired from "./isTokenExpired";
import Logout from "./logout";
import setUpTokens from "./setUpTokens";

/**
 * Checks the validity of tokens stored in the local storage.
 * If the access token is expired, it refreshes the tokens using the refresh token.
 * @returns A promise that resolves to a boolean indicating whether the tokens are valid or not.
 */
export default async function checkTokens(): Promise<boolean> {
	// Get the tokens from local storage
	const auth = localStorage.getItem("Auth");
	if (!auth) {
		Logout();
		return false;
	}

	const newTokens: NewTokens = JSON.parse(auth);
	const generated_at = newTokens.generated_at;
	const access_token = newTokens.access_token;
	const refresh_token = newTokens.refresh_token;

	// Check if the refresh token is empty
	if (!refresh_token || Object.keys(refresh_token).length === 0) {
		console.log("Refresh token is empty");
		Logout();
		return false;
	}

	// Check if the access token is empty
	if (!access_token || Object.keys(access_token).length === 0) {
		console.log("Access token is empty");
		Logout();
		return false;
	}

	// Check if the access token is expired
	if (isTokenExpired(generated_at, access_token.expires_in)) {
		console.log("Access token expired");
		// Refresh the tokens using the refresh token
		const response = await fetch("/api/refresh-tokens", { method: "POST", body: JSON.stringify({ refresh_token: refresh_token.value }) });
		const tokens = await response.json();
		const result = setUpTokens(tokens);
		if (result) return true;
	}

	// Check if the refresh token is expired
	if (isTokenExpired(generated_at, refresh_token.expires_in)) {
		console.log("Refresh token expired");
		Logout();
		return false;
	}

	return true;
}
