import client from '../client';

const run = async () => {
  let api = client.api('bundleId');
  try {
    let bundleUniqueId = '<bundle_id>';
    let bundle = await api.get(bundleUniqueId);
    let capabilities = await api.capabilities(bundleUniqueId);
    let profiles = await api.profiles(bundleUniqueId);
    console.log(
      JSON.stringify(
        {
          bundle,
          capabilities,
          profiles
        },
        null,
        '  '
      )
    );
  } catch (ex) {
    console.error(ex.message);
  }
};

run();
