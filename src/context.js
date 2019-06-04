// @flow
import type { $Request, $Response } from 'express';

export default class context {
  req: $Request;

  res: $Response;

  constructor(req: $Request, res: $Response): void {
    this.req = req;
    this.res = res;
  }

  getBody(): Object {
    return this.req.body;
  }

  sendJson(code: number, json: Object) {
    this.res.status(code).json(json);
  }
}
