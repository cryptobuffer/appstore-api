import BundleIdAPI from '../../src/apis/BundleIdAPI';
import client from '../client';

const run = async () => {
  let api = client.api('bundleId') as BundleIdAPI;
  try {
    let allBundleIds = await api.list();
    console.log(JSON.stringify(allBundleIds, null, '  '));
  } catch (ex) {
    console.error(ex.message);
  }
};

run();
