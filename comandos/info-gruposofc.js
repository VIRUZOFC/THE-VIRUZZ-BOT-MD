let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola Usuario, te invito a unirte a los grupos oficiales para  enterarte de las actualizaciones, conocer mas sobre el bot y interactuar con la comunidad*

╭━○《 ~*${wm}*~ 》○━━╮
┃ 
┃ ┃ 
┃ ┃ ¤ Respeta las reglas de los grupos ¤
┃ ┃ 
┃ 
╰━━━━━━[ *Grupos oficiales* ]━━━━━━╯

╭┈───────────────╮
│ *COMUNIDAD:* 
│ https://chat.whatsapp.com/E2IFKL834W34lr2zqB7qTF
╰┈───────────────╯

╭━━━━━━━━━━━━━━━━━━━╾•
┃ *GRUPO OFICIAL 1:*
┃ https://chat.whatsapp.com/L5oWIJp9c5BE8hMNCjJFGV 
┃ *GRUPO DE ENLACES:*
┃ https://chat.whatsapp.com/JpICImUpzdX7uO2EHJg2r2 
╰━━━━━━━━━━━━━━━━━━━━━╯
`.trim(), wm, media, [['MENÚ', '#menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
