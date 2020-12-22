import BaseAPI from './BaseAPI';

declare type CertificateType = 'DEVELOPMENT' | 'DISTRIBUTION';

export default class CertificatesAPI extends BaseAPI {
  public async list(params = {}): Promise<any> {
    return this.axios.get('/certificates', { params }).then((resp) => resp.data);
  }
  public async get(id: string): Promise<any> {
    return this.axios.get(`/certificates/${id}`).then((resp) => resp.data);
  }
}
