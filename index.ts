import { Client, Message, MessageEmbed, CHANNEL_TYPE, Role } from "./mod.ts";
import { MessageEmbedThumbnail } from "./src/models/embed/Embed.ts";
import Collection from "./src/models/Collection.ts";

const client = new Client();

client.on('ready', () => {
    console.log(`Client logged in.`);
});

client.on('message', async (message: Message) => {
    switch (message.content) {
        case ".test":
            await message.addRole("732657697316405320");
            break;
        case ".kms":
            const embed = new MessageEmbed()
                .setTitle("bruh")
                .setColor("#add8e6")
                .setDescription("yes")
                .setImage("https://i.redd.it/a8kn1bt96ml31.jpg");
            message.send(embed);
            break;
        case ".dmtest":
            if (message.channel.type === CHANNEL_TYPE.DM) {
                message.send("dm test");
                break;
            } else if (message.channel.type === CHANNEL_TYPE.GUILD_TEXT) {
                message.send("channel test");
                break;
            }
        case ".delete":
            message.delete();
            break;
        case ".role":
            let role: Role = await message.getRole("721691563994120192");
            let roles: Collection<string, Role> = message.member.roles;

            console.log(roles)

            roles.forEach((r) => {
                console.log(r);
                if(r == role.id) {
                    message.send("yes")
                } else {
                    //message.send("no");
                }
            })
            break;
    }

    if(message.mentions.length > 0 && message.mentions[0].username == client.user.username) {
        message.send("don't ping me scrub");
    }
});

client.login('lmao no');
