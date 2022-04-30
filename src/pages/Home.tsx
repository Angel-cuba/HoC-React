import { useState } from 'react';

import Button from '../components/Button';
import { Input } from '../components/Input';
import withFetch from '../HOC/withFetch';
import Country from './Country';
import { AllData } from '../interfaces/interfaces.js';
import '../sass/App.scss';

interface HomeProps {
  data?: AllData[];
  handleSearch?: (value: string) => void;
  searchedCountries?: AllData[];
}

const Home = ({ data, handleSearch, searchedCountries }: HomeProps) => {
  // console.log(data);
  console.log('searchedCountries', searchedCountries);
  const [value, setValue] = useState('');
  const handleValue = (e: any) => {
    if (handleSearch) {
      handleSearch(e.target.value);
    }
    setValue(e.target.value);
  };
  console.log(value);
  // console.log(data);
  const handleClick = () => {
    console.log('clicked');
  };

  const handleRenderCountries = (countries: AllData[] | undefined) => {
    return countries?.map((c, index: number) => {
      return <Country key={index} country={c} />;
    });
  };

  return (
    <div className="home">
      Home
      <Input value={value} onChange={handleValue} />
      <div className="buttonSection">
        <Button label="Click me" size="sm" onClick={handleClick} className={''} />
        <Button label="Click me" size="md" onClick={handleClick} className={''} />
        <Button label="Click me" size="lg" onClick={handleClick} className={''} />
      </div>
      {searchedCountries ? handleRenderCountries(searchedCountries) : handleRenderCountries(data)}
    </div>
  );
};

export default withFetch(Home, 'https://restcountries.com/v3.1/all');
