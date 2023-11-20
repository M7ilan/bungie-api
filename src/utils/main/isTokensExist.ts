/**
 * Checks if tokens exist in the local storage.
 * @returns True if tokens exist, false otherwise.
 */
export default function isTokensExist(): boolean {
	const tokens = localStorage.getItem("Auth");

	if (tokens) {
		return true;
	}

	return false;
}
