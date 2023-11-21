"use client";

import LoadingIcon from "@/src/components/LoadingIcon";
import fetchBungie from "@/src/utils/bungie/fetchBungie";
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
				const response1 = await fetch("/api/auth/get-tokens", { method: "POST", body: JSON.stringify({ code }) });
				const json = await response1.json();
				if (response1.ok) {
					setUpTokens(json);
				}

				const auth = localStorage.getItem("Auth");
				if (!auth) return;
				const newAuth: NewTokensType = JSON.parse(auth);
				const access_token = newAuth.access_token.value;
				const response2 = await fetchBungie("/api/bungie/User/GetMembershipsForCurrentUser", { headers: { access_token } });
				const json2: GetMembershipsForCurrentUserType = await response2.json();
				if (response2.ok) {
					setUpUser(json2);
				}

				setIsLoading(false);
				location.href = "/";
			})();
		}
	}, []);

	if (isLoading) return <div className="header center gap-4">Logging in... <LoadingIcon /></div>;
}
