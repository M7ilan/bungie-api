export async function GET(request: Request): Promise<Response> {
	const access_token = request.headers.get("access_token");

	if (!access_token) {
		return Response.json({ error: "No access_token provided" }, { status: 400 });
	}

	const options = {
		method: "GET",
		headers: {
			"X-API-Key": process.env.BUNGIE_API_KEY as string,
			Authorization: `Bearer ${access_token}`,
		},
	};

	const response = await fetch("https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/", options);
	const data = await response.json();

	return Response.json(data, { status: response.status });
}
