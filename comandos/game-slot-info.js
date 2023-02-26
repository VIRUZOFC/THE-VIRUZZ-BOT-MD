let handler = async (m, { args, usedPrefix, command }) => {
let imagen = "https://telegra.ph/file/8904f74de010d9361cd61.jpg"
let slot = `GAME - SLOT`
let ejemplo = `*para jugar a las apuestas debes escribir alguno de estos comandos*

*#slotlimit ( se apuestan diamantes 5 minimo )*

*#slotxp ( se apuesta experiencia 1000 minimo )*

*#slotdolares ( se apuestan dolares 10 minimo )*

*mucha suerte a los jugadores*

${wm}`

conn.sendButton(m.chat, slot, ejemplo, imagen, [['⚡ Apostar xp ⚡', `${usedPrefix}slotxp 1000`], 
 ['💵 Apostar dolares 💵', `${usedPrefix}slotdolares 10`], 
 ['💎 Apostar diamantes 💎', `${usedPrefix}slotlimit 5`] 
 ], m)}
handler.help = ['ejemploslot']
handler.command = ['slot']
export default handler
