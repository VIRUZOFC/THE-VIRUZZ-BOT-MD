import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*éxito, ahora tiene todo ilimitado ✅*`, m)
        global.db.data.users[m.sender].dolares = Infinity
        global.db.data.users[m.sender].limit = Infinity
        global.db.data.users[m.sender].level = 4000
        global.db.data.users[m.sender].bitcoins = Infinity
}
handler.help = ['cheat']
handler.tags = ['mod']
handler.command = /^(chetar|chetado)$/i
handler.rowner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
//handler.money = 0

export default handler
