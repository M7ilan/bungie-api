import { cookies } from "next/headers";

// This function handles the POST request to retrieve tokens from the Bungie API
export async function POST(request: Request): Promise<Response> {
	// Get the refresh_token from the request body
	const { refresh_token } = await request.json();

	// Check if the refresh_token is not null
	if (!refresh_token) {
		// If no refresh_token is provided, return an error response with status code 400
		return Response.json({ error: "No refresh_token provided" }, { status: 400 });
	}

	// Prepare the options for the fetch request to the Bungie API
	const options = {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token,
			client_id: process.env.BUNGIE_CLIENT_ID as string,
			client_secret: process.env.BUNGIE_CLIENT_SECRET as string,
		}),
	};

	// Send the fetch request to the Bungie API to get the tokens
	const response = await fetch("https://www.bungie.net/Platform/App/OAuth/token/", options);
	const tokens = await response.json();

	// Return the tokens as a JSON response
	cookies().set("Auth", "", {
		httpOnly: true,
		secure: true,
		path: "/",
	});

	// Return the tokens as a JSON response
	return Response.json(tokens);
}
