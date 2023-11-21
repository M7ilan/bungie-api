export default function setUpUser(info: GetMembershipsForCurrentUserType): boolean {
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
