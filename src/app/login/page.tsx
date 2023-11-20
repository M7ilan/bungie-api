import Link from "next/link";

export default function LoginPage() {
	return (
		<div className="flex flex-col gap-2 center">
			<Link href={`https://www.bungie.net/en/OAuth/Authorize?client_id=${process.env.BUNGIE_CLIENT_ID}&response_type=code`} className="header btn-0">
				LOGIN
			</Link>
		</div>
	);
}
