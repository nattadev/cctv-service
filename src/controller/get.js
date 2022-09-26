const Joi = require('@hapi/joi');
const getUser = require('../services/getUser')

const schema = Joi.string().length(36).required()


module.exports = async (id) => { 
    const output = schema.validate(id)
    const user = new getUser();
    const gUser = await user.UserGet(output)
    return gUser
}