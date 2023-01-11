import { ClassValidatorEntityValidator } from '../utils/ClassValidatorEntityValidator';
import { AppConfigModel } from './AppConfigModel';

const _entityValidator = new ClassValidatorEntityValidator();

/** This will be loaded at app.module.ts */
export default async () => {
  const configMapp = {
    port: Number(process.env.PORT) || 3000,
    environment: process.env.ENVIRONMENT,
  };

  const appConfig = new AppConfigModel(configMapp);
  await _entityValidator.validate(appConfig);

  return { appConfig };
};
