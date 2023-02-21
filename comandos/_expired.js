export async function all(m, conn) {
   
if (!m.isGroup)
return
let chats = global.db.data.chats[m.chat]
if (!chats.expired)
return !0
if (+new Date() > chats.expired) {
let caption = `*Se acabo el tiempo asignado para la permanencia de el bot en este grupo, para hacer que vuelva use el comando #bottemporal*`
let pp = './Menu2.jpg'
    
await this.sendButton(m.chat, caption, wm, pp, [['Adiós', '.hastapronto']], null)
await this.groupLeave(m.chat)
chats.expired = null
}}
