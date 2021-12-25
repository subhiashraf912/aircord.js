import APIEmbed from "../types/APIEmbed.interface";
import EmbedAuthorOptions from "../types/EmbedAuthorOptions.interface";
import EmbedFieldOptions from "../types/EmbedFieldOptions.interface";
import EmbedFooterOptions from "../types/EmbedFooterOptions.interface";
import EmbedImageOptions from "../types/EmbedImageOptions.interface";
import EmbedProviderOptions from "../types/EmbedProviderOptions.interface";
import EmbedVideoOptions from "../types/EmbedVideoOptions.interface";
import MessageEmbedOptions from "../types/MessageEmbed.interface";

export default class MessageEmbed {
  public title;
  public description;
  public url;
  public timestamp;
  public color;
  public footer;
  public image;
  public thumbnail;
  // public video;
  public provider;
  public author;
  public fields;

  constructor(options?: MessageEmbedOptions) {
    this.title = options?.title;
    this.description = options?.description;
    this.url = options?.url;
    this.timestamp = options?.timestamp;
    this.color = options?.color;
    this.footer = options?.footer;
    this.image = options?.image;
    this.thumbnail = options?.thumbnail;
    // this.video = options?.video;
    this.provider = options?.provider;
    this.author = options?.author;
    this.fields = options?.fields;
  }
  setTitle(title: string) {
    this.title = title;
    return this;
  }
  setDescription(description: string) {
    this.description = description;
    return this;
  }
  setUrl(url: string) {
    this.url = url;
    return this;
  }
  setTimestamp(timestamp: string) {
    this.timestamp = timestamp;
    return this;
  }
  setColor(color: number) {
    this.color = color;
    return this;
  }
  setFooter(options: EmbedFooterOptions) {
    this.footer = options;
    return this;
  }
  setImage(options: EmbedImageOptions) {
    this.image = options;
    return this;
  }
  setThumbnail(options: EmbedImageOptions) {
    this.thumbnail = options;
    return this;
  }
  // setVideo(options: EmbedVideoOptions) {
  //   this.video = options;
  //   return this;
  // }
  setProvider(options: EmbedProviderOptions) {
    this.provider = options;
    return this;
  }
  setAuthor(options: EmbedAuthorOptions) {
    this.author = options;
    return this;
  }
  addField(field: EmbedFieldOptions) {
    if (!this.fields) this.fields = [];
    this.fields.push(field);
    return this;
  }
  setFields(fields: EmbedFieldOptions[]) {
    this.fields = fields;
    return this;
  }
  toAPIEmbed(): APIEmbed {
    const footer = this.footer
      ? {
          text: this.footer.text,
          icon_url: this.footer.iconUrl,
          proxy_icon_url: this.footer.proxyIconUrl,
        }
      : undefined;
    const image = this.image
      ? {
          url: this.image.url,
          proxy_url: this.image.proxyUrl,
          height: this.image.height,
          width: this.image.width,
        }
      : undefined;

    const thumbnail = this.thumbnail
      ? {
          url: this.thumbnail.url,
          proxy_url: this.thumbnail.proxyUrl,
          height: this.thumbnail.height,
          width: this.thumbnail.width,
        }
      : undefined;

    // const video = this.video
    //   ? {
    //       url: this.video.url,
    //       proxy_url: this.video.proxyUrl,
    //       height: this.video.height,
    //       width: this.video.width,
    //     }
    //   : undefined;

    const provider = this.provider
      ? {
          name: this.provider.name,
          url: this.provider.url,
        }
      : undefined;

    const author = this.author
      ? {
          name: this.author.name,
          url: this.author.url,
          icon_url: this.author.iconUrl,
          proxy_icon_url: this.author.proxyIconUrl,
        }
      : undefined;

    const fields = this.fields
      ? this.fields.map((field) => {
          return { name: field.name, value: field.value, inline: field.inline };
        })
      : undefined;

    const apiEmbed = {
      title: this.title,
      description: this.description,
      url: this.url,
      timestamp: this.timestamp,
      color: this.color,
      footer,
      image,
      thumbnail,
      // video,
      provider,
      author,
      fields,
    };
    return apiEmbed;
  }
}
