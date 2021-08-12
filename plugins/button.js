let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
const buttons = [
{buttonId: 'id1', buttonText: {displayText: 'Promosi Bot'}, type: 1}, 
{buttonId: 'id2', buttonText: {displayText: '💻Owner anfebnBotz 💻'}, type: 1}, 
{buttonId: 'id3', buttonText: {displayText: '⚠ SYARAT & KETENTUAN ⚠'}, type: 1}
]
const buttonMessage = {
    contentText: "HALO KAK\nSaya anfebnBotz\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok", 
    footerText: 'Powered By Baileys\nCreated anfebnBotz By anfebn', 
    buttons: buttons,
    headerType: 1
}
conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
}

handler.help = ['menu']
handler.tags = ['jdhsnaj'] 
handler.command = /^(menu)$/i
handler.owner = true
handler.mods = true
handler.premium = true
handler.group = true
handler.private = true

handler.admin = true
handler.botAdmin = true
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler
