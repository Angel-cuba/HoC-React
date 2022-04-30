import React from 'react';
import { CountryProps } from '../interfaces/interfaces';

const Country = ({ country }: CountryProps) => {
  // console.log(country);
  return (
    <>
      <h1>Single Contry</h1>
      <h2>{country.name.common}</h2>
      <h2>Region: {country.region}</h2>
    </>
  );
};

export default Country;
