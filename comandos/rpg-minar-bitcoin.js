let handler = async (m, { conn, isPrems}) => { //lastmiming
let minar = `${pickRandom(['Que pro 😎 has minado','🌟✨ Genial!! Obtienes','WOW!! eres un(a) gran Minero(a) ⛏️ Obtienes','Felicidades!! Ahora tienes','⛏️⛏️⛏️ Obtienes'])}`
let pp = 'https://cdn.discordapp.com/attachments/1084545752941998242/1084545813516132403/moneda-virtual-bitcoin_24908-9206.jpg'

let d = Math.floor(Math.random() * 5)
global.db.data.users[m.sender].bitcoins += d * 1  
//let hasil = Math.floor(Math.random() * 2000)
let time = global.db.data.users[m.sender].lastbitcoin + 6000000
if (new Date - global.db.data.users[m.sender].lastbitcoin < 6000000) throw `*💟 Vuelva en ${msToTime(time - new Date())} para continuar minando ⛏️*`  

conn.sendHydrated(m.chat, `*${minar} ${d} BitCoin*`, wm, pp, md, 'VIRUZZ-BOT', null, null, [
['Minar xp', `.minar`],
['Trabajar', `.work`],
['MENÚ', `.menu`]
], m,)
global.db.data.users[m.sender].lastbitcoin = new Date * 1  
  

//m.reply(`*${minar} *${hasil} 𝙓𝙋*`)

}
handler.help = ['minar']
handler.tags = ['diamantes']
handler.command = ['minar4', 'miming4', 'mine4', 'minarbitcoin', 'minarbc', 'minarBitCoin'] 
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}  

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
