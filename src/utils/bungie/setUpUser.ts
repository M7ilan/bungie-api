import fetchBungie from "./fetchBungie";

export default async function setUpUser(): Promise<boolean> {
	const auth = localStorage.getItem("Auth");
	if (!auth) return false;
	const newAuth: NewTokensType = JSON.parse(auth);
	const access_token = newAuth.access_token.value;
	const response2 = await fetchBungie("/api/bungie/User/GetMembershipsForCurrentUser", { headers: { access_token } });
	const info: GetMembershipsForCurrentUserType = await response2.json();

	const newInfo: UserType = {
		uniqueName: info.Response.bungieNetUser.uniqueName,
		primaryMembershipId: info.Response.primaryMembershipId,
		primaryMembershipType: info.Response.destinyMemberships[0].crossSaveOverride,
	};

	localStorage.setItem("User", JSON.stringify(newInfo));
	if (localStorage.getItem("User")) {
		return true;
	}

	return false;
}
