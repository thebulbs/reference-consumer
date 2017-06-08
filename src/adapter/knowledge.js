const axios = require('axios')
const config = require('../config')

module.exports = {

    store: (type, payload) => {
        axios.defaults.headers.common['Authorization'] = "Bearer: " + payload.auth.token
        return axios.put(
            config.knowledge.url + '/' + payload.auth.user + '/bulbs/' + payload.data.bulb.uuid + "/references",
            payload.data.reference
        )
    }

}

