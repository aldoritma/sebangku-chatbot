'use strict';
import {Router} from 'express';
import Response from '../app/lib/response';
import authenticate from '../app/middleware/auth';
import parser from 'body-parser';
import multer from 'multer';
import {global} from '../config/app';
import lineConfig from '../config/line';
import NotificationController from '../app/controller/notification';
let router = Router();
const response = new Response();
// Blast Notification Assignment
router.use(parser.urlencoded({extended: true}));
router.use(parser.json());
router.use(authenticate, function(req,res,next) {
  next();
});

router.get('/', (req,res) => {
  res.json({message: 'ler from wulan'});
});
/**
* Notification for assignment
* @param array userId
*/

router.post('/v1/notification/assignment', NotificationController.assignment);



export default router;
