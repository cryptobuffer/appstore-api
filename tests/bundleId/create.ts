import BundleIdAPI from '../../src/apis/BundleIdAPI';
import client from '../client';

const run = async () => {
  let api = client.api('bundleId') as BundleIdAPI;
  let result = await api.create('new bundle', 'com.newbundle.app');
  console.log(JSON.stringify(result, null, '  '));
};

run();
