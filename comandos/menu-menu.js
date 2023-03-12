import moment from 'moment-timezone'
import fs, { promises } from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
let vn = './media/menu.mp3'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let {money} = global.db.data.users[m.sender]
let { exp, limit, dolares, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let imagenMEnu = ['https://i.imgur.com/1qOn8Vw.jpg', 'https://i.imgur.com/vExxeYz.jpg']
let db = './Menu2.jpg'
let pp = './galeria/VIRUZZ-menu.mp4'
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: yt, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(imagenMEnu.getRandom())).buffer(), sourceUrl: menulinks.getRandom() }}}
m.reply(`[ Enviando el menú... ]`)
//no me roben la decoracion, no tengo creatividad

let menuA = `
*╭━━《 ○ ${wm} ○ 》━━╮*
*┃┃ ⋄ ${ucapan()}, ${username}*
*┃┃ ⋄ CREADOR DEL BOT:  ${creatorname}*
*┃┃ ⋄ NUMERO DEL CREADOR:* wa.me/595986674310 *(No bot)*
*┃┃ ⋄ VERSION » ${vs}*
*┃┃ ⋄ FECHA » ${week}, ${date}*
*┃┃ ⋄ TIEMPO ACTIVO » ${uptime}*
*┃┃ ⋄ LIBRERIA » ${library}*
*┃┃ ⋄ LENGUAJE » ESPAÑOL LATINO*
*┃┃ ⋄ USUARIOS » ${Object.keys(global.db.data.users).length}*
*┃╰━━━━━━━━━━━━━━━━╾•*
*╰━━━╼○ ~VIRUZZ-BOT-MD~ ○╾━━━╯*`.trim()

