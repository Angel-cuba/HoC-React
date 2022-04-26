import { useState } from 'react';
import Button from '../components/Button';
import { Input } from '../components/Input';
import withFetchHook from '../fetchHook/FetchHook';
import { AllData } from '../interfaces/interfaces.js';

interface Props {
  data: AllData[];
}

const Home = ({ data }: Props) => {
  const [value, setValue] = useState('');
  const handleValue = (e: any) => setValue(e.target.value);
  console.log(value);
  console.log(data);
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div className="">
      Home
      <Input value={value} onChange={handleValue} />
      <Button label="Click me" size="sm" onClick={handleClick} className={''} />
      <Button label="Click me" size="md" onClick={handleClick} className={''} />
      <Button label="Click me" size="lg" onClick={handleClick} className={''} />
    </div>
  );
};

export default withFetchHook(Home, 'https://restcountries.com/v3.1/all');
