export default interface UserOptions {
  username: string;
  flags: number;
  id: string;
  discriminator: string;
  avatar: string;
  banner?: string | null = null;
  bannerColor?: string | null = null;
  accentColor?: string | null = null;
}
