import client from '../client';

const run = async () => {
  let api = client.api('bundleIdCapabilities');
  let result = await api.disable('<bundle_id>_MAPS');
  console.log(JSON.stringify(result, null, '  '));
};

run();
