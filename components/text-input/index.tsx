import { InputHTMLAttributes } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function TextInput({
  label,
  ...inputProps
}: TextInputProps): JSX.Element {
  return (
    <div
      className={`flex flex-col space-y-3 ${inputProps?.className}`}
      data-testid="text-input-root"
    >
      {label && (
        <label htmlFor={inputProps.id} className="text-sm sm:text-lg">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        className="bg-white w-full border border-gray-400 rounded-md shadow-md py-3 px-5 text-sm text-black sm:text-lg placeholder-gray-400"
      />
    </div>
  );
}
