"use client";

import LoadingIcon from "@/src/components/LoadingIcon";
import setUpUser from "@/src/utils/bungie/setUpUser";
import setUpTokens from "@/src/utils/main/setUpTokens";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GetCode() {
	const code = useSearchParams().get("code");
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (code) {
			(async () => {
				const response1 = await setUpTokens(code);
				if (response1) {
					console.log("Successfully set up tokens");
				}

				const response2 = await setUpUser();
				if (response2) {
					console.log("Successfully set up user");
				}

				setIsLoading(false);
				location.href = "/";
			})();
		}
	}, []);

	if (isLoading)
		return (
			<div className="header center gap-4">
				Logging in... <LoadingIcon />
			</div>
		);
}
