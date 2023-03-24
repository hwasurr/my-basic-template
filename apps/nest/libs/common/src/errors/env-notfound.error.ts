export class EnvNotFoundError extends Error {
  constructor(...params: any) {
    super(...params);
    this.name = 'EnvNotFoundError';
  }
}
