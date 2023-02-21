
import axios from "axios"
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*Los comandos +18 estan desactivados en este grupo, solo un admin pude activarlos*'

if (command == 'nsfwloli') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/wallpaper/nsfwloli?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'nsfwfoot') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/foot?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'nsfwass') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/ass?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'nsfwbdsm') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/bdsm?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'nsfwcum') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/cum?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 siguiente 🔄', `/${command}`]], m)}   
  
if (command == 'nsfwero') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/ero?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'nsfwfemdom') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/femdom?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 siguiente 🔄', `/${command}`]], m)} 
  
if (command == 'nsfwglass') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/glasses?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'hentai') {
let haha = await conn.getFile(`https://server-api-rey.herokuapp.com/api/nsfw/hentai?apikey=apirey`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'nsfworgy') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/orgy?APIKEY=29d4b59a4aa687ca`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🔄 siguiente 🔄', `/${command}`]], m)}
 
if (command == 'tetas') { 
let resError = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/tetas.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), wm3, res, [['🔄 siguiente 🔄', `/${command}`]], m)}

if (command == 'booty') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/booty.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'ecchi') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/ecchi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'furro') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galería/JSON/furro.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)} 
  
if (command == 'trapito') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/trapito.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)} 
  
if (command == 'imagenlesbians') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galería/JSON/imagenlesbians.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}  
  
if (command == 'panties') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/panties.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'pene') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/pene.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'porno') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/porno.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'randomxxx') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/randomxxx.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'pechos') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/pechos.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'yaoi') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/yaoi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'yaoi2') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/yaoi2.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'yuri') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/yuri.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
if (command == 'yuri2') {
let res = (await axios.get(`https://raw.githubusercontent.com/VIRUZOFC/VIRUZZ-BOT-MD/master/galeria/JSON/yuri2.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🔄 siguiente 🔄', `/${command}`]], m)}
  
  
  
}  
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.limit = 5
handler.tags = ['nsfw']
export default  handler
