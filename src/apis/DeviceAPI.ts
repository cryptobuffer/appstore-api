import BaseAPI from './BaseAPI';

declare type PLATFORM = 'IOS' | 'MACOS' | 'TVOS' | 'WATCHOS';

export default class DeviceAPI extends BaseAPI {
  public async list(params = {}): Promise<any> {
    return this.axios.get('/devices', { params }).then((resp) => resp.data);
  }
  public async create(deviceName: string, udid: string, platform: PLATFORM = 'IOS'): Promise<any> {
    let data = {
      data: {
        type: 'devices',
        attributes: {
          deviceName,
          platform,
          udid
        }
      }
    };
    return this.axios.post('/devices', data).then((resp) => resp.data);
  }

  public async get(id: string): Promise<any> {
    return this.axios.get(`/devices/${id}`).then((resp) => resp.data);
  }
}
