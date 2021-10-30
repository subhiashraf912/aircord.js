interface UserAPIData {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	public_flags: number;
	banner?: string | null;
	banner_color?: string | null;
	accent_color?: string | null;
}
export default UserAPIData;
