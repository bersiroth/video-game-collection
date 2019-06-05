// @flow
import type { $Request, $Response } from 'express';
import type { ContextInterface } from 'interfaces/context';

export default class Context implements ContextInterface {
  req: $Request;

  res: $Response;

  constructor(req: $Request, res: $Response) {
    this.req = req;
    this.res = res;
  }

  getBody(): Object {
    return this.req.body;
  }

  sendJson(code: number, json: Object): void {
    this.res.status(code).json(json);
  }
}
