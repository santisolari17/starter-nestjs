export interface IGeoIpLookupInfo {
  /** 2 letter ISO-3166-1 country code https://www.iban.com/country-codes */
  country: string;
  /**
   * Up to 3 alphanumeric variable length characters as ISO 3166-2 code
   * For US states this is the 2 letter state
   * For the United Kingdom this could be ENG as a country like “England
   * FIPS 10-4 subcountry code
   */
  region: string;
  /** "Country/Zone" Timezone from IANA Time Zone Database */
  timezone: string;
  /** This is the full city name */
  city: string;
  /** The latitude of the city */
  lat: number;
  /** The longitude of the city */
  lon: number;
}
