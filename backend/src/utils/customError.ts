export class CustomError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'CustomError';
    Error.captureStackTrace(this, this.constructor);
  }
}
