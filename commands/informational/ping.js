const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    aliases: ['latency'],
    utilisation: '{prefix}ping',

    execute(client, message, args) {
        const embed = new MessageEmbed();
		embed.setTitle("Ping 🏓")
		embed.setDescription(`<:arrow:943421375501181030> Latency is **${Date.now() - message.createdTimestamp}**ms\n\n<:arrow:943421375501181030> API Latency is **${Math.round(client.ws.ping)}**ms`)
		embed.setColor("#00D166")
        embed.setTimestamp();
        embed.setFooter('Emerald Bot - by emerald#0652', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};