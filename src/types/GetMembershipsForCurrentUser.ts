type GetMembershipsForCurrentUserType = {
	Response: {
		destinyMemberships: DestinyMembershipType[];
		primaryMembershipId: string;
		bungieNetUser: BungieNetUserType;
	};
	ErrorCode: number;
	ThrottleSeconds: number;
	ErrorStatus: string;
	Message: string;
	MessageData: {};
};

type DestinyMembershipType = {
	LastSeenDisplayName: string;
	LastSeenDisplayNameType: number;
	iconPath: string;
	crossSaveOverride: number;
	applicableMembershipTypes: number[];
	isPublic: boolean;
	membershipType: number;
	membershipId: string;
	displayName: string;
	bungieGlobalDisplayName: string;
	bungieGlobalDisplayNameCode: number;
};

type BungieNetUserType = {
	membershipId: string;
	uniqueName: string;
	displayName: string;
	profilePicture: number;
	profileTheme: number;
	userTitle: number;
	successMessageFlags: string;
	isDeleted: boolean;
	about: string;
	firstAccess: string;
	lastUpdate: string;
	context: ContextType;
	psnDisplayName: string;
	showActivity: boolean;
	locale: string;
	localeInheritDefault: boolean;
	showGroupMessaging: boolean;
	profilePicturePath: string;
	profileThemeName: string;
	userTitleDisplay: string;
	statusText: string;
	statusDate: string;
	steamDisplayName: string;
	twitchDisplayName: string;
	cachedBungieGlobalDisplayName: string;
	cachedBungieGlobalDisplayNameCode: number;
	egsDisplayName: string;
};

type ContextType = {
	isFollowing: boolean;
	ignoreStatus: IgnoreStatusType;
};

type IgnoreStatusType = {
	isIgnored: boolean;
	ignoreFlags: number;
};
