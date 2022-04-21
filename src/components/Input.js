import { useState } from 'react';

export const Input = ({ render }) => {
	const [value, setValue] = useState();
	const handleValue = (e) => setValue(e.target.value);
	return (
		<>
			<input
				type="text"
				name="value"
				value={value}
				onChange={handleValue}
				placeholder="Enter value"
			/>
			{render(value)}
		</>
	);
};
