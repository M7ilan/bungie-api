/**
 * Sets up tokens in local storage.
 * @param tokens - The tokens to be set up.
 * @returns True if the tokens were successfully set up in local storage, false otherwise.
 */
export default async function setUpTokens(code: string): Promise<boolean> {
	const response1 = await fetch("/api/auth/get-tokens", { method: "POST", body: JSON.stringify({ code }) });
	const tokens = await response1.json();

	const newTokens = {
		access_token: {
			value: tokens.access_token,
			expires_in: tokens.expires_in,
		},
		refresh_token: {
			value: tokens.refresh_token,
			expires_in: tokens.refresh_expires_in,
		},
		generated_at: Date.now(),
		membership_id: tokens.membership_id,
		token_type: tokens.token_type,
	};

	localStorage.setItem("Auth", JSON.stringify(newTokens));
	if (localStorage.getItem("Auth")) {
		return true;
	}

	return false;
}
