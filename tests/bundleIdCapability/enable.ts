import client from '../client';

const run = async () => {
  let api = client.api('bundleIdCapabilities');
  let result = await api.enable('<bundle_id>', 'MAPS');
  console.log(JSON.stringify(result, null, '  '));
};

run();
