import Link from "next/link";
import { RiGithubFill } from "react-icons/ri";

export default function Socials({ size }: { size?: number }) {
	const customSize = `${size || "32"}px`;

	return (
		<div className="flex gap-2 text-left items-center">
			<Link className="opacity-50 hover:opacity-100" target="_blank" href="https://github.com/m7ilan/bungie-api">
				<RiGithubFill style={{ height: customSize, width: customSize }} />
			</Link>
		</div>
	);
}
