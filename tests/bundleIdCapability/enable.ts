import BundleIdCapabilityAPI from '../../src/apis/BundleIdCapabilityAPI';
import client from '../client';

const run = async () => {
  let api = client.api('bundleIdCapabilities') as BundleIdCapabilityAPI;
  let result = await api.enable('<bundle_id>', 'MAPS');
  console.log(JSON.stringify(result, null, '  '));
};

run();
