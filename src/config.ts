import * as Joi from 'joi';
import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';

export default <ConfigModuleOptions>{
  validationSchema: Joi.object({
    MONGODB_URL: Joi.string().uri().required(),
  }),
  validationOptions: {
    allowUnknown: false,
    abortEarly: true,
  },
  isGlobal: true,
  ignoreEnvVars: true,
};
