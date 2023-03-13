import axios from 'axios' 
 import fs from 'fs' 
 import cheerio from 'cheerio' 
 import fetch from 'node-fetch' 
 let handler = async (m, { text, conn, args, command, usedPrefix }) => { 
 if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*' 
 if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 ${usedPrefix + command} Con mi prima*` 
 try { 
 let res = await xnxxsearch(text) 
 let json = res.result 
 let listSerch = [] 
 let teskd = `𝗩𝗶𝗱𝗲𝗼𝘀 𝗿𝗲𝗹𝗮𝗰𝗶𝗼𝗻𝗮𝗱𝗼𝘀 𝐜𝐨𝐧: ${args.join(" ")}` 
 const sections = [{ 
 title: `ⓡⓔⓢⓤⓛⓣⓐⓓⓞⓢ`, 
 rows: listSerch }] 
 const listMessage = { 
 text: teskd, 
 footer: '𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐲 𝐩𝐫𝐞𝐜𝐢𝐨𝐧𝐞 𝐄𝐧𝐯𝐢𝐚𝐫', 
 title: " 『 𝗩𝗜𝗗𝗘𝗢𝗦 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡𝗔𝗗𝗢𝗦 』", 
 buttonText: "[♦ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 ♦]", 
 sections} 
 for (let i of json) { 
 listSerch.push({title: i.title, description: '⇧ sᴇʟᴇᴄᴄɪᴏɴᴀ ᴇsᴛᴀ ᴏᴘᴄɪᴏɴ ᴘᴀʀᴀ ᴅᴇsᴄᴀʀɢᴀʀ ᴇsᴛᴇ ᴠɪᴅᴇᴏ ⇧', rowId: `${usedPrefix}xnxxdl ${i.link}`})}  
 await conn.sendMessage(m.chat, listMessage, { quoted: m }) 
 } catch (e) { 
 m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*') 
 }} 
 handler.command = /^porhubsearch|xvideossearch|xnxxsearch$/i 
 handler.dolares = 10
 export default handler 
  
 async function xnxxsearch(query) { 
 return new Promise((resolve, reject) => { 
 const baseurl = 'https://www.xnxx.com' 
 fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then(res => res.text()).then(res => { 
 let $ = cheerio.load(res, { xmlMode: false }); 
 let title = []; 
 let url = []; 
 let desc = []; 
 let results = []; 
 $('div.mozaique').each(function(a, b) { 
 $(b).find('div.thumb').each(function(c, d) { 
 url.push(baseurl+$(d).find('a').attr('href').replace("/THUMBNUM/", "/")) 
 })}) 
 $('div.mozaique').each(function(a, b) { 
 $(b).find('div.thumb-under').each(function(c, d) { 
 desc.push($(d).find('p.metadata').text()) 
 $(d).find('a').each(function(e,f) { 
 title.push($(f).attr('title')) 
 })})}) 
 for (let i = 0; i < title.length; i++) { 
 results.push({ title: title[i], info: desc[i], link: url[i] })} 
 resolve({ code: 200, status: true, result: results 
 })}).catch(err => reject({code: 503, status: false, result: err }))})} 
 
