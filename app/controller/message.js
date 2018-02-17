'use strict';
import LineBot from '../lib/line';
import axios from 'axios';

class MessageController {


  /**
  * Handle Message recieved from hook and separate from different jobs
  * @param {token, message}
  *
  **/
  handleMessage(token, message) {
    console.log(message.type);
    switch (message.type) {
      case 'text':
        LineBot.template(token);
        break;
      case 'image':
        console.log('image');
        break
      case 'audio':
        console.log('audio');
        break
      case 'sticker':
        console.log('sticker');
        break
      default:
        console.log('You cannot post this type of message')
    }
  }

}

function getLineId(text) {
    return (text[0] === '@');
}

function extractLineId(txt) {
  return trim(text, '@');
}

export default new MessageController();
