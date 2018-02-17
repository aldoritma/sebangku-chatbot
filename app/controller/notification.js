'use strict';
import LineBot from '../lib/line';
import axios from 'axios';
import {buttonMessage} from '../lib/template';

class NotificationController {

  /**
  * Handle Message recieved from hook and separate from different jobs
  * @param {token, message}
  *
  **/
  assignment(req, res) {
    let {userId} = req.body;
    userId = userId.split(',');
    userId.map((item, index) => {
      LineBot.push(item, buttonMessage(req.body.title, [
         {
          "type": "postback",
          "label": "Enroll Assignment",
          "data": "enroll=122&status=start"
        }
      ]));
    });

    res.sendStatus(200).end();
  }

}


export default new NotificationController();
