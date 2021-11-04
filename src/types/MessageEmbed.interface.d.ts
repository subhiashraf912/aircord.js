import Message from "../classes/Message";
import EmbedAuthorOptions from "./EmbedAuthorOptions.interface";
import EmbedFieldOptions from "./EmbedFieldOptions.interface";
import EmbedFooterOptions from "./EmbedFooterOptions.interface";
import EmbedImageOptions from "./EmbedImageOptions.interface";
import EmbedProviderOptions from "./EmbedProviderOptions.interface";
import EmbedVideoOptions from "./EmbedVideoOptions.interface";

interface MessageEmbedOptions {
  title?: string;
  description?: string;
  url?: string;
  timestamp?: string;
  color?: number;
  footer?: EmbedFooterOptions;
  image?: EmbedImageOptions;
  thumbnail?: EmbedImageOptions;
  video?: EmbedVideoOptions;
  provider?: EmbedProviderOptions;
  author?: EmbedAuthorOptions;
  fields?: EmbedFieldOptions[];
}
export default MessageEmbedOptions;
