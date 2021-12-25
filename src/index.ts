import Client from "./classes/Client";
import MessageEmbed from "./classes/MessageEmbed";
import User from "./classes/User";
const client = new Client({
  token: "Bot ODY0NTU4ODcyMjE0ODk2NjYw.YO3NMQ.9KcZxT3OFgBLbRx_29pwsz4rTTI",
});

client.on("messageCreate",async (message) => {
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
    })
  if (message.content === "test-embed") {
    const msg = await message.reply({ embeds: [embed] });
    console.log(msg);
  }
  

  if (message.content?.toLocaleLowerCase().startsWith("eval")) {
    const args = message.content.split(' ');
    args.shift();
    const content = args.join(" ");
    const result = new Promise((resolve) => resolve(eval(content)));
    result
      .then(async (output: any) => {
        if (typeof output !== "string")
          output = require("util").inspect(output, {
            depth: 0,
            maxArrayLength: Infinity,
          });
        output = output.toString();
        if (output.includes(client.token))
          output = output.replaceAll(client.token, "DISCORD_TOKEN");
        const length = output.length;
        const texts = [];
        const parts = length / 2000;
        for (let i = 0; i < parts; i++) {
          texts.push(output.substring(i * 2000, (i + 1) * 2000));
        }

        const embeds = generateFilesEmbed(texts, message.user);
        for (const embed of embeds) {
         await message.reply({ embeds: [embed] });
        }
        
      })
      .catch((err) => {
        err = err.toString();
        if (err.includes(client.token)) {
          err = err.replaceAll(client.token, "DISCORD_TOKEN");
        }
        message.reply({ content: err.message });
      });
  }




});

client.on("ready", () => {
  console.log(`${client.user?.username} is ready bishes`);
});

client.on('guildCreate', guild => {
  console.log(guild.name)
})


function generateFilesEmbed(texts: string[], author: User): MessageEmbed[] {
  const embeds = [];
  let k = 1;
  for (let i = 0; i < texts.length; i += 1) {
    const r = texts.slice(i, k);
    let j = i;
    k += 1;
    let info = "";
    r.forEach((text) => {
      info = `${info}\n${text}`;
    });

    const embed = new MessageEmbed()
      .setDescription(
        `\`\`\`ts\n
        ${info}
        \`\`\``
      )
      .setFooter(
        {text:`Requested by: ${author.tag}`,
        iconUrl:author.getAvatarURL({
          format:'gif',
          size: 4096,
        })}
      );
    embeds.push(embed);
  }
  return embeds;
}
