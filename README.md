# appstore-api

An unofficial client to interact with https://api.appstoreconnect.apple.com/v1

[Official Docs](https://developer.apple.com/documentation/appstoreconnectapi)

## Install

```js
npm i appstore-api -S
```

## Usage

### Create a Client

```js
import { Client } from 'appstore-api';
import fs from 'fs';
import path from 'path';
let client = new Client({
  iss: '<iss>',
  kid: '<kid>',
  secret: fs.readFileSync(path.resolve(__dirname, '../tmp/AuthKey_<kid>.p8'))
});
```

### BundleId API

```js
let api = client.api('bundleId');

let bundles = await api.list();
let bundleUniqueId = '<bundle_id>';
let bundle = await api.get(bundleUniqueId);
let capabilities = await api.capabilities(bundleUniqueId);
let profiles = await api.profiles(bundleUniqueId);
let createResult = await api.create('new bundle', 'com.newbundle.abc123');
let deleteResult = await api.delete(bundleUniqueId);
```

### BundleId Capabilities API

```js
let api = client.api('bundleIdCapabilities');
let result = await api.enable('<bundle_id>', 'MAPS');
result = await api.disable('<bundle_id>_MAPS');
```

### Certificates API

```js
let api = client.api('certificates');
let csrContent = fs.readFileSync(path.resolve(__dirname, '../../tmp/ios.certSigningRequest'), 'utf-8');
let list = await api.list();
let cert = await api.get('<cert_id>');
let createdCert = await api.create('IOS_DISTRIBUTION', csrContent);
let result = await api.delete('<cert_id>');
```

### Devices API

```js
let api = client.api('device');
let list = await api.list();
let device = await api.get('<device_id>');
let createResult = await api.create('<device_name>', '<udid>');
```

### Profiles API

```js
let api = client.api('profiles');
let profileId = '<profile_id>';
let list = await api.list();
let profile = await api.get(profileId);
let createResult = await api.create('<profile_name>', '<bundle_id>', '<profile_type>', ['<device_id_1>', '<device_id_2>'], ['<cert_id_1>', '<cert_id_2>']);
let devices = await api.devices(profileId);
let certificates = await api.certificates(profileId);
```

## References

- [appstore-connect-api](https://github.com/myappcloud/appstore-connect-api)
