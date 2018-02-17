'use strict';
import dotenv from 'dotenv';
// to load from .env file
dotenv.load();

const line = {
  channelId:  process.env.CHANNEL_ID,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.CHANNEL_SECRET
}

export default line;
