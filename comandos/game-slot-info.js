let handler = async (m, { args, usedPrefix, command }) => {
let imagen = 'https://telegra.ph/file/8904f74de010d9361cd61.jpg'
let ejemplo = `*para jugar ablas apuestas debes escribir alguno de estos comandos

slotlimit (se apuestan diamantes 5 minimo )

slotxp (se apuesta experiencia 1000 minimo)

slotdolares (se apuestan dolares 10 minimo)

mucha suerte a los jugadores*`

conn.sendButton(m.chat, ejemplo, imagen, wm, [['slot', `#slot`]], m)}
handler.help = ['ejemploslot']
handler.command = ['slot']
export default handler
