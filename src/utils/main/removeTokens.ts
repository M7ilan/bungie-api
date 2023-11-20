/**
 * Removes the "Auth" localstorage.
 */
export default function removeTokens() {
	localStorage.removeItem("Auth");
}
