import { useState } from 'react';
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
  return (
    <div>
      Home
      <Input value={value} onChange={handleValue} />
    </div>
  );
};

export default withFetchHook(Home, 'https://restcountries.com/v3.1/all');
