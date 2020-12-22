import BundleIdAPI from '../../src/apis/BundleIdAPI';
import client from '../client';

const run = async () => {
  let api = client.api('bundleId') as BundleIdAPI;
  try {
    let result = await api.delete('<bundle_id>');
    console.log(JSON.stringify(result, null, '  '));
  } catch (ex) {
    console.error(ex.message);
  }
};

run();
