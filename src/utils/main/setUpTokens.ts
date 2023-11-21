/**
 * Sets up tokens in local storage.
 * @param tokens - The tokens to be set up.
 * @returns True if the tokens were successfully set up in local storage, false otherwise.
 */
export default function setUpTokens(tokens: Tokens): boolean {
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
