import BaseAPI from './BaseAPI';

export default class BundleIdAPI extends BaseAPI {
  /**
   * list all bundle ids
   */
  public async list(params = {}): Promise<any> {
    return await this.axios.get('/bundleIds', { params }).then((resp) => resp.data);
  }
  /**
   * register a new bundle id
   * @param name id name
   * @param identifier bundle identifier
   */
  public async create(name: string, identifier: string): Promise<any> {
    return await this.axios
      .post('/bundleIds', {
        data: {
          type: 'bundleIds',
          attributes: {
            identifier: identifier,
            name: name
          }
        }
      })
      .then((resp) => resp.data);
  }

  public async delete(id: string): Promise<any> {
    return await this.axios.delete(`/bundleIds/${id}`).then((resp) => resp.data);
  }

  public async get(id: string): Promise<any> {
    return await this.axios.get(`/bundleIds/${id}`).then((resp) => resp.data);
  }

  public async capabilities(id: string): Promise<any> {
    return await this.axios.get(`/bundleIds/${id}/bundleIdCapabilities`).then((resp) => resp.data);
  }

  public async profiles(id: string): Promise<any> {
    return await this.axios.get(`/bundleIds/${id}/profiles`).then((resp) => resp.data);
  }
}
