
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let taguser = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
//let _uptime = process.uptime() * 1000
//let _muptime
//if (process.send) {
//process.send('uptime')
//let uptime = clockString(_uptime)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
wm = global.wm
vs = global.vs

let pareja = global.db.data.users[m.sender].pasangan
let { exp, limit, dolares, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
//let name = await conn.getName(m.sender)

const sections = [{
title: comienzo + ' ' + lenguajeGB['smsLista1']() + ' ' + fin,
rows: [
//{title: "│🌐│MINECRAFT-SERVER", rowId:`${usedPrefix}mc-server`},  
{title: lenguajeGB['smsLista2'](), rowId:`${usedPrefix}creator`},  
{title: lenguajeGB['smsLista3'](), rowId:`${usedPrefix}infobot`},
{title: lenguajeGB['smsDonar'](), rowId:`${usedPrefix}donar`},
{title: lenguajeGB['smsLista4'](), rowId:`${usedPrefix}allmenu`},
{title: lenguajeGB['smsLista5'](), rowId:`${usedPrefix}grupos`},
{title: lenguajeGB['smsLista6'](), rowId:`${usedPrefix}jadibot`},
{title: lenguajeGB['smsLista7'](), rowId:`${usedPrefix}instalarbot`}

]},{
title: comienzo + ' ' + lenguajeGB['smsLista8']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista9'](),  rowId: `${usedPrefix}lb`},
{title: lenguajeGB['smsLista10'](), rowId: `${usedPrefix}minar`},
{title: lenguajeGB['smsLista11'](), rowId: `${usedPrefix}work`},
{title: lenguajeGB['smsLista12'](), rowId: `${usedPrefix}inventory`},
{title: lenguajeGB['smsLista13'](), rowId: `${usedPrefix}rpgmenu`},
{title: lenguajeGB['smsLista14'](), rowId:  `${usedPrefix}buy limit 1`}
]},{	
title: comienzo + ' ' + lenguajeGB['smsLista15']() + ' ' + fin,
rows: [
{title: lenguajeGB['smsLista16'](), rowId: `${usedPrefix}descargasmenu`},
{title: lenguajeGB['smsLista17'](), rowId:`${usedPrefix}audios`},  
{title: lenguajeGB['smsLista18'](), rowId: `${usedPrefix}juegosdelgrupo`},
{title: lenguajeGB['smsLista19'](), rowId: `${usedPrefix}stickermenu`},
{title: lenguajeGB['smsLista20'](), rowId:`${usedPrefix}animemenu`},
{title: lenguajeGB['smsLista21'](), rowId:`${usedPrefix}soloparaelpropietario`},  
{title: lenguajeGB['smsLista22'](), rowId: `${usedPrefix}hornymenu`}
]},{	
title: comienzo + 'ACTIVAR | DESACTIVAR' + fin,
rows: [
{title: "│✅│ACTIVAR MENÚ COMPLETO", rowId: `${usedPrefix}enable`},  
{title: "│✅│ACTIVAR WELCOME", rowId: `${usedPrefix}enable welcome`},
{title: "│❌│DESACTIVAR WELCOME", rowId: `${usedPrefix}disable welcome`},
{title: "│✅│ACTIVAR ANTILINK", rowId: `${usedPrefix}enable antilink`},  
{title: "│❌│DESACTIVAR ANTILINK", rowId: `${usedPrefix}disable antilink`},
{title: "│✅│ACTIVAR ANTIARABES", rowId: `${usedPrefix}enable antiarabes`},    
{title: "│❌│DESACTIVAR ANTIARABES", rowId: `${usedPrefix}disable antiarabes`},
{title: "│✅│ACTIVAR MODOHORNY", rowId: `${usedPrefix}enable modohorny`},
{title: "│❌│DESACTIVAR MODOHORNY", rowId: `${usedPrefix}disable modohorny`},
{title: "│✅│ACTIVAR RESTRICT", rowId: `${usedPrefix}enable restrict`},
{title: "│❌│DESACTIVAR RESTRICT", rowId: `${usedPrefix}disable restrict`},
{title: "│✅│ACTIVAR ANTILLAMADA", rowId: `${usedPrefix}enable anticall`},
{title: "│❌│DESACTIVAR ANTILLAMADA", rowId: `${usedPrefix}disable anticall`},   
{title: "│✅│ACTIVAR AUDIOS", rowId: `${usedPrefix}enable audios`},
{title: "│❌│DESACTIVAR AUDIOS", rowId: `${usedPrefix}disable audios`}
]}]





let name = await conn.getName(m.sender)

//let name = conn.getName(m.sender)

const listMessage = {
      
text: `
|----------${wm}----------|
| ▢ ${ucapan()} *${taguser}*
|----------------------------------------------------------------|
| ▢ *DOLARES:*
| ▢ ${dolares}
|----------------------------------------------------------------|
| ▢ *DIAMANTES:*
| ▢ ${limit}
|----------------------------------------------------------------|
| ▢ *Hora:*
| ▢ ${time}
|----------------------------------------------------------------|
| ▢ *Tiempo activo:*
| ▢ ${uptime}
|----------------------------------------------------------------|
| ▢ *Versión del bot:*
| ▢ ${vs}
| ▢ *Librería:*
| ▢ ${library}*
|----------------------------------------------------------------|
| ▢ *Usuario(s):*
| ▢ ${Object.keys(global.db.data.users).length}
|----------------------------------------------------------------|`, //footer: `*${lenguajeGB['smsPareja']()} ➢ ${pareja ? `${name} 😍 ${conn.getName(pareja)}` : `🙂 ${lenguajeGB['smsResultPareja']()}`}*`, 
//${name} ${ucapan()}

title: null,

buttonText: "Selecciona aqui", 

sections }

await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})	

}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')

handler.tags = ['group', 'owner']

handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|menulista|\?)$/i

handler.exp = 20


export default handler

function clockString(ms) {

  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)

  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60

  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60

  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')

}

function ucapan() {

  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto

  let res = "Buenas madrugadas"

  if (time >= 4) {

    res = "Buenos Días"

  }

  if (time >= 11) {

    res = "Buenas Tardes"

  }

  if (time >= 15) {

    res = "Buenas tardes"

  }

  if (time >= 17) {

    res = "Buenas noches"

  }

  return res

}

