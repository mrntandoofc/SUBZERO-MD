/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/ZwSyntax/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/






const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*⟣━━━━━━━━━━━━━━━━━━━⟢*
 *BOT OWNER:*
 
> *Ntandoyenkosi Chisaya(Mr Ntando Ofc )*

 *SUBZERO REPO:*
 
> *https://github.com/Lightmker/SUBZERO-MD*

 *SUPPORT GROUP:*
 
> *https://whatsapp.com/channel/0029VagQEmB002T7MWo3Sj1D*

 *DEVELOPER NUMBER:*
 
> *wa.me/+263714138336/*

*⟣━━━━━━━━━━━━━━━━━━━⟢*
> *CREATED BY Mr Ntando*
*⟣━━━━━━━━━━━━━━━━━━━⟢*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "SUBZERO MD",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SUBZERO MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Lightmker/SUBZERO-MD" ,
thumbnailUrl: "https://i.postimg.cc/m2jtqrBC/Screenshot-20241216-090753-Video-Maker.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
