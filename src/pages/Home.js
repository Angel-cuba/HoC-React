import React from 'react';
import withFetchHook from '../fetchHook/FetchHook.js';

const Home = ({ data }) => {
	console.log(data);
	return <div>Home</div>;
};

export default withFetchHook(Home, 'https://restcountries.com/v3.1/all');
