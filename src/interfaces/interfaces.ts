import { CountryCurrencies, CountryName } from '../types/CountryTypes';

export interface AllData {
  name: CountryName;
  c2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: CountryCurrencies;
  idd: string[];
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: string[];
  translations: string[];
  latlng: number[];
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: string[];
  flag: string;
  maps: string[];
  population: number;
  gini: number[];
  fifa: string;
  car: string[];
  timezones: string[];
  continents: string[];
  flags: string[];
  coatOfArms: string[];
  startOfWeek: string;
  capitalInfo: string[];
  postalCode: string[];
}

export interface CountryProps {
  country: AllData;
}
