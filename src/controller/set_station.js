const Joi = require('@hapi/joi');


const schema = Joi.object({
    user_id: Joi.string().length(36).required(),
    stations: Joi.array().items(Joi.object().keys({
      id: Joi.string().length(36).required(),
      group: Joi.string().required(),
    })).required(),
  }).required();


module.exports = async (args) =>{ 
    console.log(args.value.stations)
    const output = schema.validate(args.value)
    console.log(output)
}