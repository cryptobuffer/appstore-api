import { Client } from '../src';
import fs from 'fs';
import path from 'path';
require('dotenv').config();

let client = new Client({
  iss: process.env.ISS as string,
  kid: process.env.KID as string,
  secret: fs.readFileSync(path.resolve(__dirname, `../tmp/AuthKey_${process.env.KID}.p8`))
});

export default client;
