/**
 * Checks if a token has expired based on the `generated_at` timestamp and the `expires_in` duration.
 * @param generated_at The timestamp when the token was generated.
 * @param expires_in The duration in seconds for which the token is valid.
 * @returns `true` if the token has expired, `false` otherwise.
 */
export default function isTokenExpired(generated_at: number, expires_in: number): boolean {
	const now = Date.now();
	const expiresAt = generated_at + expires_in * 1000;

	return now > expiresAt;
}
