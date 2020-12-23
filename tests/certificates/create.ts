import client from '../client';
import fs from 'fs';
import path from 'path';

const run = async () => {
  let api = client.api('certificates');
  try {
    let csrContent = fs.readFileSync(path.resolve(__dirname, '../../tmp/ios.certSigningRequest'), 'utf-8');
    let result = await api.create('IOS_DEVELOPMENT', csrContent);
    console.log(JSON.stringify(result, null, '  '));
  } catch (ex) {
    console.error(ex.message);
  }
};

run();
