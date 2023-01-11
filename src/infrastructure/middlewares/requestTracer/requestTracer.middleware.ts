import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const REQUEST_TRACE_ID_HEADER = 'X-Request-Trace-Id';

@Injectable()
export class RequestTracerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const traceId = uuidv4();

    req[REQUEST_TRACE_ID_HEADER] = traceId;
    res.set(REQUEST_TRACE_ID_HEADER, traceId);

    next();
  }
}
