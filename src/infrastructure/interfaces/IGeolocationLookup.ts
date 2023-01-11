import { IGeoIpLookupInfo } from './IGeoIpLookupInfo';

export interface IGeolacationLookup {
  getIpInfo(ip: string): IGeoIpLookupInfo;
}
