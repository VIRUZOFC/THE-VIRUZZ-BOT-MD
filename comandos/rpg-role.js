const roles = {
    '*NOVATO(A) I* 🪤': 0,
     '*NOVATO(A) II* 🪤': 1,
      '*NOVATO(A) III* 🪤': 2,
       '*NOVATO(A) IV* 🪤': 3,
        '*NOVATO(A) V* 🪤': 4,
    '*APRENDIS I* 🪚': 5,
     '*APRENDIS II* 🪚': 6,
      '*APRENDIS III* 🪚': 7,
       '*APRENDIS IV* 🪚': 8,
       '*APRENDIS V* 🪚': 9,
    '*EXPLORADOR(A) I* 🪓': 10,
     '*EXPLORADOR(A) II* 🪓': 11,
      '*EXPLORADOR(A) III* 🪓': 12,
       '*EXPLORADOR(A) IV* 🪓': 13,
        '*EXPLORADOR(A) V* 🪓': 14,
    '*MAESTRO(A) I* ⚒️': 15,
     '*MAESTRO(A) II* ⚒️': 16,
      '*MAESTRO(A) III* ⚒️': 17,
       '*MAESTRO(A) IV* ⚒️': 18,
        '*MAESTRO(A) V* ⚒️': 19,
    '*IRON I* 🦾': 20,
     '*IRON II* 🦾': 21,
      '*IRON III* 🦾': 22,
       '*IRON IV* 🦾': 23,
        '*IRON V* 🦾': 24,
    '*PLATA I* 🔮': 25,
     '*PLATA II* 🔮': 26,
      '*PLATA III* 🔮': 27,
       '*PLATA IV* 🔮': 28,
        '*PLATA V* 🔮': 29,
    '*ORO I* 🏅': 30,
     '*ORO II* 🏅': 31,
      '*ORO III* 🏅': 32,
       '*ORO IV* 🏅': 33,
        '*ORO V* 🏅': 34,
    '*DIAMANTE I* 💎': 35,
     '*DIAMANTE II* 💎': 36,
      '*DIAMANTE III* 💎': 37,
       '*DIAMANTE IV* 💎': 38,
        '*DIAMANTE V* 💎': 39,
    '*FINO I* 🧐🎩': 40,
     '*FINO II* 🧐🎩': 41,
      '*FINO III* 🧐🎩': 42,
       '*FINO IV* 🧐🎩': 43,
        '*FINO V* 🧐🎩': 44,
    '*HETERO I* 🎩': 45,
     '*HETERO II* 🎩': 46,
      '*HETERO III* 🎩': 47,
       '*HETERO IV* 🎩': 48,
        '*HETERO V* 🎩': 49,
    '*LEGENDARIO(A) I* 🛡️': 50,
     '*LEGENDARIO(A) II* 🛡️': 51,
      '*LEGENDARIO(A) III* 🛡️': 52,
       '*LEGENDARIO(A) IV* 🛡️': 53,
        '*LEGENDARIO(A) V* 🛡️': 54,
    '*LEYENDA I* 🏆': 55,
     '*LEYENDA II* 🏆': 56,
      '*LEYENDA III* 🏆': 57,
       '*LEYENDA IV* 🏆': 58,
       '*LEYENDA V* 🏆': 59,
    '*ESTELAR I* ☄️': 60,
     '*ESTELAR II* ☄️': 61,
      '*ESTELAR III* ☄️': 62,
       '*ESTELAR IV* ☄️': 63,
        '*ESTELAR V* ☄️': 64,
    '*TOP ASTRAL I* ⚜️🔱': 65,
     '*TOP ASTRAL II* ⚜️🔱': 66,
      '*TOP ASTRAL III* ⚜️🔱': 67,
       '*TOP ASTRAL IV* ⚜️🔱': 68,
        '*TOP ASTRAL V* ⚜️🔱': 69,
    '👑 *ÉLITE GLOBAL I* 🏁': 70,
     '👑 *ÉLITE GLOBAL II* 🏁': 75,
      '👑 *ÉLITE GLOBAL III* 🏁': 80,
       '👑 *ÉLITE GLOBAL IV* 🏁': 85,
        '👑 *ÉLITE GLOBAL V* 🏁': 90,
    '👑 *LEYENDA GLOBAL I* 💎🏁': 100,
     '👑 *LEYENDA GLOBAL II* 💎🏁': 140,
    '👑 *LEYENDA GLOBAL III* 💎🏁': 180,
    '👑 *LEYENDA GLOBAL IV* 💎🏁': 250,
    '👑 *LEYENDA GLOBAL V* 💎🏁': 300,
   '🔰 *MODERADOR* 🔰': 4000,
   '∞ 👑 *~OWNER~* 👑 ∞': 7000
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}

