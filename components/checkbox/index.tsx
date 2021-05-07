import { ReactNode, InputHTMLAttributes } from 'react';

interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  children: ReactNode;
  help: string;
  value: string;
  name: string;
  defaultChecked?: boolean;
}

export default function Checkbox({
  children,
  help,
  value,
  name,
  disabled,
  defaultChecked,
  onChange,
}: CheckboxProps): JSX.Element {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <input
          id={value}
          name={name}
          type="checkbox"
          disabled={disabled}
          defaultChecked={defaultChecked}
          className="focus:ring-indigo-500 h-5 w-5 text-indigo-600 border-gray-300"
          onChange={onChange}
        />
        <label
          htmlFor={value}
          className="ml-3 block text-base sm:text-lg cursor-pointer">
          {children}
        </label>
      </div>
      <span
        data-testid="text-checkbox"
        className="ml-8 text-sm sm:text-lg text-gray-400">
        {help}
      </span>
    </div>
  );
}
