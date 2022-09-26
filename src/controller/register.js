const Joi = require('@hapi/joi');
const register = require('../services/register')

const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().lowercase().required(),
  }).required();

  module.exports = async (args) =>
  { 
    const output = schema.validate(args.value)
    const creatUser = await register(output)
    return creatUser
    
}