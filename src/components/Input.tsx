type InputProps = {
  value: string;
  onChange: (e: any) => void;
};

export const Input = ({ value, onChange }: InputProps) => {
  return (
    <>
      <input type="text" name="value" placeholder="Enter value" value={value} onChange={onChange} />
    </>
  );
};
