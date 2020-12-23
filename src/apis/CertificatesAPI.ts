import BaseAPI from './BaseAPI';

declare type CertificateType = 'IOS_DEVELOPMENT' | 'IOS_DISTRIBUTION' | 'MAC_APP_DISTRIBUTION' | 'MAC_INSTALLER_DISTRIBUTION' | 'MAC_APP_DEVELOPMENT' | 'DEVELOPER_ID_KEXT' | 'DEVELOPER_ID_APPLICATION' | 'DEVELOPMENT' | 'DISTRIBUTION';

export default class CertificatesAPI extends BaseAPI {
  public async list(params = {}): Promise<any> {
    return this.axios.get('/certificates', { params }).then((resp) => resp.data);
  }

  public async get(id: string): Promise<any> {
    return this.axios.get(`/certificates/${id}`).then((resp) => resp.data);
  }

  public async delete(id: string): Promise<any> {
    return this.axios.delete(`/certificates/${id}`).then((resp) => resp.data);
  }

  public async create(certificateType: CertificateType, csrContent: string): Promise<any> {
    return this.axios
      .post('/certificates', {
        data: {
          type: 'certificates',
          attributes: {
            certificateType: certificateType,
            csrContent: csrContent
          }
        }
      })
      .then((resp) => resp.data);
  }
}
