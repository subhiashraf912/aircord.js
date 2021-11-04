import GetAvatarOptions from "../types/GetAvatarOptions.interface";
import UserOptions from "../types/User.interface";

export default class User {
  public readonly username: string;
  public readonly flags: number;
  public readonly tag: `${string}#${string}`;
  public readonly discriminator: string;
  public readonly avatar: string;
  public readonly id: string;
  public readonly banner: string | null = null;
  public readonly bannerColor: string | null = null;
  public readonly accentColor: string | null = null;
  constructor(options: UserOptions) {
    this.username = options.username;
    this.flags = options.flags;
    this.tag = `${options.username}#${options.discriminator}`;
    this.avatar = options.avatar;
    this.discriminator = options.discriminator;
    this.id = options.id;
  }
  getAvatarURL(options: GetAvatarOptions) {
    return `https://cdn.discordapp.com/avatars/${this.id}/${this.avatar}.${options.format}?size=${options.size}`;
  }
}
