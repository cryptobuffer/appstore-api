import DeviceAPI from './apis/DeviceAPI';
import ProfilesAPI from './apis/ProfilesAPI';
import CertificatesAPI from './apis/CertificatesAPI';
import BundleIdAPI from './apis/BundleIdAPI';
import BundleIdCapabilityAPI from './apis/BundleIdCapabilityAPI';
import BaseAPI from './apis/BaseAPI';
import * as jwt from 'jsonwebtoken';

export interface Config {
  iss: String;
  kid: String;
  secret: String | Buffer;
}

declare type APINAME = 'device' | 'bundleId' | 'bundleIdCapabilities' | 'profiles' | 'certificates';

export class Client {
  BASE_URL = 'https://api.appstoreconnect.apple.com/v1';

  JWT_AUD = 'appstoreconnect-v1';

  JWT_ALG = 'ES256';

  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  public api(name: APINAME): BaseAPI {
    let api: BaseAPI;
    switch (name) {
      case 'device':
        return new DeviceAPI(this);
      case 'bundleId':
        return new BundleIdAPI(this);
      case 'bundleIdCapabilities':
        return new BundleIdCapabilityAPI(this);
      case 'profiles':
        return new ProfilesAPI(this);
      case 'certificates':
        return new CertificatesAPI(this);
      default:
        throw new Error(`API ${name} is not implemented`);
    }
  }

  public header(): object {
    const NOW = Math.round(new Date().getTime() / 1000);
    const PAYLOAD = {
      iss: this.config.iss,
      exp: NOW + 1200,
      aud: this.JWT_AUD
    };
    const SIGN_OPTS: jwt.SignOptions = {
      algorithm: this.JWT_ALG,
      header: {
        alg: this.JWT_ALG,
        kid: this.config.kid,
        typ: 'JWT'
      }
    };
    let token = jwt.sign(PAYLOAD, this.config.secret, SIGN_OPTS);
    return {
      Authorization: `Bearer ${token}`
    };
  }
}
