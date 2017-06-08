const KnowledgeAdapter = require('../src/adapter/knowledge')
const axios = require('axios')
const sinon = require('sinon')
const assert = require('chai').assert
const config = require('../src/config')

describe('Knowledge Adapter', function () {

    let sandbox

    beforeEach(function () {
        sandbox = sinon.sandbox.create()
    });

    afterEach(function () {
        sandbox.restore()
    })

    it('should PUT reference to knowledge api', () => {
        const axiosPutStub = sandbox.stub(axios, "put").callsFake(() => {
            return Promise.resolve()
        })

        let event = {
            data: {
                reference: {
                    reference: "asd",
                    uuid: "123-123-123"
                },
                bulb: {
                    summary: 'asdasd',
                    uuid: '9cc094c2-3e12-4b15-9d69-3cfe6240f6b7'
                }
            },
            auth: {
                user: "123",
                token: "token"
            }
        }

        KnowledgeAdapter.store("addReference", event)
        sinon.assert.calledOnce(axiosPutStub)
        sinon.assert.calledWith(axiosPutStub,
            config.knowledge.url + "/123/bulbs/" + event.data.bulb.uuid + "/references",
            {
                data: event.data.reference,
                headers: {
                    Authorization: "Bearer: token"
                }
            }
        )
    })

});