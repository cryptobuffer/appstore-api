import BaseAPI from './BaseAPI';
declare type PROFILE_TYPE = 'IOS_APP_DEVELOPMENT' | 'TVOS_APP_DEVELOPMENT' | 'MAC_APP_DEVELOPMENT' | 'IOS_APP_ADHOC' | 'TVOS_APP_ADHOC' | 'IOS_APP_STORE' | 'TVOS_APP_STORE' | 'MAC_APP_STORE' | 'MAC_APP_DIRECT';
export default class ProfilesAPI extends BaseAPI {
  public async list(params = {}): Promise<any> {
    return this.axios.get('/profiles', { params }).then((resp) => resp.data);
  }

  public async create(name: string, bid: string, profileType: PROFILE_TYPE, devices: Array<string>, certificates: Array<string>) {
    let data = {
      data: {
        type: 'profiles',
        relationships: {
          bundleId: {
            data: {
              type: 'bundleIds',
              id: bid
            }
          },
          devices: {
            data: devices.map((item) => {
              return {
                type: 'devices',
                id: item
              };
            })
          },
          certificates: {
            data: certificates.map((item) => {
              return {
                type: 'certificates',
                id: item
              };
            })
          }
        },
        attributes: {
          profileType,
          name: name
        }
      }
    };
    return this.axios.post('/profiles', data).then((resp) => resp.data);
  }

  public async get(id: string): Promise<any> {
    return this.axios.get(`/profiles/${id}`).then((resp) => resp.data);
  }

  public async delete(id: string): Promise<any> {
    return await this.axios.delete(`/profiles/${id}`).then((resp) => resp.data);
  }

  public async devices(id: string, params = {}): Promise<any> {
    return await this.axios.get(`/profiles/${id}/devices`, { params }).then((resp) => resp.data);
  }

  public async certificates(id: string, params = {}): Promise<any> {
    return await this.axios.get(`/profiles/${id}/relationships/certificates`, { params }).then((resp) => resp.data);
  }
}
