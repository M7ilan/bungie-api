"use client";

import { useEffect } from "react";
import checkTokens from "../utils/main/checkTokens";
import { useRouter } from "next/navigation";
import Socials from "../components/Socials";

export default function HomePage() {
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const response = await checkTokens();
			if (!response) {
				console.log("Redirecting to login page");
				setTimeout(() => {
					router.push("/login");
				}, 100);
			}
		})();
	}, []);

	return (
		<div className="flex flex-col gap-8 center">
			<div className="header">You&apos;re in the App Page</div>
			<div>Think about participating in the creation of the optimal Bungie API template.</div>
			<Socials size={64} />
		</div>
	);
}
