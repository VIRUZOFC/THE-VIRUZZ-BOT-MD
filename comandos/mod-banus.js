import PhoneNumber from 'awesome-phonenumber'

let handler = async (m, { conn, text, command, usedPrefix }) => {//prems 

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  

let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
let user = global.db.data.users[who]
let name = conn.getName(who)
let txt = text.replace(name).trim()
if (!txt) return conn.reply(m.chat, `${mg}*ESCRIBA EL MOTIVO DEL BANEO*\n` + `*${usedPrefix + command} @${who.split`@`[0]} *Motivo*`, fkontak, m)  
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/9b1353deceded7f387713.jpg')
let banu = `No deviste hacer eso papu`
if (!who) throw `*[❕] ETIQUETA A LA PERSONA QUE SERA BANEADA*`
let chatstext = text.replace(who.split("@")[0], '').replace("@", '')
let users = global.db.data.users
users[who].banned = true
await conn.sendButton(m.chat, `*✅ USUARIO BANEADO*\n*NOMBRE:* ${name}\n*NUMERO:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}\n*Razon: ${chatstext}*\n*Baneado por MOD:* wa.me/${m.sender.split("@")[0]`,  banu,  pp,[
['Menú', `#menusimple`]], m)}
handler.help = ['ban']
handler.tags = ['mods']
handler.command = /^ban$/i
handler.mods = true
export default handler
