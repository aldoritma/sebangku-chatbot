'use strict';
import lineConfig from '../../config/line';
// import line from '@line/bot-sdk';
const line = require('@line/bot-sdk');

const client = new line.Client({
  channelAccessToken: lineConfig.channelAccessToken
});


class LineBot {
  push(to, message) {
    console.log(message);
    return Promise.resolve(client.pushMessage(to, message));
  }

  reply(token, message) {
    console.log(message);
    client.replyMessage(token, message)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  getProfile(userId) {
    return client.getProfile(userId)
      .then((profile) => {
        return Promise.resolve(profile);
      })
      .catch((err) => {
        // error handling
      });
  }

  template(token) {
      // client.replyMessage(token,confirmMessage());
  }
  static createMessage() {

  }
}

export default new LineBot();
