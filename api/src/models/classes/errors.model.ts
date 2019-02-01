/**
 *  errors with a status(code error) and messages
 *
 * @export
 * @class ErrorObject
 */
export class ErrorObject {
    status: number;
    message: string;
    /**
     * Creates an instance of ErrorObject.
     * @param {number} status 404;
     * @param {string} message "Not found";
     * @memberof ErrorObject
     */
    constructor(status: number, message: string) {
        this.status = status;
        this.message = message;
    }
}