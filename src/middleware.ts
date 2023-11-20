import { NextRequest, NextResponse } from "next/server";
import isLoggedInServer from "./utils/main/isLoggedInServer";

// Define an array of paths that should be blocked for authenticated users
const isLoggedInBlockedPaths = ["/login", "/get-code"];
const isNotLoggedInBlockedPaths = ["/"];

export async function middleware(request: NextRequest) {
	// Get the path from the request URL
	const path = request.nextUrl.pathname;

	// Check if the "Auth" cookie is present
	if (isLoggedInServer()) {
		// If the path is in the blocked paths array, redirect the user to the home page
		if (isLoggedInBlockedPaths.includes(path)) {
			return NextResponse.redirect(new URL("/", request.url));
		}
	} else {
		// If the path is not in the blocked paths array, redirect the user to the login page
		if (isNotLoggedInBlockedPaths.includes(path)) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}
}
