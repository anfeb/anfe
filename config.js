global.DeveloperMode = 'false' //true Or false
global.linkGC = ['https://chat.whatsapp.com/K2GdecBQiHaKjMiQ9bhrNS', 'https://chat.whatsapp.com/LvK86OH4nWyHUAWJS9tNtw']
global.owner = ['6287772343860', '6285924341386', '6285349896689']// Put your number here
global.mods = ['627772343860'] // Want some help?
global.prems = ['6285157160906'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais'
}

// Sticker WM
global.packname = 'wa.me/6285713964963'
global.author = 'Metro Bot Is The Best'

global.multiplier = 39 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
