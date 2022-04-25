import withFetchHook from '../fetchHook/FetchHook';
import { AllData } from '../interfaces/interfaces.js';

interface Props {
  data: AllData[];
}

const Home = ({ data }: Props) => {
  console.log(data);
  return <div>Home</div>;
};

export default withFetchHook(Home, 'https://restcountries.com/v3.1/all');
