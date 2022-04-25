import React, { useState, useEffect } from 'react';

const withFetchHook = (Component: any, url: string) => {
  return (props: any) => {
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
      return <div>Error: {error}</div>;
    }

    return <Component {...props} data={data} />;
  };
};
export default withFetchHook;
