let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let db = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/9b1353deceded7f387713.jpg')
let bank = `╭━━━━━━ 𝐁𝐀𝐍𝐂𝐎 🏦 ━━━╾•
❍ *Nombre:* ${name}
❍ *Diamantes:* ${global.db.data.users[who].limit} 💎
❍ *Tokens:* ${global.db.data.users[who].joincount} ☯️
❍ *Dólares:* ${global.db.data.users[who].dolares} 💸
○ *BitCoin:* ${global.db.data.users[who].bitcoin} 🪙
╰━━━━━━━━━━━━━━━━╾•`.trim()
let bank2 = `
*𝙽𝙾𝚃𝙰:* 
*PUEDES COMPRAR USANDO LOS COMANDOS:*
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`.trim()
conn.sendButton(m.chat, bank, bank2, db,
[
['𝙼𝙴𝙽𝚄', `#menusimple`]], m)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'diamantes', 'diamond', 'balance', 'banco'] 
export default handler
