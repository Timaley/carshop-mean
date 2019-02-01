import { ErrorObject } from '../classes/errors.model';

export const API_ERROR = {
    // 400
    BAD_REQUEST: new ErrorObject(400, 'Bad request'),
    NOT_AUTHORIZED: new ErrorObject(401, 'Not authorized'),
    FORBIDDEN: new ErrorObject(403, 'Forbidden'),
    NOT_FOUND: new ErrorObject(404, 'Not found'),
    CONFLICT: new ErrorObject(409, 'Already exist'),
    NOT_ACCEPTABLE: new ErrorObject(406, 'Not Acceptable'),
    // 500
    SERVER_ERROR: new ErrorObject(500, 'Server error'),
};