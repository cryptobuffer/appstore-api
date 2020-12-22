import BaseAPI from './BaseAPI';

declare type CAPBILITY =
  | 'ACCESS_WIFI_INFORMATION'
  | 'APP_ATTEST'
  | 'APP_GROUPS'
  | 'APPLE_PAY'
  | 'ASSOCIATED_DOMAINS'
  | 'AUTOFILL_CREDENTIAL_PROVIDER'
  | 'CLASSKIT'
  | 'NETWORK_CUSTOM_PROTOCOL'
  | 'DATA_PROTECTION'
  | 'EXTENDED_VIRTUAL_ADDRESSING'
  | 'FONT_INSTALLATION'
  | 'GAME_CENTER'
  | 'HEALTHKIT'
  | 'HOMEKIT'
  | 'HOT_SPOT'
  | 'ICLOUD'
  | 'IN_APP_PURCHASE'
  | 'INTER_APP_AUDIO'
  | 'COREMEDIA_HLS_LOW_LATENCY'
  | 'MAPS'
  | 'MDM_MANAGED_ASSOCIATED_DOMAINS'
  | 'MULTIPATH'
  | 'NETWORK_EXTENSIONS'
  | 'NFC_TAG_READING'
  | 'PERSONAL_VPN'
  | 'PUSH_NOTIFICATIONS'
  | 'APPLE_ID_AUTH'
  | 'SIRIKIT'
  | 'SYSTEM_EXTENSION_INSTALL'
  | 'USER_MANAGEMENT'
  | 'WALLET'
  | 'WIRELESS_ACCESSORY_CONFIGURATION'
  | 'ENABLED_FOR_MAC';

export default class BundleIdCapabilityAPI extends BaseAPI {
  public async enable(bid: string, capability: CAPBILITY): Promise<any> {
    let data = {
      data: {
        type: 'bundleIdCapabilities',
        relationships: {
          bundleId: {
            data: {
              type: 'bundleIds',
              id: bid
            }
          }
        },
        attributes: {
          capabilityType: capability
        }
      }
    };
    return await this.axios.post('/bundleIdCapabilities', data).then((resp) => resp.data);
  }

  public async disable(capId): Promise<any> {
    return await this.axios.delete(`/bundleIdCapabilities/${capId}`).then((resp) => resp.data);
  }
}
