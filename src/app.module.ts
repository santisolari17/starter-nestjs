import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ControllerModule } from './application/controllers/controller.module';
import AppConfigMap from './infrastructure/config/AppConfigMap';
import { LoggerModule } from 'nestjs-pino';
import { AppConfigModel } from './infrastructure/config/AppConfigModel';
import { EAppEnvironment } from './infrastructure/enums/EAppEnvironment';
import {
  RequestTracerMiddleware,
  REQUEST_TRACE_ID_HEADER,
} from './infrastructure/middlewares/requestTracer/requestTracer.middleware';
import { Request } from 'express';

@Module({
  imports: [
    ControllerModule,
    ConfigModule.forRoot({
      load: [AppConfigMap],
      envFilePath: '.env',
      isGlobal: true,
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const appConfig: AppConfigModel = config.get('appConfig');

        const transport =
          appConfig.environment === EAppEnvironment.Local
            ? { target: 'pino-pretty', options: { singleLine: true } }
            : undefined;
        const level = appConfig.environment === EAppEnvironment.Local ? 'debug' : 'info';
        const autoLogging = appConfig.environment !== EAppEnvironment.Local;

        const disabledHttpDataSerializers = {
          req: () => undefined,
          res: () => undefined,
        };
        const serializers = appConfig.environment === EAppEnvironment.Local ? disabledHttpDataSerializers : null;

        return {
          pinoHttp: {
            transport,
            level,
            autoLogging,
            serializers,
            customProps: (req: Request) => ({ traceId: req[REQUEST_TRACE_ID_HEADER], context: 'HTTP' }),
          },
        };
      },
    }),
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestTracerMiddleware).forRoutes('*');
  }
}
