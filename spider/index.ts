const url = "https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f600/u1f600_u2615.png"
const axios = require('axios')
const fs = require('fs')
const path = require('path')

axios({
    method: 'get',
    url,
    responseType: 'stream'
}).then(async response => {
    const name = url.split('/').reverse()[0]
    console.log('name=', name)
    await response.data.pipe(fs.createWriteStream(name))
})