/*let handler = m => m

handler.before = function (m, text) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? '*NOVATO(A) III* 🪤'
        : ((user.level >= 3) && (user.level <= 6)) ? '*NOVATO(A) II* 🪤'
            : ((user.level >= 6) && (user.level <= 9)) ? '*NOVATO(A) I* 🪤'
                : ((user.level >= 9) && (user.level <= 12)) ? '*APRENDIS III* 🪚'
                    : ((user.level >= 12) && (user.level <= 15)) ? '*APRENDIS II* 🪚'
                        : ((user.level >= 15) && (user.level <= 18)) ? '*APRENDIS I* 🪚'
                            : ((user.level >= 18) && (user.level <= 21)) ? '*EXPLORADOR(A) III* 🪓'
                                : ((user.level >= 21) && (user.level <= 24)) ? '*EXPLORADOR(A) II* 🪓'
                                    : ((user.level >= 24) && (user.level <= 27)) ? '*EXPLORADOR(A) I* 🪓'
                                        : ((user.level >= 27) && (user.level <= 30)) ? '*MAESTRO(A) III* ⚒️'
                                            : ((user.level >= 30) && (user.level <= 33)) ? '*MAESTRO(A) II* ⚒️'
                                                : ((user.level >= 33) && (user.level <= 36)) ? '*MAESTRO(A) I* ⚒️'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? '*IRON III* 🦾'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? '*IRON II* 🦾'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? '*IRON I* 🦾'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? '*PLATA III* 🔮'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? '*PLATA II* 🔮'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? '*PLATA I* 🔮'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? '*ORO III* 🏅'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? '*ORO II* 🏅'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? '*ORO I* 🏅'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? '*DIAMANTE III* 💎'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? '*DIAMANTE II* 💎'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? '*DIAMANTE I* 💎'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? '*PRO EN DORRAT III* 🌠'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? '*PRO EN DORRAT II* 🌠'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? '*PRO EN DORRAT I* 🌠'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? '*SUPER PRO III* 🎩'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? '*SUPER PRO II* 🎩'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? '*SUPER PRO I* 🎩'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? '*LEGENDARIO(A) III* 🛡️'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? '*LEGENDARIO(A) II* 🛡️'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? '*LEGENDARIO(A) I* 🛡️'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? '*LEYENDA III* 🏆'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? '*LEYENDA II* 🏆'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? '*LEYENDA I* 🏆'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 150)) ? '*ESTELAR III* ☄️'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? '*ESTELAR II* ☄️'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? '*ESTELAR I* ☄️'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? '*TOP ASTRAL III* ⚜️🔱'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? '*TOP ASTRAL III* ⚜️🔱'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 700)) ? '*TOP ASTRAL III* ⚜️🔱'
                                                                                                                                                                            : ((user.level >= 700) && (user.level <= 1000)) ? '👑 *ÉLITE GLOBAL* 🏁'
                                                                                                                                                                                : '👑 *∞ ÉLITE GLOBAL* 💎🏁'


    user.role = role
    return true
}

export default handler */
