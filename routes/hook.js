import {Router} from 'express';
import lineConfig from '../config/line';
import Message from '../app/controller/message';
import LineBot from '../app/lib/line';
import axios from 'axios';
import handleEvent from '../app/event/handler';
const router = Router();
const middleware = require('@line/bot-sdk').middleware;




const message =  router.post('/hook', middleware(lineConfig), (req, res) => {
    if (!Array.isArray(req.body.events)) {
      return res.status(500).end();
    }
    Promise.all(req.body.events.map(handleEvent))
      .then(() => {
        res.status(200).end();
      })
      .catch((err) => {
        console.error(err);
        res.status(500).end();
      });
  });

const profile = router.get('/')

export default message;
