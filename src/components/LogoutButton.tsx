import { useState, useEffect } from "react";
import Logout from "@/src/utils/main/logout";
import { useRouter } from "next/navigation";
import isLoggedInClient from "@@/utils/main/isLoggedInClient";

export default function LogoutButton() {
	const router = useRouter();
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

	useEffect(() => {
		setIsLoggedIn(isLoggedInClient());
	}, []);

	async function logout() {
		const success = await Logout();
		if (success) {
			setIsLoggedIn(false);
			router.push("/login");
		}
	}

	return isLoggedIn ? <button onClick={logout}>Logout</button> : null;
}
