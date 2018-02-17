'use strict';
import dotenv from 'dotenv';
// to load from .env file
dotenv.load();

const global = {
  baseUrl: process.env.BASE_URL || 'http://localhost:8080',
  key: process.env.APP_KEY,
  secret: process.env.APP_SECRET,
  lineEndpoint: 'https://api.line.me/v2/bot',
  apiEndPoint: 'http://sebangku.uatwebsite.com'
}

export {global};
