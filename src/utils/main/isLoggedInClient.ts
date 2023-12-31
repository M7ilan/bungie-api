/**
 * Checks if the user is logged in.
 * @returns `true` if the user is logged in, `false` otherwise.
 */
export default function isLoggedInClient(): boolean {
	return localStorage.getItem("Auth") !== null;
}
