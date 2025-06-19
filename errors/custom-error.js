
export class CustomAPIError extends Error{
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}

export const createCustomError = (msg, statusCode) => {
    return new customAPIError(msg, statusCode);
}