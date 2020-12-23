import client from '../client';

const run = async () => {
  let api = client.api('bundleId');
  try {
    let result = await api.delete('<bundle_id>');
    console.log(JSON.stringify(result, null, '  '));
  } catch (ex) {
    console.error(ex.message);
  }
};

run();
