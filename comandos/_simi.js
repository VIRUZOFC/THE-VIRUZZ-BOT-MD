import fetch from 'node-fetch'
let handler = m => m

handler.before = async (m) => {
let chat = global.db.data.chats[m.chat]
if (chat.simi) {
if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
let ressimi = await fetch(`https://api.simsimi.net/v2/?text=${encodeURIComponent(m.text)}&lc=` + lenguajeGB.lenguaje())
let data = await ressimi.json();
if (data.success == 'No entiendo lo que estas diciendo. Por favor ense\u00f1ame.') await m.reply("😵‍💫")                                                                                                   
await m.reply(data.success)
return !0
}
return true
}
export default handler
