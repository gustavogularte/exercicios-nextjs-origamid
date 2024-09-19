'use client';
import React from 'react';

type InputProps = React.ComponentProps<'input'> & {
  label: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
};

const Input = ({ label, id, setValue, ...props }: InputProps) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        {...props}
        onChange={({ target }) => setValue(target.value)}
      />
    </>
  );
};

export default Input;
