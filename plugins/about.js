/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/Lightmker/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/



const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["ntando"],
    react: "🧠",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `━━━━━━━━━━━━━━━━━━━━━━━━

*👋 HELLO ${pushname}*\n\n *I AM SUBZERO MD*\n\n
I am  WhatsApp Based Multi Device Bot Created By Ntandoyenkosi Chisaya from Zimbabwe.\nMy sole purpose is to remove the burden or cost of purchusing data bundle to download Songs, Apps, Videos & Movies by  using whatsapp  bundles.
\n\n *For More Visit*: https://msha.ke/jesussalvation

━━━━━━━━━━━━━━━━━━━━━━━━

> *SOURCE CODE* 
⛓️ https://github.com/Lightmker/SUBZERO-MD

> *FOLLOW OWNER* 
🛠️ https://github.com/Lightmker/

> *OWNER'S WHATSAPP*
🪪 https://wa.me/263714138336/?text=SubZero+Fan+Here

> * 2ND DEVELOPER * 
🪪 https://wa.me/263714138336/?text=SubZero+Fan+Here

> *SUPPORT CHANNEL* 
🔌 https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D

> *FOLLOW INSTAGRAM* 
🎀https://instagram.com/Lightmker/

> *FOLLOW OWNER* 
🎊 https://youtube.com/mrntando/

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *RELEASE DATE* - *15 December 2024*
 
> *Mr Ntando ofc*

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
