type NewTokensType = {
	access_token: {
		value: string;
		expires_in: number;
	};
	refresh_token: {
		value: string;
		expires_in: number;
	};
	generated_at: number;
	membership_id: string;
	token_type: string;
};
