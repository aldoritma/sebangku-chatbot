'use strict';
/**
* Event for handling every request from Chatbot
* It's for use separate every type of event and send to controller
*/


export default function handleEvent(event) {
  switch (event.type) {
    case 'follow':

      // LineBot.getProfile(event.source.userId).then((resp) => {
      //   axios({
      //     url: 'http://sebangku.uatwebsite.com/api/v1/register-line',
      //     method: 'POST',
      //     data: {
      //       name: resp.displayName,
      //       uuid: resp.userId
      //     },
      //     headers: {
      //       'Accept' : 'application/json'
      //     }
      //   }).then((resp) => {
      //     if(resp.status === 200) {
      //         Bot.reply(event.replyToken, {
      //           type: 'text',
      //           text: `Hai ${resp.data.data.name}!, selamat datang. Untuk memverifikasi silahkan masukan Line ID anda terlebih dahulu. Dengan format @line-id-kamu`
      //         }).then((res) => {console.log(res)});
      //     }
      //   }, (err) => {
      //     console.log(err);
      //   });
      //
      // });
      break;
      case 'postback':
        console.log('event');
      break;
      case 'message':
      console.log(event.replyToken );
        return Message.handleMessage(event.replyToken , event.message);
    default:
      return Promise.resolve(null);
  }
}
