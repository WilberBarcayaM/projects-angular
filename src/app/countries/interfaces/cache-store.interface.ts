import { Country } from "./country"
import { Region } from "./region.type";


export interface CacheStore {
  byCapital: TermCountries;
  byCountries: TermCountries;
  byRegion: RegionCuntries;
}

export interface TermCountries {
  term: string,
  countries: Country[];
}

export interface RegionCuntries {
  region?: Region,
  countries: Country[];
}
