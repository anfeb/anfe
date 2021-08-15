const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat


                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}addprem* @tag waktu\n*${prefix}addprem* nomor waktu\n\nContoh : ${command} @tag 30d`)

                if (mentioned.length !== 0){

                    for (let i = 0; i < mentioned.length; i++){

                    _prem.addPrems(mentioned[0], args[2], prems)

                    }

                    reply('Sukses')

                } else {

                    _prem.addPrems(args[1] + '@s.whatsapp.net', args[2], prems)

                    reply('Sukses')

                
}
handler.help = ['addprems <nomor>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true

module.exports = handler
