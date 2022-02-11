const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("(update) security")

    console.log("Saman-BoT IS RUN TO STAFF VOICE")
    const channel = client.channels.cache.get("935614420275564574");
    if (!channel) return console.error("The channel does not exist!");
    channel.join().then(connection => {
        console.log("(Successfully) BXZ IS RUNBOT!");
    }).catch(e => {

        console.error(e);
    });

 client.user.setStatus('idle')
    function YousamPower() {
        let targetguild0 = client.guilds.cache.get("848623824298573824")
        let status = [`${targetguild0.memberCount} 👤Membrs`, 'Saman|BoT']
        let Power = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[Power], { type: "WATCHING" });
    }; setInterval(YousamPower, 2000)

    function AliveVoice() {
        const targetguild = client.guilds.cache.get("848623824298573824")
        const voiceChannels = targetguild.channels.cache.filter(c => c.type === 'voice');
        let count = 0;

        for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
        client.user.setActivity(`🔊 total mic | ${count}`, { type: "WATCHING"})
    }; setInterval(AliveVoice, 5000)

});
  client.on('message', message => {
    if(message.author.bot || message.channel.type == "dm") return;
    const cmd = message.content.toLocaleLowerCase()
    const messageArray = cmd.split("899714742619349122")
    const command = messageArray[0]
    if(command == '!salam'){
        message.reply('salam')
    }
});

client.login("OTQxNDMyMjk1NDE4NjM0MzEw.YgV3Jg.15IqTmBXiQrl5qHAtrs_0ruuf3A");