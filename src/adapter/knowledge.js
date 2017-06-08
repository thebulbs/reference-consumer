const axios = require('axios')
const config = require('../config')

module.exports = {

    store: (type, payload) => {
        return axios({
            method: 'put',
            url: config.knowledge.url + '/' + payload.auth.user + '/bulbs/' + payload.data.bulb.uuid + "/references",
            data: payload.data.reference,
            headers: {
                Authorization: "Bearer: " + payload.auth.token
            }
        })
    }

}

