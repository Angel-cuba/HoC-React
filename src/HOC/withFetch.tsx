import React, { useState, useEffect } from 'react';
import { AllData } from '../interfaces/interfaces';

const withFetch = (Component: any, url: string) => {
  return (props: any) => {
    const [countries, setCountries] = useState<null | AllData[]>(null);
    const [searchedCountries, setSearchedCountries] = useState<null | AllData[]>(null);

    console.log('withFetch', countries);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleSearch = (value: string) => {
      const searchBy = value.toLocaleLowerCase();
      const filteredCountry =
        countries &&
        countries.filter((country) => {
          const name = country.name.common.toLowerCase();
          if (name.startsWith(searchBy)) {
            return country;
          }
          return undefined;
        });

      console.log('country', filteredCountry);
      filteredCountry && setSearchedCountries(filteredCountry);
    };

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!countries) {
      return <div>No data to show</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <Component
        {...props}
        data={countries}
        searchedCountries={searchedCountries}
        handleSearch={handleSearch}
      />
    );
  };
};
export default withFetch;
