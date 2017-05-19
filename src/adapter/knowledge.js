const axios = require('axios')
const config = require('../config')

module.exports = {

    store: (data) => {
        return axios.put(config.knowledge.url + '/reference', data).then(() => {
            console.log("successfully send new reference to knowledge api: " + JSON.stringify(data))
        }).catch((err) => {
            console.log(err)
        })
    }

}

