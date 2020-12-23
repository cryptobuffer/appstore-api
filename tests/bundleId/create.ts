import client from '../client';

const run = async () => {
  let api = client.api('bundleId');
  let result = await api.create('new bundle', 'com.newbundle.app');
  console.log(JSON.stringify(result, null, '  '));
};

run();
