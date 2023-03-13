import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
try {
if (!text) throw `*[❕] INGRESE UN TEXTO/ORDEN PARA EJECUTAR LA FUNCIÓN CHATGPT*\n\n*❍ EJEMPLO DE PETICIONES Y ORDENES*\n*❍ ${usedPrefix + command} Reflexion sobre la serie Merlina 2022 de netflix*\n*❍ ${usedPrefix + command} Codigo en JS para un juego de cartas*`
await await m.reply(`*[ Cargando... ]*`)
let tiores = await await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${zds}&text=${text}&user=user-unique-id`)
let hasil = await await tiores.json()
let openAi = `${hasil.result}`
await await conn.sendMessage(m.chat, {
     image: {
         url: "https://cdn.discordapp.com/attachments/1084545752941998242/1084645752803958814/openai-chatgpt.jpg"
     },
     caption: openAi,
     contextInfo: {
         mentionedJid: [m.sender],
         externalAdReply: {
             title: `VIRUZZBOT - CHATGPT`,
             sourceUrl: 'https://chat.whatsapp.com/L5oWIJp9c5BE8hMNCjJFGV',
             mediaType: 1,
             showAdAttribution: true,
             thumbnailUrl: "https://cdn.discordapp.com/attachments/1084545752941998242/1084645752803958814/openai-chatgpt.jpg",
             
         }
     }
 }, {
     quoted: m
 })
} catch {
conn.reply(m.chat,`*[❕] ERROR, INTENTA DE NUEVO*`)
}}
handler.command = ['openai', 'ia', 'robot']
handler.dolares = 4
export default handler
