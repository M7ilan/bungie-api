"use client";

import { useEffect, useState } from "react";
import checkTokens from "@@/utils/main/checkTokens";
import { useRouter } from "next/navigation";
import Socials from "@@/components/Socials";
import LoadingIcon from "../components/LoadingIcon";
import clsx from "clsx";

export default function HomePage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [uniqueName, setUniqueName] = useState("");

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

		const User = localStorage.getItem("User");
		if (User) {
			const { uniqueName } = JSON.parse(User);
			setUniqueName(uniqueName);
		}

		setIsLoading(false);
	}, []);
	return (
		<>
			<LoadingIcon classname={`${!isLoading && "opacity-0 pointer-events-none"}`} />
			<div className={clsx("flex flex-col gap-12 center", { "opacity-0 pointer-events-none": isLoading })}>
				<div className="flex flex-col gap-2">
					<div className="header">Welcome {uniqueName}</div>
					<div className="header">You&apos;re in the App Page</div>
				</div>
				<div>Think about participating in the creation of the optimal Bungie API template.</div>
				<Socials size={64} />
			</div>
		</>
	);
}
