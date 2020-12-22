import { Client } from '../src';
import fs from 'fs';
import path from 'path';
let client = new Client({
  iss: '<iss>',
  kid: '<kid>',
  secret: fs.readFileSync(path.resolve(__dirname, '../tmp/AuthKey_<kid>.p8'))
});

export default client;
