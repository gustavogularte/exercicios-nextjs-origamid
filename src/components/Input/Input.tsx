import React from 'react';

type InputProps = {
  label: string;
  id: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  type: string
};

export default function Input({ label, id, setValue, value, type }: InputProps) {
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
