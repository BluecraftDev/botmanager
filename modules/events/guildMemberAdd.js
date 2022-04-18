const Discord = require("discord.js");
/**
 * STARTING THE MODULE WHILE EXPORTING THE CLIENT INTO IT
 * @param {*} client 
 */
module.exports = async (client) => {

    client.on("guildMemberAdd", member => {
        const welcomeChannel = member.guild.channels.cache.find(ch => ch.id === '936393413832634389');

        if (!member.guild || member.guild.id != "934213686468423780") return
        if (member.user.bot) {
            setTimeout(async () => {
                member.roles.set(["936378208364937236", "936378238761062460"]).catch(() => {})
            }, 5000)
            return;
        }
        if (!member.user.bot) {
            try {
                
                member.roles.set(["937049846093840465"]).catch(() => {})
                welcomeChannel.send(`${member.user} joined **KooJe Development 👋**`);
member.send({embeds: [new Discord.MessageEmbed()
    
    .setColor("#6861fe").setFooter(member.guild.name, member.guild.iconURL({dynamic:true}))

    .setDescription(`
    Welcome ${member.user} to <:koojedevelopment:937113253945933834> [Kooje Development](https://kooje.eu)<:koojedevelopment:937113253945933834>!

> We are very happy to see you here!

> You can pick up your roles in <#935653261443235890>

> If you want to order something, you can check out the features in <#936392558312058880> and place an order in <#936392309065523221>

> Please mind the RULES <#935653261443235890>

**Other than that! ENJOY!** :v:`)]}).catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
            } catch (e) {
                console.log(e)
            }
            setTimeout(async () => {
                try {
                    let mem = member;

                    //if (!mem.roles.cache.has("779028739178233886")) mem.roles.add("779028739178233886").catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
                    
                    if (!mem.roles.cache.has("935690604208353380")) mem.roles.add("935690604208353380").catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
                    
                    if (!mem.roles.cache.has("946026912780808262")) mem.roles.add("946026912780808262").catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});

                    if (!mem.roles.cache.has("939596726606651462")) mem.roles.add("939596726606651462").catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});

                    if (mem.roles.cache.has("936378208364937236")) mem.roles.remove("936378208364937236").catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
                    if (mem.roles.cache.has("936378238761062460")) mem.roles.remove("936378238761062460").catch(e => {console.warn(e.stack ? String(e.stack).grey : String(e).grey)});
                } catch (E) {
                    console.log(E)
                }
            }, 3000)
        }

    })
}