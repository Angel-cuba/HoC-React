import { useState, useEffect } from 'react';

export default function withFetchHook(Component, url) {
	return (props) => {
		const [data, setData] = useState(null);
		const [loading, setLoading] = useState(true);
		const [error, setError] = useState(null);

		useEffect(() => {
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setData(data);
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

		if (!data) {
			return <div>No data to show</div>;
		}

		if (error) {
			return <div>Error: {error.message}</div>;
		}

		return <Component {...props} data={data} />;
	};
}

// export default FetchHook;
