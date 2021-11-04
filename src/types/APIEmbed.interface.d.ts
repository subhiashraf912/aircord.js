import APIEmbedAuthorOptions from "./APIEmbedAuthorOptions.interface";
import APIEmbedFieldOptions from "./APIEmbedFieldOptions.interface";
import APIEmbedFooterOptions from "./APIEmbedFooterOptions.interface";
import APIEmbedImageOptions from "./APIEmbedImageOptions.interface";
import APIEmbedProviderOptions from "./APIEmbedProviderOptions.interface";
import APIEmbedVideoOptions from "./APIEmbedVideoOptions.interface";

interface APIEmbed {
  title?: string;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: APIEmbedFooterOptions;
  image?: APIEmbedImageOptions;
  thumbnail?: APIEmbedImageOptions;
  video?: APIEmbedVideoOptions;
  provider?: APIEmbedProviderOptions;
  author?: APIEmbedAuthorOptions;
  fields?: APIEmbedFieldOptions[];
}

export default APIEmbed;
