"use client";

import setUpTokens from "@/src/utils/main/setUpTokens";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function GetCode() {
	const code = useSearchParams().get("code");

	useEffect(() => {
		if (code) {
			(async () => {
				const response = await fetch("/api/get-tokens", { method: "POST", body: JSON.stringify({ code }) });
				const json = await response.json();
				if (response.ok) {
					setUpTokens(json);
					setTimeout(() => {
						location.href = "/";
					}, 100);
				}
			})();
		}
	}, []);
}
