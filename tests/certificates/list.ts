import client from '../client';

const run = async () => {
  let api = client.api('certificates');
  try {
    let result = await api.list();
    console.log(JSON.stringify(result, null, '  '));
  } catch (ex) {
    console.error(ex.message);
  }
};

run();
