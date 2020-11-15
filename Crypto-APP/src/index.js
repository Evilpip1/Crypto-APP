const electron = require('electron')
const path = require('path')
const axios = require('axios')


var BTCprice = document.querySelector('#btc-loading-info')
var ETHprice = document.querySelector('#eth-loading-info')
var XRPprice = document.querySelector('#xrp-loading-info')
var LTCprice = document.querySelector('#ltc-loading-info')


function getBTC() {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur')
        .then(res => {
            const cryptos = res.data.bitcoin.eur
            BTCprice.innerHTML = cryptos.toLocaleString('bt') + '€'
        })
}
getBTC()
setInterval(getBTC, 2000);


function getETH() {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur')
        .then(res => {
            const cryptos = res.data.ethereum.eur
            ETHprice.innerHTML = cryptos.toLocaleString('et') + '€'
        })
}
getETH()
setInterval(getETH, 2000);


function getXRP() {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=eur')
        .then(res => {
            const cryptos = res.data.ripple.eur
            XRPprice.innerHTML = cryptos.toLocaleString('xr') + '€'
        })
}
getXRP()
setInterval(getXRP, 2000);


function getLTC() {
    axios.get('https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=eur')
        .then(res => {
            const cryptos = res.data.litecoin.eur
            LTCprice.innerHTML = cryptos.toLocaleString('lt') + '€'
        })
}
getLTC()
setInterval(getXRP, 2000)
