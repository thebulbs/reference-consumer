const axios = require('axios')
const config = require('../config')

module.exports = {

    store: (type, data) => {
        return axios.put(config.knowledge.url + '/bulbs/' + data.bulb.uuid + "/references", data.reference).then(() => {
            console.log("successfully send new reference to knowledge api: " + JSON.stringify(data.reference))
        }).catch((err) => {
            console.log(err)
        })
    }

}

