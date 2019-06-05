// @flow
export interface ContextInterface {
  getBody(): Object;
  sendJson(code: number, json: Object): void;
}
