'use strict';

import express from 'express';
import message from '../../routes/hook';
import api from '../../routes/api';

const app = express();
const port = process.env.PORT || 8080;
export default class App {
  constructor() {
    this.start = this.start.bind(this);
  }
  start(){
    // Authenticate
    app.use('/wulan', api);

    /**
     * Routes to hook from linebot
     */
    app.post('/hook', message);

    app.get('/', (req,res) => {
      res.json({message: 'ler'});
    });
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    });
  };
}
