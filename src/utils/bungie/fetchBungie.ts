import checkTokens from "../main/checkTokens";

export default async function fetchBungie(input: NodeJS.fetch.RequestInfo, init?: RequestInit): Promise<Response> {
	await checkTokens();

	const response = await fetch(input, init);

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	return response;
}
