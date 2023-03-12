let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
import fetch from 'node-fetch';

let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner, isROwner}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [md]
let gata = [imagen1, imagen4]
let dos = [md]  

let texto0 = `${ag}*La función de "bottemporal" esta restringida por el creador, intentalo mas tarde o use la función ${usedPrefix}serbot*`
let texto1 = `${mg}Use el comando como este ejemplo\n*${usedPrefix + command} enlace de Grupo y el tiempo*\n*${usedPrefix + command} ${grupos.getRandom()} 20*\n\n*20* BitCoin 🪙 = *30* minutos`
let texto2 = `${ag}¡No tienes BitCoins 🪙\n\nObten BitCoins para unir a THE VIRUZZ-BOT MD a Tu grupo con el comando:\n*${usedPrefix}minarbitcoin*`
let texto3 = `${fg}El enlace no funciona o el bot fue eliminado de el grupo, compruebe que el comando sea similar a el ejemplo\n*${usedPrefix + command} ${grupos.getRandom()} 20*`
let texto4 = `${mg}Ingrese el tiempo de estadia de el bot\n*20* BitCoin 🪙 = *30* minutos`
let texto5 = `${fg}Minimo *20* BitCoins para unir a VIRUZZ-BOT`
let texto6 = `${fg}Maximo ** BitCoin para unir a VIRUZZ-BOT`

let texto7 = `✅ Se ah unido correctamente, el bot se saldra automáticamente cuando se agote el tiempo`

let img1 = 'https://img.freepik.com/vector-premium/animacion-monedas-pixeles-imagenes-animacion-moneda-oro-ilustracion-vectorial_350225-3.jpg?w=2000'
let img2 ='https://img.freepik.com/premium-vector/set-8bit-pixel-graphics-icons-game-art-coins-gold-animation_534389-12.jpg?w=2000'

if (!global.db.data.settings[conn.user.jid].temporal) return conn.sendButton( m.chat, wm, texto0, null, [[`𝙎𝙊𝙇𝙄𝘾𝙄𝙏𝘼𝙍 𝘾𝙊𝙈𝘼𝙉𝘿𝙊`, `.reporte *Quiero unir a VIRUZZ-BOT en mí Grupo. Por favor Active la función #botemporal*`], [`MENÚ`, `.menu`]], fkontak, m) 

if (!args[0]) return conn.sendButton( m.chat, wm, texto1, null, [[`MENÚ`, `.menu`]], fkontak, m)
let [_, code] = args[0].match(linkRegex) || []

if (!linkRegex.test(args[0])) return conn.sendButton( m.chat, wm, texto3, null, [[`MENÚ`, `.menu`]], fkontak, m)
let user = db.data.users[m.sender]

