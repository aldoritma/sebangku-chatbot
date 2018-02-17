'use strict';
import {Router} from 'express';
import {global} from '../../config/app';
import basicAuth from 'express-basic-auth';
const route = Router();

 const authenticate = route.use(basicAuth({
    authorizer: authorize,
    unauthorizedResponse: getUnauthorizedResponse
}));
function getUnauthorizedResponse(req) {
  return 'Forbidden'
}
function authorize(key, secret) {
  return global.key === key && global.secret === secret;
}


export default authenticate;
