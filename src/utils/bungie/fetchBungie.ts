import checkTokens from "@@/utils/main/checkTokens";

/**
 * Fetches data from the Bungie API.
 * @param input - The URL or Request object for the API endpoint.
 * @param init - Optional additional parameters for the fetch request.
 * @returns A Promise that resolves to the response from the API.
 */
export default async function fetchBungie(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
	await checkTokens();

	const response = await fetch(input, init);

	return response;
}