if (!(isPrems || isOwner || isROwner)) { //Para Usuarios
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
//if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y Número de BitCoins*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 20*\n\n*20 BitCoin 🪙 = 30 MINUTOS*`
//if (!linkRegex.test(args[0])) throw `${fg}𝙀𝙉𝙇𝘼𝘾𝙀 𝙉𝙊 𝙑𝘼𝙇𝙄𝘿𝙊.` //Aquí 
if (user.bitcoins <= 1) return conn.sendButton( m.chat, wm, texto2, img1, [[`MINAR BITCOIN : ${rpgshopp.emoticon('bitcoins')}`, `.minarbc`]], fkontak, m)
if (isNaN(args[1])) return conn.sendButton( m.chat, wm, texto4, img1, [[`MENÚ`, `.menu`]], fkontak, m)
if (args[1] < 20) return conn.sendButton( m.chat, wm, texto5, img2, [[`MENÚ`, `.menu`]], fkontak, m)
if (args[1] > 20) return conn.sendButton( m.chat, wm, texto6, img2, [[`MENÚ`, `.menu`]], fkontak, m) //Solo ingresará si tiene 3 Token(s)
 
let res = await conn.groupAcceptInvite(code)
await conn.sendButton( m.chat, texto7, `${await conn.getName(res)} | ` + wm, null, [[`MENÚ`, `.menu`]], fkontak, m).then(async() => { 
user.bitcoins -= args[1] 
var jumlahHari = 600000 * args[1] // 10 minutos | Usuarios
var now = new Date() * 1
 
if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari
await conn.sendButton( m.chat, wm, `✅ 𝙎𝙀 𝙃𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊!!!\n${await conn.getName(res)}\n\n𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝙌𝙐𝙀 𝙀𝙎 ⏳ 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇, 𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix}menu* 𝙋𝘼𝙍𝘼 𝙑𝙀𝙍 𝙀𝙇 𝙈𝙀𝙉𝙐\n\n🚪 𝙈𝙀 𝙎𝘼𝙇𝘿𝙍𝙀 𝘼𝙐𝙏𝙊𝙈𝘼𝙏𝙄𝘾𝘼𝙈𝙀𝙉𝙏𝙀 𝙀𝙉:\n${msToDate(global.db.data.chats[res].expired - now)}\n\n*${username}* 𝙇𝙀 𝙌𝙐𝙀𝘿𝘼 *${user.bitcoins}* BitCoins🪙\n\n❕ 𝙋𝙐𝙀𝘿𝙀 𝙐𝙎𝘼𝙍 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 *${usedPrefix + command}* 𝙏𝘼𝙈𝘽𝙄𝙀𝙉 𝙀𝙉 𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙈𝙄𝙀𝙉𝙏𝙍𝘼𝙎 𝙀𝙎𝙏𝙀 𝙔𝙊\n\n❕\n*${usedPrefix + command}*\n\n❕ 𝙋𝘼𝙍𝘼 𝙐𝙉𝘼 𝙈𝙀𝙅𝙊𝙍 𝙀𝙓𝙋𝙀𝙍𝙄𝙀𝙉𝘾𝙄𝘼, 𝘿𝙀𝘽𝙊 𝘿𝙀 𝙎𝙀𝙍 𝘼𝘿𝙈𝙄𝙉\n\n❗ 𝙀𝙉 𝘾𝘼𝙎𝙊 𝙌𝙐𝙀 𝙐𝙉 𝘼𝘿𝙈𝙄𝙉 𝙈𝙀 𝙀𝙇𝙄𝙈𝙄𝙉𝙀 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝙔 𝙌𝙐𝙄𝙀𝙍𝘼 𝙌𝙐𝙀 𝙑𝙐𝙀𝙇𝙑𝘼 𝙉𝙊 𝙎𝙀 𝙑𝘼 𝙋𝙊𝘿𝙀𝙍`, null, [[`+30 𝙈𝙄𝙉𝙐𝙏𝙊𝙎 𝙀𝙉 𝙂𝙍𝙐𝙋𝙊`, `${usedPrefix + command} ${args[0]} 3`], [`MENÚ`, `.menu`]], fkontak, m)
await conn.sendButton( m.chat, botdate, `${igfg} 𝙀𝙎 𝙐𝙉 𝘽𝙊𝙏 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝙌𝙐𝙀 𝙏𝙀 𝘼𝙔𝙐𝘿𝘼𝙍𝘼 𝙍𝙀𝘼𝙇𝙄𝙕𝘼𝙍 𝘿𝙄𝙁𝙀𝙍𝙀𝙉𝙏𝙀𝙎 𝘼𝘾𝙏𝙄𝙑𝙄𝘿𝘼𝘿𝙀𝙎 🪄 𝘼𝙇 𝙋𝙍𝙄𝙑𝘼𝘿𝙊 𝙊 𝙂𝙍𝙐𝙋𝙊 𝙔 𝙏𝘼𝙈𝘽𝙄𝙀𝙉 𝙏𝙀 𝙑𝘼𝙎 𝘼 𝘿𝙄𝙑𝙀𝙍𝙏𝙄𝙍 🎈 𝘾𝙊𝙉 𝙎𝙐𝙎 𝙈𝙐𝙇𝙏𝙄𝙋𝙇𝙀𝙎 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎, 𝘿𝙄𝙎𝙁𝙍𝙐𝙏𝘼 𝘿𝙀 *VIRUZZ-BOT*!!!  👑\n\𝙣🌠 *VIRUZZ-BOT-MD* 𝙁𝙐𝙀 𝙄𝙉𝙑𝙄𝙏𝘼𝘿𝙊 𝙋𝙊𝙍:\n*${username}*`, gata.getRandom(), [[`MENÚ COMPLETO`, `.allmenu`]], fkontak, m)
//for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
//let data = (await conn.onWhatsApp(jid))[0] || {}
  //if (data.exists) 
    //conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m) 
})

       
} else if ((isOwner || !isPrems || isROwner)) { //Para Owner
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
  
if (user.bitcoins === 0 ) throw `${ag}*¡YA NO TIENES BitCoins! 🪙*\n\n*MINA BITCOIN PARA PODER INVITAR A THE VIRUZZ-BOT MD A TÚ GRUPO CON EL COMANDO *${usedPrefix}minarbitcoin*`
 if (!args[1]) throw `${mg}*USE EL COMANDO COMO ESTE EJEMPLO*\n*${usedPrefix + command} enlace y Tiempo*\n\n*EJEMPLO*\n*${usedPrefix + command} ${nn} 20*\n\n*20 BitCoins 🪙 = 30 MINUTOS*`
if (!linkRegex.test(args[0])) throw `${fg}𝙀𝙉𝙇𝘼𝘾𝙀 𝙉𝙊 𝙑𝘼𝙇𝙄𝘿𝙊.` //Aquí 

let res = await conn.groupAcceptInvite(code) 
conn.reply(m.chat, `✅ *SE HA UNIDO THE VIRUZZ-BOT MD AL GRUPO!!!*`, m).then(async() => { //Si el Owner se une al Grupo no habrá temporizador
let img = './Menu2.jpg'
 var jumlahHari = 600000 * args[1] // 10 minutos | Owner
 var now = new Date() * 1
  if (now < global.db.data.chats[res].expired) global.db.data.chats[res].expired += jumlahHari
else global.db.data.chats[res].expired = now + jumlahHari

await conn.reply(m.chat, `✅ SE HA UNIDO AL GRUPO!!!\n${await conn.getName(res)}\n\n*RECUERDE QUE ES ⏳ TEMPORAL, USE EL COMANDO ${usedPrefix}menu PARA VER EL MENÚ*\n\n🚪 *ME SALDRÉ AUTOMÁTICAMENTE EN:*\n${msToDate(global.db.data.chats[res].expired - now)}\n\n${username} *LE QUEDA ${user.bitcoins} bitcoins 🪙*\n\n❕ *PUEDE USAR EL COMANDO TAMBIÉN EN GRUPO MIENTRAS ESTE YO*\n\n❕ *SI QUIERE QUE ESTE POR MÁS TIEMPO AUMENTE EL NÚMERO DE TOKENS CUANDO USE EL COMANDO*\n*${usedPrefix + command}*\n\n❗ *EN CASO QUE UN ADMIN ME ELIMINE DEL GRUPO Y QUIERA QUE VUELVA SE JODE, NO SE VA PODER*`, m)  
await conn.reply(m.chat, `${wm} *ES UN BOT DE WHATSAPP QUE TE AYUDARÁ A REALIZAR DIFERENTES ACTIVIDADES 🪄 AL PRIVADO O GRUPO Y TAMBIÉN TE VAS A DIVERTIR 🎈 CON SUS MULTIPLES FUNCIONES, DISFRUTA DE *VIRUZZ-BOT*!!! 😎*\n\n👑 *VIRUZZ-BOT-MD FUE INVITADO POR:*\n${username}`, m)
for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != m.sender)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
  if (data.exists) 
    conn.reply(m.chat, `@${m.sender.split`@`[0]} adicional ${conn.user.name} a ${await conn.getName(res)}\njid: ${res}, el bot se apagará a tiempo: ${msToDate(global.db.data.chats[res].expired - now)}`, data.jid, m)
                
} conn.sendButton(m.chat, '', wm, null, [['OWNERS', `/owner`], ['MENÚ', '/menu']], m, res) })}
}
handler.help = ['temporal', 'tiempo']
handler.command = ['bottemporal', 'botemporal', 'addbot', 'botadd']
export default handler

function msToDate(ms) {
let temp = ms
let days = Math.floor(ms / (24 * 60 * 60 * 1000));
let daysms = ms % (24 * 60 * 60 * 1000);
let hours = Math.floor((daysms) / (60 * 60 * 1000));
let hoursms = ms % (60 * 60 * 1000);
let minutes = Math.floor((hoursms) / (60 * 1000));
let minutesms = ms % (60 * 1000);
let sec = Math.floor((minutesms) / (1000));
return days + " *Día(s)* ☀️\n" + hours + " *Hora(s)* ⏳\n" + minutes + " *Minuto(s)* ⏰\n" + sec + " *Segundo(s)* 🕐\n";
}
