// @flow
import type { $Request, $Response } from 'express';

export async function getUser(req: $Request, res: $Response) {
  return res.send('user get');
}

export async function postUser(req: $Request, res: $Response) {
  return res.send('user post');
}
