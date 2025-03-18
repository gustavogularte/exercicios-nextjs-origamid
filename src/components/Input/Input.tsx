import React from 'react';

type InputProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
export default function Input({
  label,
  id,
  setValue,
  value,
  type,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        onChange={({ target }) => setValue(target.value)}
        value={value}
      />
    </div>
  );
}
