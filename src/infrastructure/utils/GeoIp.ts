import { Injectable } from '@nestjs/common';
import * as GeoIpLite from 'geoip-lite';
import { IGeoIpLookupInfo } from '../interfaces/IGeoIpLookupInfo';
import { IGeolacationLookup } from '../interfaces/IGeolocationLookup';

@Injectable()
export class GeoIp implements IGeolacationLookup {
  public getIpInfo(ip: string): IGeoIpLookupInfo {
    const response = GeoIpLite.lookup(ip);
    return {
      country: response.country,
      region: response.region,
      timezone: response.timezone,
      city: response.city,
      lat: response.ll[0],
      lon: response.ll[1],
    };
  }
}
