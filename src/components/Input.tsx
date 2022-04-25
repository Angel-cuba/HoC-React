import React, { useState } from 'react';

export const Input = ({ render }: any) => {
  const [value, setValue] = useState('');
  // const handleValue = (e: React.FormEvent<HTMLElement>) => setValue(e.target.value);
  return (
    <>
      <input
        type="text"
        name="value"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />
      {render(value)}
    </>
  );
};
