import Client from "../classes/Client";
import Message from "../classes/Message";
import User from "../classes/User";
import APIMessageData from "../types/APIMessageData.interface";

export default (client: Client, messageData: APIMessageData) => {
    const message = new Message({
        client: client,
        content: messageData.content,
        user: client.users.cache.get(messageData.author.id) as User,
        attachments: messageData.attachments,
        channelId: messageData.channel_id,
        guildId: messageData.guild_id || null,
        components: messageData.components,
        editedTimestamp: messageData.edited_timestamp,
        embeds: messageData.embeds,
        flags: messageData.flags,
        id: messageData.id,
        member: messageData.member,
        mentionEveryone: messageData.mention_everyone,
        mentionRoles: messageData.mention_roles,
        mentions: messageData.mentions,
        nonce: messageData.nonce,
        pinned: messageData.pinned,
        repliedMessage: messageData.referenced_message,
        timestamp: messageData.timestamp,
        tts: messageData.tts,
        type: messageData.type,
    });
    return message;

};