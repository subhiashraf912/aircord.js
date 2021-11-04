import Client from "./classes/Client";
import MessageEmbed from "./classes/MessageEmbed";

const client = new Client({
  token: "Bot ODY0NTU4ODcyMjE0ODk2NjYw.YO3NMQ.9KcZxT3OFgBLbRx_29pwsz4rTTI",
});

client.on("messageCreate", (message) => {
  client.users.cache.get(message.user.id);
  if (message.content === "test") message.channel.send({ content: "testing" });
  if (message.content === "test-reply") message.reply({ content: "Testing" });
  const embed = new MessageEmbed()
    .setTitle("Title Here nig")
    .setDescription("Description here ma boy")
    .setThumbnail({
      url: message.user.getAvatarURL({ format: "gif", size: 4096 }),
    })
    .setImage({ url: message.user.getAvatarURL({ format: "gif", size: 4096 }) })
    .setAuthor({
      name: message.user.username,
      iconUrl: message.user.getAvatarURL({ format: "gif", size: 4096 }),
    });
  if (message.content === "test-embed") message.reply({ embeds: [embed] });
});

client.on("ready", () => {
  console.log(`${client.user?.username} is ready bishes`);
});
