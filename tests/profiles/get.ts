import client from '../client';

const run = async () => {
  let api = client.api('profiles');
  try {
    let result = await api.get('<profile_id>');
    console.log(JSON.stringify(result, null, '  '));
  } catch (ex) {
    console.error(ex.message);
  }
};

run();