let menuB = `
*═〔 INFO DEL USUARIO 〕⬣═*
*║👤 NOMBRE: ${username}*
*║🧰 EXPERIENCIA ➟ ${exp}*
*║⚓ RANGO ➟* ${role}*
*║💎 DIAMANTES ➟ ${limit}*
*║💸 DOLARES ➟ ${dolares}*
*╰══*═════════════ *✧*

╔═════ INFO-BOT ═════╗ 
║ ❒  ︎_${usedPrefix}grupos_
║ ❒ _${usedPrefix}estado_
║ ❒ ︎ _${usedPrefix}terminos_
║ ❒︎ _${usedPrefix}instalarbot_
║ ❒ _${usedPrefix}infobot_
║ ❒ _${usedPrefix}grouplist_
║ ❒ _${usedPrefix}owner_
║ ❒ _${usedPrefix}script_
║ ❒︎ _Bot_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
╚════ ≪ •❈• ≫ ════╝

╔═════ REPORTAR ═════╗ 
║ ❒ _*Reporta con este comando de haber*_
║ ❒ _*Fallas para poder Solucionar!!*_
║════════════════════════
║︎ ❒ _${usedPrefix}reporte *texto*_
║ ❒ _${usedPrefix}report *texto*_
╚════ ≪ •❈• ≫ ════╝

╔═══ PAGINA DE AYUDA ═══╗ 
║══════════════
║ ❒ *PRÓXIMAMENTE*
╚════ ≪ •❈• ≫ ════╝

╔═════════════╗ 
║ *<UNE UN BOT A TU GRUPO/>*
║══════════════════
║ ➱_${usedPrefix}bottemporal *link del grupo*
╚════ ≪ •❈• ≫ ════╝

╔═════ JADIBOT 🤖 ═════╗ 
║ ❒ ︎_${usedPrefix}serbot
║ ❒ ︎_${usedPrefix}stop
║ ❒ ︎_${usedPrefix}bots
╚════ ≪ •❈• ≫ ════╝

╔═════ RPG ═════╗ 
║ ❒ ${usedPrefix}cazar
║ ❒ ${usedPrefix}aventura
║ ❒ ${usedPrefix}balance
║ ❒︎ ${usedPrefix}claim
║ ❒︎ ${usedPrefix}top
║ ❒︎ ${usedPrefix}heal
║ ❒ ${usedPrefix}cartera
║ ❒ ${usedPrefix}inventory 
║ ❒︎ ${usedPrefix}levelup
║ ❒︎ ${usedPrefix}myns
║ ❒ ${usedPrefix}perfil
║ ❒︎ ${usedPrefix}work
║ ❒ ${usedPrefix}rob <@tag
║ ❒︎ ${usedPrefix}minar
║ ❒︎ ${usedPrefix}buy
║ ❒ ${usedPrefix}minardiamantes  
║ ❒︎ ${usedPrefix}transfer <tipo> <cantidad> <@tag
║ ❒ ${usedPrefix}verificar
║ ❒︎ ${usedPrefix}unreg <numero de serie>
╚════ ≪ •❈• ≫ ════╝

╔═════ GAMES ═════╗ 
║ ❒ ${usedPrefix}suitpvp <@tag>
║ ❒ ${usedPrefix}suerte <cara/cruz>
║ ❒ ${usedPrefix}mates <noob / easy / medium / hard / extreme /impossible /impossible2>
║ ❒ ${usedPrefix}ppt <papel / tijera /piedra
║ ❒ ${usedPrefix}prostituto <nombre / @tag
║ ❒ ${usedPrefix}prostituta <nombre / @tag
║ ❒ ${usedPrefix}hetero <nombre / @tag
║ ❒ ${usedPrefix}gay2 <nombre / @tag
║ ❒ ${usedPrefix}lesbiana <nombre / @tag
║ ❒ ${usedPrefix}pajero <nombre / @tag
║ ❒ ${usedPrefix}pajera <nombre / @tag
║ ❒ ${usedPrefix}puto <nombre / @tag
║ ❒ ${usedPrefix}puta <nombre / @tag
║ ❒ ${usedPrefix}manco <nombre / @tag
║ ❒ ${usedPrefix}manca <nombre / @tag
║ ❒ ${usedPrefix}rata <nombre / @tag
║ ❒ ${usedPrefix}love <nombre / @tag
║ ❒ ${usedPrefix}doxear <nombre / @tag
║ ❒ ${usedPrefix}pregunta <texto
║ ❒ ${usedPrefix}slot 
║ ❒ ${usedPrefix}simi <texto
║ ❒ ${usedPrefix}topgays
║ ❒ ${usedPrefix}topotakus
║ ❒ ${usedPrefix}formarpareja
║ ❒ ${usedPrefix}formarpareja5 
║ ❒ ${usedPrefix}amistad
║ ❒ ${usedPrefix}verdad
║ ❒ ${usedPrefix}reto
╚════ ≪ •❈• ≫ ════╝

╔═════ ENABLE/DISABLE ═════╗ 
║ ❒ ${usedPrefix}enable *welcome*
║ ❒ ${usedPrefix}disable *welcome*
║ ❒ ${usedPrefix}enable *modohorny*
║ ❒ ${usedPrefix}disable *modohorny*
║ ❒ ${usedPrefix}enable *antilink*
║ ❒ ${usedPrefix}disable *antilink*
║ ❒ ${usedPrefix}enable *antilink2*
║ ❒ ${usedPrefix}disable *antilink2*
║ ❒ ${usedPrefix}enable *detect*
║ ❒ ${usedPrefix}disable *detect*
║ ❒ ${usedPrefix}enable *audios*
║ ❒ ${usedPrefix}disable *audios*
║ ❒ ${usedPrefix}enable *autosticker*
║ ❒ ${usedPrefix}disable *autosticker*
║ ❒ ${usedPrefix}enable *antiviewonce*
║ ❒ ${usedPrefix}enable *antitraba*
║ ❒ ${usedPrefix}disable *antitraba*
║ ❒ ${usedPrefix}enable *antiArab*
║ ❒ ${usedPrefix}disable *antiArab*
║ ❒ ${usedPrefix}enable *simi*
║ ❒ ${usedPrefix}disable *simi*
║ ❒ ${usedPrefix}enable *modoadmin*
║ ❒ ${usedPrefix}disable *modoadmin*
╚════ ≪ •❈• ≫ ════╝

┌─「💻𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑」
├➢${usedPrefix}facebook <enlace / link / url
├➢${usedPrefix}instagram <enlace / link / url
├➢${usedPrefix}mediafire <enlace / link / url
├➢${usedPrefix}gitclone <enlace / link / url
├➢${usedPrefix}tiktok <enlace / link / url
├➢${usedPrefix}ytmp3 <enlace / link / url
├➢${usedPrefix}ytmp4 <enlace / link / url
├➢${usedPrefix}play.1 <texto / enlace / link / url
├➢${usedPrefix}play.2 <texto / enlace / link / url
├➢${usedPrefix}play <texto
├➢${usedPrefix}spotify <texto
├➢${usedPrefix}imagen <texto
├➢${usedPrefix}pinteret <texto
├➢${usedPrefix}wallpaper <texto
├➢${usedPrefix}wallpaper2 <texto
├➢${usedPrefix}pptiktok <nombre de usuario
├➢${usedPrefix}igstalk <nombre de usuario
├➢${usedPrefix}tiktokstalk <nombre de usuario
└────ׂ─ׂ─ׂ─ׂ──

┌──「🏢𝐆𝐑𝐎𝐔𝐏」─
├➢${usedPrefix}add *<número>*
├➢${usedPrefix}kick *<@tag>*
├➢${usedPrefix}kick2 *<@tag>*
├➢${usedPrefix}listanum *<texto>*
├➢${usedPrefix}kicknum *<texto>*
├➢${usedPrefix}resetlink
├➢${usedPrefix}encuesta *<texto>
├➢${usedPrefix}votar *<texto>*
├➢${usedPrefix}listadv
├➢${usedPrefix}deladvertencia <@tag
├➢${usedPrefix}advertencia <@tag
├➢${usedPrefix}grouptime *<opcion> <tiempo>*
├➢${usedPrefix}grupo <abrir / cerrar
├➢${usedPrefix}promote <@tag
├➢${usedPrefix}demote <@tag
├➢${usedPrefix}banchat (owner option)
├➢${usedPrefix}unbanchat (owner option)
├➢admins *<texto>_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├➢${usedPrefix}demote <@tag
├➢${usedPrefix}infogroup
├➢${usedPrefix}link
├➢${usedPrefix}setname <texto
├➢${usedPrefix}setdesc <texto
├➢${usedPrefix}invocar <texto
├➢${usedPrefix}setwelcome <texto
├➢${usedPrefix}setbye <texto
├➢${usedPrefix}hidetag <texto
├➢${usedPrefix}simular <welcome / bye / promote / demote>
├➢${usedPrefix}destraba 
└────ׂ─ׂ─ׂ─ׂ───

┌──「🛡️𝐆𝐈𝐓𝐇𝐔𝐁」─
├➢/script
└────ׂ─ׂ─ׂ─ׂ───

┌──「🎑𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒」
├➢_${usedPrefix}togifaud *<responde a un video>*
├➢_${usedPrefix}toimg *<responde a un sticker>*
├➢_${usedPrefix}tomp3 *<responde a un video / nota de voz>*
├➢_${usedPrefix}toptt *<responde a un video / audio>*
├➢_${usedPrefix}tovideo *<responde a un sticker>*
├➢_${usedPrefix}tourl *<responde a un video / imagen / audio>*
├➢_${usedPrefix}tts es *<texto>*
└────ׂ─ׂ─ׂ─ׂ───

┌──「📑𝐋𝐎𝐆𝐎𝐒」─
├➢${usedPrefix}logos <efecto <texto
├➢${usedPrefix}simpcard <@tag
├➢${usedPrefix}hornycard <@tag
├➢${usedPrefix}lolice <@tag
├➢${usedPrefix}ytcomment <texto
├➢${usedPrefix}itssostupid
├➢${usedPrefix}pixelar
├➢${usedPrefix}blur
└────ׂ─ׂ─ׂ─ׂ───


┌──「🌹𝐅𝐫𝐚𝐬𝐞𝐬 𝐲 𝐭𝐞𝐱𝐭𝐨𝐬」─
├➢_${usedPrefix}piropo_
├➢_${usedPrefix}consejo_
├➢_${usedPrefix}fraseromantica_
├➢_${usedPrefix}historiaromantica_
└────ׂ─ׂ─ׂ─ׂ──

┌──「⛩️𝐀𝐍𝐈𝐌𝐄𝐒」─
├➢${usedPrefix}cristianoronaldo
├➢${usedPrefix}messi
├➢${usedPrefix}meme
├➢${usedPrefix}itzy
├➢${usedPrefix}blackpink
├➢${usedPrefix}kpop <blackpink / exo / bts
├➢${usedPrefix}lolivid
├➢${usedPrefix}loli
├➢${usedPrefix}navidad
├➢${usedPrefix}ppcouple
├➢${usedPrefix}neko
├➢${usedPrefix}waifu
├➢${usedPrefix}akira
├➢${usedPrefix}akiyama
├➢${usedPrefix}anna
├➢${usedPrefix}asuna
├➢${usedPrefix}ayuzawa
├➢${usedPrefix}boruto
├➢${usedPrefix}chiho
├➢${usedPrefix}chitoge
├➢${usedPrefix}deidara
├➢${usedPrefix}erza
├➢${usedPrefix}elaina
├➢${usedPrefix}eba
├➢${usedPrefix}emilia
├➢${usedPrefix}hestia
├➢${usedPrefix}hinata
├➢${usedPrefix}inori
├➢${usedPrefix}isuzu
├➢${usedPrefix}itachi
├➢${usedPrefix}itori
├➢${usedPrefix}kaga
├➢${usedPrefix}kagura
├➢${usedPrefix}kaori
├➢${usedPrefix}keneki
├➢${usedPrefix}kotori
├➢${usedPrefix}kurumi
├➢${usedPrefix}madara
├➢${usedPrefix}mikasa
├➢${usedPrefix}miku
├➢${usedPrefix}minato
├➢${usedPrefix}naruto
├➢${usedPrefix}nezuko
├➢${usedPrefix}sagiri
├➢${usedPrefix}sasuke
├➢${usedPrefix}sakura
├➢${usedPrefix}cosplay
└────ׂ─ׂ─ׂ─ׂ───

┌──「🔞𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 +𝟏𝟖」
├➢_${usedPrefix}pack
├➢_${usedPrefix}pack2
├➢_${usedPrefix}videoxxx
├➢_${usedPrefix}tiktokxxx
├➢_${usedPrefix}tetas
├➢_${usedPrefix}booty
├➢_${usedPrefix}ecchi
├➢_${usedPrefix}imagenlesbians
├➢_${usedPrefix}panties
├➢_${usedPrefix}porno
├➢_${usedPrefix}randomxxx
├➢_${usedPrefix}pechos
├➢_${usedPrefix}yuri
├➢_${usedPrefix}yuri2
├➢_${usedPrefix}hentai
├➢_${usedPrefix}nsfwloli
├➢_${usedPrefix}nsfworgy
├➢_${usedPrefix}nsfwfoot
├➢_${usedPrefix}nsfwass
├➢_${usedPrefix}nsfwbdsm
├➢_${usedPrefix}nsfwcum
├➢_${usedPrefix}nsfwero
├➢_${usedPrefix}nsfwglass
├➢_${usedPrefix}hentaipdf *<texto>*
└────ׂ─ׂ─ׂ─ׂ──

┌──「𝐄𝐟𝐞𝐜𝐭𝐨𝐬 𝐝𝐞 𝐚𝐮𝐝𝐢𝐨𝐬」
├➢*- 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉*
├➢_${usedPrefix}bass
├➢_${usedPrefix}blown
├➢_${usedPrefix}deep
├➢_${usedPrefix}earrape
├➢_${usedPrefix}fast
├➢_${usedPrefix}fat
├➢_${usedPrefix}nightcore
├➢_${usedPrefix}reverse
├➢_${usedPrefix}robot
├➢_${usedPrefix}slow
├➢_${usedPrefix}smooth
├➢_${usedPrefix}tupai
└────ׂ─ׂ─ׂ─ׂ──

┌「◾𝐂𝐡𝐚𝐭 𝐚𝐧𝐨𝐧𝐢𝐦𝐨」
├➢_${usedPrefix}start
├➢_${usedPrefix}next
├➢_${usedPrefix}leave
└────ׂ─ׂ─ׂ─ׂ──

┌「🔍𝐁𝐮𝐬𝐜𝐚𝐫」
├➢_${usedPrefix}apkpure <*texto*>
├➢_${usedPrefix}covid <*país*>
├➢_${usedPrefix}playstore <*texto*>
├➢_${usedPrefix}stickersearch *<texto>*
├➢_${usedPrefix}xnxxsearch *<texto>*
├➢_${usedPrefix}animeinfo *<texto>*
├➢_${usedPrefix}google *<texto>*
├➢_${usedPrefix}letra *<texto>*
├➢_${usedPrefix}wikipedia *<texto>*
├➢_${usedPrefix}ytsearch *<texto>*
├➢_${usedPrefix}revdl *<texto>*
├➢_${usedPrefix}toraccino *<texto>*
└────ׂ─ׂ─ׂ─ׂ──

┌「🎵𝐀𝐔𝐃𝐈𝐎𝐒」
├➢_𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙰𝚂 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝙵𝚁𝙰𝚂𝙴𝚂 𝚂𝙸𝙽 𝙽𝙸𝙽𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 (#, /, *, .)
├➢_(𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
├➢_Quien es tu sempai botsito 7w7
├➢_Te diagnostico con gay
├➢_A nadie le importa
├➢_Fiesta del admin
├➢_Fiesta del administrador
├➢_Vivan los novios
├➢_Feliz cumpleaños
├➢_No digas mamadas Mariyein
├➢_Noche de paz
├➢_Buenos dias
├➢_Cambiate a Movistar 
├➢_Bienvenido
├➢_Calla fan de bts
├➢_Las reglas del grupo
├➢_Buenos tardes
├➢_Buenos noches
├➢_Audio hentai
├➢_Chica lgante
├➢_Feliz navidad
├➢_Vete a la vrg
├➢_Pasa pack Bot
├➢_Atencion grupo
├➢_Marica quien
├➢_Murio el grupo
├➢_Oh me vengo
├➢_tio que rico
├➢_Viernes
├➢_Baneado
├➢_Sexo
├➢_Hola
├➢_Un pato
├➢_Nyanpasu
├➢_Te amo
├➢_Yamete
├➢_Bañate
├➢_Es puto
├➢_La biblia
├➢_Onichan
├➢_Mierda de Bot
├➢_Siuuu
├➢_Epico
├➢_Shitpost
├➢_Rawr
├➢_UwU
├➢_:(
├➢_a
└────ׂ─ׂ─ׂ─ׂ──


┌──「🛠️𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒」─
├➢_${usedPrefix}inspect *<link del grupo>*
├➢_${usedPrefix}ofuscar *<código>*
├➢_${usedPrefix}reenviar *<responder a un mensaje>*
├➢_${usedPrefix}copy *<texto>*
├➢_${usedPrefix}chatgpt *<texto>*
├➢_${usedPrefix}morse *<texto>*
├➢_${usedPrefix}captura *<link de la página>*
├➢_${usedPrefix}horario
├➢_${usedPrefix}encuestas texto|texto
├➢_${usedPrefix}afk *<motivo>*
├➢_${usedPrefix}ocr *<responde a imagen>*
├➢_${usedPrefix}tamaño *<cantidad> <responde a imagen / video>*
├➢_${usedPrefix}acortar *<enlace / link / url>*
├➢_${usedPrefix}calc *<operacion math>*
├➢_${usedPrefix}del *<respondre a mensaje del Bot>*
├➢_${usedPrefix}whatmusic *<responde a un audio>*
├➢_${usedPrefix}qrcode *<texto>*
├➢_${usedPrefix}readmore *<texto1| texto2>*
├➢_${usedPrefix}spamwa *<numero|texto|cantidad>*
├➢_${usedPrefix}styletext *<texto>*
├➢_${usedPrefix}traducir *<texto>*
├➢_${usedPrefix}nowa *<numero>*
└────ׂ─ׂ─ׂ─ׂ───

┌──「🌌𝐒𝐓𝐈𝐂𝐊𝐄𝐑」─
├➢_${usedPrefix}sticker *<responder a imagen o video>*
├➢_${usedPrefix}sticker *<enlace / link / url>*
├➢_${usedPrefix}s *<responder a imagen o video>*
├➢_${usedPrefix}s *<enlace / link / url>*
├➢_${usedPrefix}sfull *<responder a imagen o video>*
├➢_${usedPrefix}emojimix *<emoji 1>&<emoji 2>*
├➢_${usedPrefix}scircle *<responder a imagen>*
├➢_${usedPrefix}sremovebg *<responder a imagen>*
├➢_${usedPrefix}semoji *<tipo> <emoji>*
├➢_${usedPrefix}attp *<texto>*
├➢_${usedPrefix}attp2 *<texto>*
├➢_${usedPrefix}attp3 *<texto>*
├➢_${usedPrefix}ttp *<texto>*
├➢_${usedPrefix}ttp2 *<texto>*
├➢_${usedPrefix}ttp3 *<texto>*
├➢_${usedPrefix}ttp4 *<texto>*
├➢_${usedPrefix}ttp5 *<texto>*
├➢_${usedPrefix}pat *<@tag>*
├➢_${usedPrefix}slap *<@tag>*
├➢_${usedPrefix}kiss *<@tag>*
├➢_${usedPrefix}dado
├➢_${usedPrefix}wm *<packname> <author>*
├➢_${usedPrefix}stickermarker *<efecto> <responder a imagen>*
├➢_${usedPrefix}stickerfilter *<efecto> <responder a imagen>*
└────ׂ─ׂ─ׂ─ׂ───

┣━━━❰･ *OWNER 👑* ･❱━━━┫
❀••►☪︎ PARA VER LOS COMANDOS DE OWNER USE:
❀••►☪︎ ${usedPrefix}soloparaelpropietario
𒅄 ▬▬▬▬ ◆ ▬▬▬▬ 𒅄

╔══════════════════╗ 
║ □ ${wm} □
╚══════════════════╝
`.trim()
await conn.sendButton(m.chat, menuA, menuB,  pp, [
['GRUPOS', `#grupos`],
['DONAR', `#donar`]
], m)
const sections = [
{
title: `*INFORMACION*`,
rows: [
{title: "/grupos", description: "muestra los grupos del bot", rowId: `${usedPrefix}grupos`},
{title: "/estado", description: "para ver el estado del bot", rowId: `${usedPrefix}estado`},
{title: "/terminos", description: "para leer los términos y condiciones del bot", rowId: `${usedPrefix}términos`},
{title: "/instalarbot", description: "información para instalar al bot", rowId: `${usedPrefix}instalarbot`},
{title: "/infobot", description: "informacion del bot", rowId: `${usedPrefix}infobot`},
{title: "/grouplist", description: "muestra los grupos en donde está el bot", rowId: `${usedPrefix}grouplist`},
{title: "/owner", description: "muestra los creadores del bot", rowId: `${usedPrefix}owner`},
{title: "/script", description: "muestra el github del bot", rowId: `${usedPrefix}sc`},
]}, ]
const listMessage = {
text: wm3,
footer: `𝙼𝙴𝙽𝚄 𝙳𝙴𝚂𝙿𝙻𝙴𝙶𝙰𝙱𝙻𝙴`,
title: null,
buttonText: "selecionar", 
sections }

 conn.sendMessage(m.chat, listMessage, {quoted: fkontak})	
}

handler.command = /^(menucompleto|menu completo|allmenu)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

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
