import DeviceAPI from '../../src/apis/DeviceAPI';
import client from '../client';

const run = async () => {
  let api = client.api('device') as DeviceAPI;
  try {
    let result = await api.list();
    console.log(JSON.stringify(result, null, '  '));
  } catch (ex) {
    console.error(ex.message);
  }
};

run();
